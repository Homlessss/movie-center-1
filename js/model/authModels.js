model.register = async function(registerValue) {
    try {
        await firebase.auth().createUserWithEmailAndPassword(registerValue.email, registerValue.password);
        model.firstUpdateProfile(registerValue);
    } catch(error) {
        view.setText('register-error', error.message)
    }
}

model.firstUpdateProfile = async function(registerValue) {
    let currentUser = firebase.auth().currentUser;
    let profile = {
        displayName: registerValue.firstName + ' ' + registerValue.lastName,
        photoURL: 'https://i0.wp.com/www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png?fit=256%2C256&quality=100&ssl=1',
        admin: false,
    }
    currentUser.updateProfile(profile);
    firebase.firestore().collection('users').doc(currentUser.uid).set(profile);
}

model.login = async function(loginValue) {
    try {
        await firebase.auth().signInWithEmailAndPassword(loginValue.email, loginValue.password);
    } catch(error) {
        view.setText('login-error', error.message)
    }
}