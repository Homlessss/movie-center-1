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
        <div class="form-footer">
            <p id="register-error"></p>
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
        <div class="form-footer">
            <p id="login-error"></p>
        </div>
    </section>
`