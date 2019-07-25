const controller = {}

controller.initAuth = function() {
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            if (user.role = 'admin') {
                console.log('admin page')
            } else {
                console.log('guest page')
            }
        } else {
            view.loginScreen();
        }
    })
}