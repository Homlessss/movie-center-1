view.nav = function () {
    initNav();
    addSearchSuggestions();
    addSearchEvent();

    function initNav() {
        view.setHTML('nav-bar', components.nav);
        let navLogo = document.getElementById('nav-logo');
        navLogo.onclick = view.homeScreen;
    }

    function addSearchSuggestions() {
        let input = document.getElementById('search-input');
        let searchResult = document.getElementById('search-result');

        input.addEventListener('focusin', onInputFocus)

        function onInputFocus(event) {
            event.stopPropagation();
            searchResult.style.visibility = 'visible';
            renderSearchResult(model.shownFilms);
            document.addEventListener('click', offClick)
        }

        function offClick(event) {
            if (event.target !== input) {
                searchResult.style.visibility = 'hidden';
            }
        }
    }

    function renderSearchResult(filmDatas) {
        let searchResult = document.getElementById('search-result');
        topFilmDatas = filmDatas.slice(0, 5);

        searchResult.innerHTML = '';
        for (let film in topFilmDatas) {
            searchResult.innerHTML += `
                <li class="search-item" data-id="${topFilmDatas[film].id}">${topFilmDatas[film].name.mainName}</li>
            `
        }
        addFilmURLEvent();
    }

    function addSearchEvent() {
        let searchInput = document.getElementById('search-input');
        searchInput.onkeyup = function (event) {
            let searchResult = controller.showSearchResult(event.target.value);
            renderSearchResult(searchResult)
        }
    }

    function addFilmURLEvent() {
        let searchItems = document.querySelectorAll('.search-item');
        let searchResult = document.getElementById('search-result');
        let input = document.getElementById('search-input');
        for (let item of searchItems) {
            item.onclick = function (event) {
                event.stopPropagation();
                view.threadScreen(item.dataset.id)
                searchResult.style.visibility = 'hidden';
                input.value = ''
            }
        }
    }
}

view.guestNav = function () {
    view.setHTML('nav-user-info', components.navLoginBtn);
    let loginUrlBtn = document.getElementById('nav-login-btn');

    loginUrlBtn.onclick = view.loginScreen;
}

view.userNav = function () {
    view.setHTML('nav-user-info', components.navUserInfo);
    view.navAddSettingMenuEvent();
    controller.setNavInfo()
}

view.adminNav = function () {
    view.setHTML('nav-user-info', components.navUserInfo);
    view.setHTML('nav-setting-menu', components.navAdminSettingMenu);
    view.navAddSettingMenuEvent();
    controller.setNavInfo();
}

view.navAddSettingMenuEvent = function () {
    let profileURL = document.getElementById('profile-url');
    let managementURL = document.getElementById('management-url');
    let signOutBtn = document.getElementById('sign-out-btn');

    profileURL.onclick = function () {
        view.profileScreen();
    }
    signOutBtn.onclick = controller.signOut;
    if (managementURL) {
        managementURL.onclick = view.adminManagementScreen;
    }
}

module.exports = {
    nav,
    initNav,
    addSearchSuggestions,
    onInputFocus,
    offClick,
    renderSearchResult,
    addSearchEvent,
    addFilmURLEvent,
    guestNav,
    userNav,
    adminNav,
    navAddSettingMenuEvent
}