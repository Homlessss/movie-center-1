controller.addHomeComponents= async function() {
    filmDatas = await controller.loadAllFilms();
    controller.addShownFilmComponent(filmDatas);
    controller.addHomePaginateEvent();
    controller.castVideoTrailerEvent();
}

controller.addShownFilmComponent = function(filmDatas) {
    shownFilms = filmDatas.filter(function(film) {
        return film.state === 1;
    })
    let shownFilmsPages = controller.paginate(shownFilms, 5);
    model.shownFilmsPages = shownFilmsPages;
    view.homeShownFilmComponent(shownFilmsPages[0]);
}

controller.addHomePaginateEvent = function () {
    let paginateBtns = document.querySelectorAll('.dot-container');
    for (let paginateBtn of paginateBtns) {
        paginateBtn.onclick = function (e) {
            let pageNumber = e.target.dataset.number;
            let filmDatas = model.shownFilmsPages[pageNumber - 1];
            if (filmDatas) {
                view.homeShownFilmComponent(filmDatas);
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

controller.castVideoTrailerEvent = function() {
    let shownFilms = document.querySelectorAll('.film-item-container');
    for (let shownFilm of shownFilms) {
        shownFilm.onclick = function(e) {
            // castVideoTrailer(e.target.dataset.id)
            castVideoTrailer(shownFilm.dataset.id)
        }
    }

    async function castVideoTrailer(id) {
        let targetFilms = model.allFilmDatas.find(function(element) {
            return element.id === id;
        })
        view.setHomeVideoTrailer(targetFilms.trailerIframe);
    }

}