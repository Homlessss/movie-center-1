const controller = {}

controller.initAuth = function() {
    view.homeScreen();
    firebase.auth().onAuthStateChanged(async function(user) {
        if (user) {
            userExtendInfo = await firebase.firestore().collection('users').doc(firebase.auth().currentUser.uid).get();
            if (userExtendInfo.data().admin) {
                view.adminManagementScreen()
            } else {
                view.homeScreen();
            }
        } else {
            view.homeScreen();
        }
    })
}