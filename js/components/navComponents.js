components.nav = `
    <nav class="nav-container">
        <div class="logo-container" id="nav-logo">
            <img src="https://firebasestorage.googleapis.com/v0/b/codeintensive.appspot.com/o/images%2Flogo.png?alt=media&token=6dbfdf33-4262-4104-9c3c-89e853905aff"
                alt="">
            <h1>MovieCenter</h1>
        </div>
        <div class="search-container">
            <input type="text" placeholder="Tìm kiếm" id="search-input">
            <ul id="search-result">
            </ul>
        </div>
        <div class="info-container" id="nav-user-info">
            
        </div>
    </nav>
`

components.navLoginBtn = `
    <button class="login-url-btn" id="nav-login-btn">Đăng Nhập</button>
`

components.navUserInfo = `
    <img id="auth-user-first-ava" class="first-ava"
    src=""
    alt="">
    <div class="extend-info-container">
    <div class="extend-info">
        <img id="auth-user-second-ava" class="second-ava"
            src=""
            alt="">
        <div>
            <h3 id="auth-user-name"></h3>
            <span id="auth-user-email"></span>
        </div>
    </div>
    <ul class="setting-menu" id="nav-setting-menu">
        <li><a href="#" id="profile-url">Trang cá nhân</a></li>
        <li><a href="#" id="sign-out-btn">Đăng xuất</a></li>
    </ul>
    </div>
`

components.navAdminSettingMenu= `
    <li><a href="#" id="profile-url">Trang cá nhân</a></li>
    <li><a href="#" id="management-url">Quản lí</a></li>
    <li><a href="#" id="sign-out-btn">Đăng xuất</a></li>
`

