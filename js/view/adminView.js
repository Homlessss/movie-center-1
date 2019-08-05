view.adminManagementScreen = async function() {
    document.getElementById('app').innerHTML = components.adminManagement;
    await controller.getAllFilm();
    let addFilmBtn = document.getElementById('add-film-btn');
    let stepUpBtn = document.getElementById('step-up-btn');
    let stepDownBtn = document.getElementById('step-down-btn');
    let numOfPage = document.getElementById('number-of-pages');
    
    
    addFilmBtn.onclick = view.adminPostFilmScreen;
    numOfPage.innerText = controller.setNumberOfPage();
    stepUpBtn.onclick = function(e) {
        controller.adminManagementSwitchPage(e.target.dataset.direction)
    };
    stepDownBtn.onclick = function(e) {
        controller.adminManagementSwitchPage(e.target.dataset.direction)
    };
}

view.adminAddTableRow = function(films) {
    let tableBody = document.getElementById('table-body');
    tableBody.innerHTML = '';
    for (let film of films) {
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
}

view.adminPostFilmScreen = function() {
    initScreen();
    addCheckBoxEvent()

    function initScreen() {
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
    
    function addCheckBoxEvent() {
        let checkboxs = document.querySelectorAll('.checkbox-wrapper');
        
        for (let checkbox of checkboxs) {
            let inputCheckBox = checkbox.children[0]
            inputCheckBox.addEventListener('change', onChangeCheckBoxColor);

            function onChangeCheckBoxColor() {
                if (inputCheckBox.checked) {
                    checkbox.style.background = '#6541CD'
                } else {
                    checkbox.style.background = 'rgba(255, 255, 255, 0.08)'
                }
            }
        }
    }
}