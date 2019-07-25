controller.register = function(registerValue) {
    if (controller.validateRegisterForm(registerValue)) {
        model.register(registerValue);
    }
}

controller.login = function(loginValue) {
    if (controller.validateLoginForm(loginValue)) {
        model.login(loginValue)
    }
}