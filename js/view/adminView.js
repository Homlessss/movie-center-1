view.adminAnalyticsScreen = function() {
    document.getElementById('app').innerHTML = components.adminAlalytics;
    let addFilmBtn = document.getElementById('add-film-btn');

    addFilmBtn.onclick = view.adminPostFilmScreen
}

view.adminPostFilmScreen = function() {
    document.getElementById('app').innerHTML = components.adminPostFilmScreen
}