components.register = `
<section class="auth-form-container">
    <div class="auth-form-wrapper">
        <h1 class="auth-title">Đăng kí</h1>
        <form action="" id="register-form" class="auth-form">
            <div class="input-container">
                <input class="input-border" type="text" name="firstName" placeholder="First Name">
                <input class="input-border" type="text" name="lastName" placeholder="Last Name">
                <input class="input-border" type="email" name="email" placeholder="Email">
                <input class="input-border" type="password" name="password" placeholder="Password">
                <input class="input-border" type="password" name="confirmPassword" placeholder="Confirm Password">
            </div>
            <div class="auth-btn-container">
                <button id="register-btn">Register</button>
            </div>
        </form>
        <div class="error-wrapper">
            <p id="register-error"></p>
        </div>
        <div class="auth-form-footer">
            <p>Already have an account?</p>
            <a href="#" id="login-url">Log in</a>
        </div>
    </div>
</section>
`

components.login = `
<section class="auth-form-container">
    <div class="auth-form-wrapper">
        <h1 class="auth-title">Đăng nhập</h1>
        <form action="" id="login-form" class="auth-form">
            <div class="input-container">
                <input class="input-border" type="email" name="email" placeholder="Email">
                <input class="input-border" type="password" name="password" placeholder="Password">
            </div>
            <div class="auth-btn-container">
                <button id="login-btn">Login</button>
            </div>
        </form>
        <div class="error-wrapper">
            <p id="login-error"></p>
        </div>
        <div class="auth-form-footer">
            <p>Don't have a free account yet?</p>
            <a href="#" id="register-url">Register</a>
        </div>
    </div>
</section>
`