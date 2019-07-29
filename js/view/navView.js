view.nav = function() {
    view.setHTML('nav-bar', components.nav);
}

view.guestNav = function() {
    view.setHTML('nav-bar', components.nav);
    view.setHTML('nav-user-info', components.navLoginBtn);
    let loginUrlBtn = document.getElementById('nav-login-btn');

    loginUrlBtn.onclick = view.loginScreen;
}

view.userNav = function() {
    view.setHTML('nav-bar', components.nav);
    view.setHTML('nav-user-info', components.navUserInfo);
    view.navAddSettingMenuEvent();
    controller.setNavInfo()
}

view.adminNav = function() {
    view.setHTML('nav-bar', components.nav);
    view.setHTML('nav-user-info', components.navUserInfo); 
    view.setHTML('nav-setting-menu', components.navAdminSettingMenu);
    view.navAddSettingMenuEvent();
    controller.setNavInfo()
}

view.navAddSettingMenuEvent = function() {
    let profileURL = document.getElementById('profile-url');
    let managementURL = document.getElementById('management-url');
    let signOutBtn = document.getElementById('sign-out-btn');

    profileURL.onclick = function() {
        console.log('profile page')
    }
    signOutBtn.onclick = controller.signOut;
    if (managementURL) {
        managementURL.onclick = view.adminManagementScreen;
    }
}