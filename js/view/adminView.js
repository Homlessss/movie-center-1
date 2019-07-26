view.adminManagementScreen = function() {
    document.getElementById('app').innerHTML = components.adminManagement;
    let addFilmBtn = document.getElementById('add-film-btn');

    addFilmBtn.onclick = view.adminPostFilmScreen
}

view.adminPostFilmScreen = function() {
    document.getElementById('app').innerHTML = components.adminPostFilmScreen;
    let posterImg = document.getElementById('poster-img');
    let addFilmBtn = document.getElementById('post-film-btn');

    posterImg.onchange = controller.previewImg;
    addFilmBtn.onclick = addFilmHandler;

    function addFilmHandler(e) {
        e.preventDefault();
        controller.addFilm();
    }

}