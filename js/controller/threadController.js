controller.initThreadPage = function (id) {
    let filmData = model.allFilmDatas.find(function (film) {
        return film.id === id;
    });

    controller.addThreadInfo(filmData);
    // controller.addThreadReviews(filmData.reviews);
    controller.addThreadRelated(id);
    controller.listenReviewsUpdate(id);
}

controller.addThreadInfo = function (filmData) {
    let app = document.getElementById('app');
    app.innerHTML = components.thread(filmData);
}

controller.addThreadReviews = function (reviews) {
    let reviewComponents = document.getElementById('comment-container');
    for (let review of reviews) {
        reviewComponents.innerHTML += components.addReviewsItems(review)
    }
}

controller.addThreadRelated = function (id) {
    let filmDatas = model.allFilmDatas;
    let filmIndex = filmDatas.findIndex(function (film) {
        return film.id === id
    })

    sortedFilmDatas = filmDatas.sort(function (a, b) {
        return Math.abs((filmDatas.indexOf(a) - filmIndex)) - Math.abs((filmDatas.indexOf(b) - filmIndex));
    })

    relatedFilmDatas = sortedFilmDatas.slice(0, 6);
    relatedFilmDatas.splice(0, 1);

    for (let film of relatedFilmDatas) {
        let relatedFilm = document.getElementById('related-film');
        relatedFilm.innerHTML += components.addRelatedItem(film)
    }
}

controller.listenReviewsUpdate = function (id) {
    firebase.firestore().collection('films').doc(id)
        .onSnapshot(async function (snapshot) {
            let reviews = snapshot.data().reviews;
            convertedReviews = await Promise.all(reviews.map(async function(review) {
                let reviewer = await firebase.firestore().collection('users').doc(review.user).get();
                review.photoURL = reviewer.data().photoURL;
                review.displayName = reviewer.data().displayName;
                review.timeStampString = controller.generateDate(review.timeStamp.toDate());
                return review
            }))
            controller.addThreadReviews(convertedReviews)
        })
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
                user: firebase.auth().currentUser.uid
            };
            firebase.firestore().collection('films').doc(id).update({
                reviews: firebase.firestore.FieldValue.arrayUnion(review)
            })
        } catch (error) {
            console.log(error.message)
        }
    }
}

controller.validateReviewForm = function (form) {
    if (!form.content.value) {
        throw new Error('Bình luận không được để trống')
    }
    if (!form.star.value) {
        throw new Error('Bạn chưa đánh giá phim')
    }
}