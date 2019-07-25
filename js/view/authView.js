view.registerScreen = function() {
    document.getElementById('app').innerHTML = components.register;
    let registerForm = document.getElementById('register-form');
    let registerBtn = document.getElementById('register-btn');
    let loginURL = document.getElementById('login-url');

    registerBtn.onclick = onRegister
    loginURL.onclick = onLoginURL

    function onRegister(e) {
        e.preventDefault();
        let registerValue = {
            firstName: registerForm.firstName.value,
            lastName: registerForm.lastName.value,
            email: registerForm.email.value,
            password: registerForm.password.value,
            confirmPassword: registerForm.confirmPassword.value
        }
        controller.register(registerValue)
    }

    function onLoginURL() {
        view.loginScreen()
    }
}

view.loginScreen = function() {
    document.getElementById('app').innerHTML = components.login;
    let loginForm = document.getElementById('login-form');
    let loginBtn = document.getElementById('login-btn');
    let registerURL = document.getElementById('register-url');

    loginBtn.onclick = onLogin;
    registerURL.onclick = onRegisterURL

    function onLogin(e) {
        e.preventDefault();
        let loginValue = {
            email: loginForm.email.value,
            password: loginForm.password.value,
        }
        controller.login(loginValue)
    }

    function onRegisterURL() {
        view.registerScreen()
    }
}