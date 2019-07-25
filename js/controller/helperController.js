controller.validateEmail = function(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

controller.validatePassword = function(password, confirmPassword) {
    return password === confirmPassword;
} 

controller.validateRegisterForm = function(registerValue) {
    try {
        if (!registerValue.firstName) {
            throw new Error('Invalid first name')
        }
        if (!registerValue.lastName) {
            throw new Error('Invalid last name')
        }
        if (!controller.validateEmail(registerValue.email)) {
            throw new Error('Invalid email');
        }
        if(!registerValue.password) {
            throw new Error('Invalid password')
        }
        if (!controller.validatePassword(registerValue.password, registerValue.confirmPassword)) {
            throw new Error('The password confirmation does not match');
        }
        return true
    } catch(error) {
        view.setText('register-error', error.message)
    }
}

controller.validateLoginForm = function(loginValue) {
    try {
        if (!controller.validateEmail(loginValue.email)) {
            throw new Error('Invalid email');
        }
        if(!loginValue.password) {
            throw new Error('Invalid password')
        }
        return true
    } catch(error) {
        view.setText('login-error', error.message)
    }
}