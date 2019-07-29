controller.signOut = function() {
    firebase.auth().signOut();
}

controller.setNavInfo = function() {
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