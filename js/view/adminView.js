view.adminManagementScreen = async function() {
    document.getElementById('app').innerHTML = components.adminManagement;
    await controller.adminAddTableRow();
    let filmMainNames = document.querySelectorAll('.film-main-name')
    let addFilmBtn = document.getElementById('add-film-btn');
    
    addFilmBtn.onclick = view.adminPostFilmScreen;
    addOnClickEvent(filmMainNames);

    function addOnClickEvent(nodes) {
        for (let node of nodes) {
            node.onclick = function(e) {
                console.log(e.target.dataset.id)
            }
        }
    }
}

view.adminAddTableRow = function(film) {
    let tableBody = document.getElementById('table-body');
    tableBody.innerHTML += `
    <section class="table-row table-body" id="${film.id}">
        <div>
            <img src="${film.posterImg}" alt="" class="thumbnail">
        </div>
        <div>
            <a href="#" class="film-main-name" data-id="${film.id}">${film.mainName}</a>
            <p>${film.subName}</p>
        </div>
        <div>
            <span>${film.releaseDate}</span>
        </div>
        <div>
            <span>${film.state}</span>
        </div>
        <div>
            <span>${film.score}</span>
        </div>
        <div>
            <span>${film.numOfReviews}</span>
        </div>
    </section>
    `
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