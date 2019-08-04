components.profile = function() {
    let authUser = firebase.auth().currentUser
    return `
        <section class="profile-page">
            <div class="profile-wrapper">
                <section class="ava-modal">
                    <div class="ava-modal-content">
                        <div class="ava-modal-body">
                            <img class="ava-add-img-icon" src="img/add-img-icon.svg" alt="">
                            <input id="ava-input-img" type="file">
                            <div class="ava-prepare-img-wrapper">
                                <img class="ava-prepare-img" src="" alt="">
                            </div>
                        </div>
                        <div class="ava-modal-footer">
                            <button class="primary-btn" id="ava-save-btn">Lưu</button>
                            <button class="secondary-btn" id="ava-cancel-btn">Hủy</button>
                            <img id="ava-modal-loader" src="img/loader.gif" alt="">
                        </div>
                    </div>
                </section>
                <aside class="profile-aside">
                    <section>
                        <div class="aside-ava-wrapper">
                            <div class="add-img-icon">
                                <img src="img/add-img-icon.svg" alt="">
                            </div>
                            <img src="${authUser.photoURL}" alt="">
                        </div>
                        <span class="aside-name">${authUser.displayName}</span>
                        <span class="aside-email">${authUser.email}</span>
                    </section>
                </aside>
                <section class="profile-body">
                    <h4>Thông tin tài khoản</h4>
                    <form action="" class="profile-form">
                        <div>
                            <label for="">Tên hiển thị</label>
                            <label for="profile-name-input" class="fix-btn">Sửa</label>
                        </div>
                        <input id="profile-name-input" type="text" value="${authUser.displayName}">
                        <label for="">Email</label>
                        <input type="text" value="${authUser.email}">
                        <label for="">Mật khẩu</label>
                        <input type="password" value="123456789">
                        <div class="profile-form-btn-wrapper">
                            <button class="profile-form-btn">Xác nhận</button>
                            <img class="loader-img" src="img/loader.gif" alt="">
                        </div>
                    </form>
                </section>
            </div>
        </section>
    `
}