components.register = `
    <section class="form-wrapper">
        <form action="" id="register-form">
            <input type="text" name="firstName" placeholder="First Name">
            <input type="text" name="lastName" placeholder="Last Name">
            <input type="email" name="email" placeholder="Email">
            <input type="password" name="password" placeholder="Password">
            <input type="password" name="confirmPassword" placeholder="Confirm Password">
            <button id="register-btn">Register</button>
        </form>
        <div class="error-wrapper">
            <p id="register-error"></p>
        </div>
        <div class="form-footer">
            <p>Already have an account?</p>
            <a href="#" id="login-url">Log in</a>
        </div>
    </section>
`

components.login = `
    <section class="form-wrapper">
        <form action="" id="login-form">
            <input type="email" name="email" placeholder="Email">
            <input type="password" name="password" placeholder="Password">
            <button id="login-btn">Login</button>
        </form>
        <div class="error-wrapper">
            <p id="login-error"></p>
        </div>
        <div class="form-footer">
            <p>Don't have a free account yet?</p>
            <a href="#" id="register-url">Register</a>
        </div>
    </section>
`