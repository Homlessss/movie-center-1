controller.previewImg = function () {
    let posterImgPreview = document.getElementById('preview-poster-img');
    let file = document.getElementById('poster-img').files[0];
    let imgReader = new FileReader();

    imgReader.onloadend = function () {
        posterImgPreview.src = imgReader.result;
    }

    file ? imgReader.readAsDataURL(file) : posterImgPreview.src = "";
}

controller.addFilm = function () {
    let addFilmForm = document.getElementById('post-film-form');
    let film;

    main();

    async function main() {
        try {
            initFilm();
            addGenre();
            setRealeaseDate();
            setRated();
            console.log(film);
            let posterImg = await prepareImg(film.name.mainName);
            film.posterImg = posterImg;
            model.addFilm(film);
        } catch (error) {
            view.setText('add-film-error', error.message)
        }
    }

    function initFilm() {
        film = {
            name: {
                mainName: addFilmForm.mainName.value,
                subName: addFilmForm.subName.value
            },
            trailerURL: addFilmForm.trailerURL.value,
            plot: addFilmForm.plot.value,
            starring: addFilmForm.starring.value,
            director: addFilmForm.director.value,
            runningTime: addFilmForm.runningTime.value,
            score: {
                imdb: addFilmForm.imdb.value,
                rotten: addFilmForm.rotten.value
            },
            reviews: [],
        }

        function errorHandler(film) {
            for (let key of Object.keys(film)) {
                if (typeof film[key] === "object") {
                    errorHandler(film[key]);
                } else {
                    if (film[key] === "") {
                        key = errorMessageHandler(key);
                        throw new Error('Invalid ' + key);
                    }
                }
            }
        }

        function errorMessageHandler(error) {
            switch (error) {
                case 'mainName':
                case 'subName':
                    error = 'name';
                    return error;
                case 'trailerURL':
                    error = 'URL';
                    return error;
                case 'runningTime':
                    error = 'running time'
                    return error;
                case 'rotten':
                    error = 'Rotten Tomatoes'
                default:
                    return error;
            }
        }

        errorHandler(film)

    }

    function addGenre() {
        let checkedGenres = document.querySelectorAll('.genre:checked');
        if (checkedGenres.length === 0) {
            throw new Error('Genre cannot be empty')
        }

        let checkedGenreValues = [];
        checkedGenres.forEach(function (genre) {
            checkedGenreValues.push(genre.value)
        });
        film.genre = checkedGenreValues.join(', ');
    }

    function setRealeaseDate() {
        let dateString = addFilmForm.year.value + '-' + addFilmForm.month.value + '-' + addFilmForm.date.value;
        releaseDate = new Date(dateString);
        film.releaseDate = releaseDate;
    }

    function setRated() {
        let ratedSelect = document.getElementById('rated-select');
        film.rated = ratedSelect.value;
    }

    async function prepareImg(name) {
        try {
            let img = document.getElementById('poster-img').files[0];
            let imgURL = await model.convertImgToURL(img, 'images/' + name);
            return imgURL
        } catch (error) {
            throw new Error('You have not set poster image')
        }
    }
}

controller.getAllFilm = async function () {
    filmDatas = await model.getAllFilm();
    main();

    function main() {
        let convertedFilmDatas = prepareData(filmDatas);
        model.managementPages = convertedFilmDatas;
        view.adminAddTableRow(model.managementPages[0]);
        model.managementRowNameRefs = document.querySelectorAll('.film-main-name');
        controller.addOnClickEvent(model.managementRowNameRefs);
    }

    function prepareData(filmDatas) {
        let convertedFilmDatas = []
        for (let film of filmDatas.docs) {
            let releaseDate = Date.parse(film.data().releaseDate.toDate());
            let currentTime = Date.parse(new Date());
            let convertedFilmData = {
                id: film.id,
                posterImg: film.data().posterImg,
                mainName: film.data().name.mainName,
                subName: film.data().name.subName,
                releaseDate: controller.generateDate(new Date(releaseDate)),
                numOfReviews: film.data().reviews.length,
                score: generateAverageScore(film),
                state: generateState(releaseDate, currentTime)
            }
            convertedFilmDatas.push(convertedFilmData)
        }
        return controller.paginate(convertedFilmDatas, 2);
    }

    function generateState(releaseDate, currentTime) {
        if (releaseDate < currentTime) {
            return 'Đã Chiếu';
        } else {
            return 'Sắp Chiếu';
        }
    }

    function generateAverageScore(film) {
        let sum = 0;
        let reviews = film.data().reviews;
        for (let review of reviews) {
            sum += review.score
        }
        return sum / reviews.length;
    }
}

controller.adminManagementSwitchPage = function (direction) {
    let currentPageNumberRef = document.getElementById('page-number');
    let currentPageNumber = parseInt(currentPageNumberRef.value);
    switch (direction) {
        case 'up':
            if (currentPageNumber < model.managementPages.length) {
                currentPageNumberRef.stepUp();
            }
            break;
        case 'down':
            if (currentPageNumber > 1) {
                currentPageNumberRef.stepDown();
            }
            break
    }
    let newPageNumberRef = document.getElementById('page-number');
    let newPageNumber = parseInt(newPageNumberRef.value);
    view.adminAddTableRow(model.managementPages[newPageNumber - 1])
    model.managementRowNameRefs = document.querySelectorAll('.film-main-name');
    controller.addOnClickEvent(model.managementRowNameRefs);
}

controller.setNumberOfPage = function () {
    let number = model.managementPages.length;
    return 'of ' + number
}

controller.addOnClickEvent = function(nodeList) {
    for (let node of nodeList) {
        node.onclick = function(e) {
            console.log(e.target.dataset.id)
        }
    }
}