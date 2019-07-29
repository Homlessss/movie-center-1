view.homeScreen = function () {
    view.nav();
    view.setHTML('app', components.home);
    controller.addHomeComponents();
}

view.homeShownFilmComponent = function (shownFilms) {
    let shownFilmContainer = document.getElementById('home-shown-film');
    let firtDotPaginate = document.querySelector('.dot-container')

    view.setHomeVideoTrailer(shownFilms[0].trailerIframe);
    firtDotPaginate.children[0].style.background = '#6541CD';
    
    shownFilmContainer.innerHTML = '';
    for (let shownFilm of shownFilms) {
        shownFilmContainer.innerHTML += `
            <div class="film-item-container" data-id="${shownFilm.id}">
                <div class="img-wrapper">
                    <img src="${shownFilm.posterImg}" alt="">
                </div>
                <span class="list-item-name">${shownFilm.name.mainName}</span>
                <div class="vote-btn">
                    <button>Vote</button>
                </div>
                <div class="list-item-vote">
                    <span class="list-item-star">&#9733</span>
                    <span class="list-item-score">${shownFilm.score.movieCenter}</span>
                </div>
            </div>
        `
    }
}

view.setHomeVideoTrailer = function(iframe) {
    let homeVideoTrailer = document.getElementById('home-video-trailer');
    homeVideoTrailer.innerHTML = iframe;
}