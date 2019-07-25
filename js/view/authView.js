view.registerScreen = function() {
    document.getElementById('app').innerHTML = components.register;
    let registerForm = document.getElementById('register-form');
    let registerBtn = document.getElementById('register-btn');

    registerBtn.onclick = onRegister

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
}

view.loginScreen = function() {
    document.getElementById('app').innerHTML = components.login;
    let loginForm = document.getElementById('login-form');
    let loginBtn = document.getElementById('login-btn');

    loginBtn.onclick = onLogin;

    function onLogin(e) {
        e.preventDefault();
        let loginValue = {
            email: loginForm.email.value,
            password: loginForm.password.value,
        }
        controller.login(loginValue)
    }
}