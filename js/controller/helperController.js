controller.validateEmail = function (email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

controller.validatePassword = function (password, confirmPassword) {
    return password === confirmPassword;
}

controller.validateRegisterForm = function (registerValue) {
    try {
        if (!registerValue.firstName) {
            throw new Error('Invalid first name')
        }
        if (!registerValue.lastName) {
            throw new Error('Invalid last name')
        }
        if (!controller.validateEmail(registerValue.email)) {
            throw new Error('Invalid email');
        }
        if (!registerValue.password) {
            throw new Error('Invalid password')
        }
        if (!controller.validatePassword(registerValue.password, registerValue.confirmPassword)) {
            throw new Error('The password confirmation does not match');
        }
        return true
    } catch (error) {
        view.setText('register-error', error.message)
    }
}

controller.validateLoginForm = function (loginValue) {
    try {
        if (!controller.validateEmail(loginValue.email)) {
            throw new Error('Invalid email');
        }
        if (!loginValue.password) {
            throw new Error('Invalid password')
        }
        return true
    } catch (error) {
        view.setText('login-error', error.message)
    }
}

controller.generateDate = function (dateObject) {
    //Date object input
    let date = dateObject.getDate();
    let month = dateObject.getMonth() + 1;
    let year = dateObject.getFullYear();
    return date + '/' + month + '/' + year
}

controller.generateScore = function (film) {
    //film document
    let sum = 0;
    let reviews = film.data().reviews;
    for (let review of reviews) {
        sum += review.score
    }
    let average = sum / reviews.length;
    if (parseInt(average) === average) {
        return average + '.0'
    }

    return Math.round(average*10)/10
}


controller.setFilmState = function (dateObject) {
    let releaseDate = Date.parse(dateObject);
    let currentTime = Date.parse(new Date());
    if (releaseDate < currentTime) {
        return 1
    }
    return 0;
}

controller.generateIframe = function (url) {
    function getId(url) {
        var regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
        var match = url.match(regExp);

        if (match && match[2].length == 11) {
            return match[2];
        } else {
            return 'error';
        }
    }

    let videoId = getId(url);
    let iframe = `<iframe width="606" height="341" src="https://www.youtube.com/embed/${videoId}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
    return iframe
}

controller.convertFilmData = async function(snapshot) {
    let filmData = snapshot.data()

    filmData.releaseDateString = controller.generateDate(snapshot.data().releaseDate.toDate());
    filmData.score.movieCenter = controller.generateScore(snapshot);
    filmData.trailerIframe = controller.generateIframe(filmData.trailerURL);
    filmData.state = controller.setFilmState(snapshot.data().releaseDate.toDate());
    filmData.id = snapshot.id;
    filmData.reviews = await controller.getReviewInfo(filmData.reviews);

    return filmData;
}

controller.getReviewInfo = function(reviews) {
    reviews.map(getReviewerInfo)
    return reviews

    async function getReviewerInfo(review) {
        if (reviews.length != 0) {
            let reviewer = await firebase.firestore().collection('users').doc(review.user).get();
            review.photoURL = reviewer.data().photoURL;
            review.displayName = reviewer.data().displayName;
            review.timeStampString = controller.generateDate(review.timeStamp.toDate());
            return review
        }
    }
}

controller.loadAllFilms = async function() {
    let filmDatas = [];
    let querySnapshots = await model.loadAllFilms();
    for (doc of querySnapshots.docs) {
        let filmData = await controller.convertFilmData(doc);
        filmDatas.push(filmData);
    }
    model.allFilmDatas = filmDatas;
    return filmDatas;
}

controller.paginate = function(array, numOfElements) {
    let arrayOfPages = [];
    for (let start = 0, end = numOfElements; start <= array.length - 1;) {
        arrayOfPages.push(array.slice(start, end));
        start += numOfElements;
        end += numOfElements;
    }
    return arrayOfPages
}

controller.addVoteFilmURLEvent = function() {
    let filmURLs = document.querySelectorAll('.film-vote-url');
    for (let filmURL of filmURLs) {
        filmURL.onclick = function(e) {
            e.stopPropagation();
            view.threadScreen(filmURL.dataset.id);
        }
    }
}

controller.validateReviewForm = function (form) {
    if (!firebase.auth().currentUser) {
        throw new Error('Vui lòng đăng nhập để đánh giá phim')
    }
    if (!form.star.value) {
        throw new Error('Bạn chưa đánh giá phim')
    }
    if (!form.content.value) {
        throw new Error('Bình luận không được để trống')
    }
}