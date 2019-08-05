controller.register = async function(registerValue) {
    if (controller.validateRegisterForm(registerValue)) {
        await model.register(registerValue);
        view.homeScreen();
    }
}

controller.login = function(loginValue) {
    if (controller.validateLoginForm(loginValue)) {
        await model.login(loginValue);
        view.homeScreen();
    }
}