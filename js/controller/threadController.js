controller.initThreadPage = function (id) {
    let filmData = model.allFilmDatas.find(function (film) {
        return film.id === id;
    });

    controller.addThreadInfo(filmData);
    controller.addVideoEvent();
    controller.addThreadRelated(id);
    controller.listenReviewsUpdate(id, 'date');
    controller.setReviewSortMethod(id);
}

controller.addVideoEvent = function () {
    let videoTrigger = document.getElementById('thread-video');
    let videoModal = document.getElementById('video-modal');

    videoTrigger.onclick = showVideo;
    videoModal.onclick = hideVideo;

    function showVideo() {
        videoModal.style.visibility = 'visible';
        videoModal.style.opacity = '1';
    }

    function hideVideo(e) {
        if (e.target === videoModal) {
            videoModal.style.visibility = 'hidden';
            videoModal.style.opacity = '0';
        }
    }
}

controller.addThreadInfo = function (filmData) {
    let app = document.getElementById('app');
    app.innerHTML = components.thread(filmData);
}

controller.addThreadReviews = function (reviews) {
    let reviewComponents = document.getElementById('comment-container');
    reviewComponents.innerHTML = ''
    for (let review of reviews) {
        reviewComponents.innerHTML += components.addReviewsItems(review)
    }
}

controller.addThreadRelated = function (id) {
    sortRelatedFilm();
    addRelatedFilm();
    addRelatedFilmEvent();

    function sortRelatedFilm() {
        let filmDatas = model.allFilmDatas;
        let filmIndex = filmDatas.findIndex(function (film) {
            return film.id === id
        })
        sortedFilmDatas = filmDatas.sort(function (a, b) {
            return Math.abs((filmDatas.indexOf(a) - filmIndex)) - Math.abs((filmDatas.indexOf(b) - filmIndex));
        })

        relatedFilmDatas = sortedFilmDatas.slice(0, 6);
        relatedFilmDatas.splice(0, 1);
    }

    function addRelatedFilm() {
        for (let film of relatedFilmDatas) {
            let relatedFilm = document.getElementById('related-film');
            relatedFilm.innerHTML += components.addRelatedItem(film)
        }
    }

    function addRelatedFilmEvent() {
        let relatedFilms = document.querySelectorAll('.related-item-name');
        for (let film of relatedFilms) {
            film.onclick = function () {
                controller.initThreadPage(film.dataset.id)
            }
        }
    }
}

controller.listenReviewsUpdate = function (id, sortMethod) {
    firebase.firestore().collection('films').doc(id)
        .onSnapshot(async function getSnapshot(snapshot) {
            let reviews = snapshot.data().reviews;
            convertedReviews = await Promise.all(reviews.map(async function (review) {
                let reviewer = await firebase.firestore().collection('users').doc(review.user).get();
                review.photoURL = reviewer.data().photoURL;
                review.displayName = reviewer.data().displayName;
                review.timeStampString = controller.generateDate(review.timeStamp.toDate());
                return review
            }));

            convertedReviews = controller.sortReview(convertedReviews, sortMethod);
            controller.addThreadReviews(convertedReviews);
            controller.updateThreadScore(snapshot);
            if (firebase.auth().currentUser) {
                controller.setReactionColor();
                controller.addReactBtnEvent();
            }
        })
}

controller.sortReview = function (reviews, sortMethod) {
    if (sortMethod === 'date') {
        reviews.sort(function (a, b) {
            return b.timeStamp.seconds - a.timeStamp.seconds
        })
        return reviews;
    }
    if (sortMethod === 'reaction') {
        reviews.sort(function (a, b) {
            return b.reactions.length - a.reactions.length
        })
        return reviews;
    }
}

controller.setReviewSortMethod = function (id) {
    let reviewSortBtn = document.getElementById('review-sort-btn');
    let dropdownMenu = document.getElementById('sort-dropdown');
    let reactionSortBtn = document.getElementById('reaction-sort');
    let dateSortBtn = document.getElementById('date-sort');

    window.onclick = onVisibilitySortBtn;
    reactionSortBtn.onclick = onReactSort;
    dateSortBtn.onclick = onDateSort;

    function onReactSort(e) {
        e.preventDefault();
        controller.listenReviewsUpdate(id, 'reaction');
    }

    function onDateSort(e) {
        e.preventDefault();
        controller.listenReviewsUpdate(id, 'date');
    }

    function onVisibilitySortBtn(event) {
        if (event.target === reviewSortBtn) {
            dropdownMenu.style.visibility = 'visible';
        } else {
            dropdownMenu.style.visibility = 'hidden';
        }
    }

}

controller.setReactionColor = function () {
    let authUserReactions = document.querySelectorAll('.true');
    for (let react of authUserReactions) {
        react.style.background = '#FD2D55';
    }
}

controller.addReviewBtnEvent = function (id) {
    let reviewBtn = document.getElementById('review-btn');
    let form = document.getElementById('rating-form');

    reviewBtn.onclick = onReview

    function onReview(e) {
        try {
            e.preventDefault();
            controller.validateReviewForm(form);
            let review = {
                content: form.content.value,
                reactions: [],
                score: parseInt(form.star.value),
                timeStamp: new Date(),
                user: firebase.auth().currentUser.uid,
            };
            review.id = review.timeStamp.getTime() + review.user;
            firebase.firestore().collection('films').doc(id).update({
                reviews: firebase.firestore.FieldValue.arrayUnion(review)
            })
        } catch (error) {
            alert(error.message)
        }
        form.content.value = ''
        form.star.value = ''
    }
}

controller.addReactBtnEvent = function () {
    let reactButtons = document.querySelectorAll('.heart')

    for (let reactButton of reactButtons) {
        reactButton.onclick = async function () {
            let uid = firebase.auth().currentUser.uid;
            let currentFilmSnapshot = firebase.firestore().collection('films').doc(model.currentFilm);
            let currentFilmReviews = await currentFilmSnapshot.get();
            currentFilmReviews = currentFilmReviews.data().reviews;
            let clickedReviewIndex = currentFilmReviews.findIndex(review => {
                return review.id === reactButton.dataset.id
            })
            let clickedReviewReactions = currentFilmReviews[clickedReviewIndex].reactions;

            if (clickedReviewReactions.includes(uid)) {
                clickedReviewReactions.splice(clickedReviewReactions.indexOf(uid), 1);
            } else {
                clickedReviewReactions.push(uid)
            }

            currentFilmSnapshot.update({ reviews: currentFilmReviews })
        }
    }
}

controller.updateThreadScore = function (film) {
    let headerScore = document.getElementById('header-score');
    let headerReview = document.getElementById('header-review');
    let footerReview = document.getElementById('footer-review');
    let numOfReviews = film.data().reviews.length;

    headerScore.innerText = controller.generateScore(film);
    headerReview.innerText = 'Lượt đánh giá ' + numOfReviews;
    footerReview.innerText = numOfReviews + ' bình luận';
}
