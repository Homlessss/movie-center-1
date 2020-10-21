controller.signOut = function () {
    firebase.auth().signOut();
}

controller.setNavInfo = function () {
    let firstAva = document.getElementById('auth-user-first-ava');
    let secondAva = document.getElementById('auth-user-second-ava');
    let userName = document.getElementById('auth-user-name');
    let userEmail = document.getElementById('auth-user-email');
    let authUser = firebase.auth().currentUser;

    firstAva.src = authUser.photoURL;
    secondAva.src = authUser.photoURL;
    userName.innerText = authUser.displayName;
    userEmail.innerText = authUser.email;
}

controller.showSearchResult = function (searchInput) {
    let filmDatas = model.allFilmDatas;
    let searchResult = filmDatas.filter(filmFilter);

    function filmFilter(filmData) {
        let mainName = filmData.name.mainName;
        let subName = filmData.name.subName;
        let starring = filmData.starring;
        let compareString = (mainName + subName + starring).toLowerCase();
        return compareString.includes(searchInput.toLowerCase())
    }
    return searchResult;
}

module.exports = {
    signOut,
    setNavInfo,
    showSearchResult,
    filmFilter
}