controller.initThreadPage = function(id) {
    let app = document.getElementById('app');
    // let film = model.allFilmDatas.find(function(film) {
    //     return film.id === id;
    // })

    app.innerHTML = components.thread();
}