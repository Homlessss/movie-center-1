controller.addHomeComponents = async function () {
    filmDatas = await controller.loadAllFilms();
    controller.addShownFilmComponent(filmDatas);
    controller.addCommingSoonFilmComponent(filmDatas);
    controller.addVoteFilmURLEvent();
}

controller.addShownFilmComponent = function (filmDatas) {
    shownFilms = filmDatas.filter(function (film) {
        return film.state === 1;
    })
    model.shownFilms = shownFilms;
    let shownFilmsPages = controller.paginate(shownFilms, 5);
    model.shownFilmsPages = shownFilmsPages;
    view.homeShownFilmComponent(shownFilmsPages[0]);
    controller.addHomePaginateEvent();
    controller.castVideoTrailerEvent();
}

controller.addHomePaginateEvent = function () {
    let paginateBtns = document.querySelectorAll('.dot-container');
    for (let paginateBtn of paginateBtns) {
        paginateBtn.onclick = function (e) {
            let pageNumber = e.target.dataset.number;
            let filmDatas = model.shownFilmsPages[pageNumber - 1];
            if (filmDatas) {
                view.homeShownFilmComponent(filmDatas);
                controller.addVoteFilmURLEvent();
                resetPaginateColor();
                e.target.children[0].style.background = '#6541CD';
                controller.castVideoTrailerEvent();
            }
        }
    }

    function resetPaginateColor() {
        for (let paginateBtn of paginateBtns) {
            paginateBtn.children[0].style.background = 'rgba(255, 255, 255, 0.3'
        }
    }
}

controller.castVideoTrailerEvent = function () {
    let shownFilms = document.querySelectorAll('.film-item-container');
    for (let shownFilm of shownFilms) {
        shownFilm.onclick = function (e) {
            // castVideoTrailer(e.target.dataset.id)
            castVideoTrailer(shownFilm.dataset.id)
        }
    }

    async function castVideoTrailer(id) {
        let targetFilms = model.allFilmDatas.find(function (element) {
            return element.id === id;
        })
        view.setHomeVideoTrailer(targetFilms.trailerIframe);
    }

}

controller.addCommingSoonFilmComponent = function (filmDatas) {
    commingSoonFilms = filmDatas.filter(function (film) {
        return film.state === 0;
    })
    commingSoonFilms = commingSoonFilms.sort(function (a, b) {
        aDate = new Date(a.releaseDate.seconds);
        bDate = new Date(b.releaseDate.seconds);
        return aDate - bDate

    });
    view.renderCommingSoonFilm(commingSoonFilms);
    controller.addSlideBtnEvent();
}

controller.addSlideBtnEvent = function () {
    let rightBtn = document.getElementById('slide-right-btn');
    let leftBtn = document.getElementById('slide-left-btn');
    let slider = document.getElementById('comming-soon-film');
    let slideElement = document.querySelector('.comming-soon-film');
    let slideElementWidth = slideElement.offsetWidth;
    let slideElementMargin = window.getComputedStyle(slideElement).marginRight;
    slideElementMargin = parseInt(slideElementMargin.split('px')[0]);
    let totalElementWidth = slideElementWidth + slideElementMargin;

    rightBtn.onclick = function () {
        slider.scrollLeft += totalElementWidth;
    }

    leftBtn.onclick = function () {
        slider.scrollLeft -= totalElementWidth;
    }

    slider.onscroll = function () {
        if (slider.scrollLeft === 0) {
            leftBtn.style.visibility = 'hidden'
        } else {
            leftBtn.style.visibility = 'visible'
        }

        if (slider.scrollLeft === slider.scrollWidth - slider.clientWidth) {
            rightBtn.style.visibility = 'hidden'
        } else {
            rightBtn.style.visibility = 'visible'
        }
    }
}

module.exports = {
    addHomeComponents,
    addShownFilmComponent,
    addHomePaginateEvent,
    resetPaginateColor,
    castVideoTrailerEvent,
    castVideoTrailer,
    addCommingSoonFilmComponent,
    addSlideBtnEvent
}