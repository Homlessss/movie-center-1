controller.register = function(registerValue) {
    if (controller.validateRegisterForm(registerValue)) {
        model.register(registerValue);
        view.homeScreen();
    }
}

controller.login = function(loginValue) {
    if (controller.validateLoginForm(loginValue)) {
        model.login(loginValue);
        view.homeScreen();
    }
}