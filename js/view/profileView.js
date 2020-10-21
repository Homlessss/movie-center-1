view.profileScreen = function () {
    initProfileScreen();
    addProfileUpdateEvent();
    view.showUploadAvaModal();
    view.uploadAvaHandler();

    function initProfileScreen() {
        let app = document.getElementById('app');
        app.innerHTML = components.profile();
    }

    function addProfileUpdateEvent() {
        let profileFixBtn = document.querySelector('.fix-btn');
        let profileNameInput = document.getElementById('profile-name-input');
        let profileFormBtn = document.querySelector('.profile-form-btn');

        profileFixBtn.addEventListener('click', onUnlockForm);
        profileNameInput.addEventListener('keyup', onEnableFormBtn);
        profileFormBtn.addEventListener('click', onUpdateDisplayName);

        function onUnlockForm(e) {
            e.preventDefault();
            profileNameInput.style.pointerEvents = 'auto';
            profileNameInput.style.border = '1px solid white';
            profileNameInput.style.color = 'white';
        }

        function onEnableFormBtn() {
            let authUserName = firebase.auth().currentUser.displayName;
            if (profileNameInput.value != authUserName) {
                profileFormBtn.style.background = '#6541CD';
                profileFormBtn.style.color = '#fff';
                profileFormBtn.style.pointerEvents = 'auto';
            } else {
                profileFormBtn.style.background = 'rgba(255, 255, 255, 0.3)';
                profileFormBtn.style.color = 'rgba(255, 255, 255, 0.7)';
                profileFormBtn.style.pointerEvents = 'none';
            }
        }

        function onUpdateDisplayName(e) {
            e.preventDefault();
            controller.updateDisplayName(profileNameInput.value);
        }
    }
}

view.showUploadAvaModal = function () {
    let uploadAvaTrigger = document.querySelector('.aside-ava-wrapper');
    let avaModal = document.querySelector('.ava-modal');
    let cancelBtn = document.getElementById('ava-cancel-btn');

    uploadAvaTrigger.addEventListener('click', showAvaModal);
    window.addEventListener('click', offAvaModal);
    cancelBtn.addEventListener('click', onCancelUpload)

    function showAvaModal() {
        avaModal.style.visibility = 'visible';
        avaModal.style.opacity = '1';
    }

    function offAvaModal(event) {
        if (event.target === avaModal) {
            avaModal.style.visibility = 'hidden';
            avaModal.style.opacity = '0';
        }
    }

    function onCancelUpload() {
        avaModal.style.visibility = 'hidden';
        avaModal.style.opacity = '0';
    }
}

view.uploadAvaHandler = function () {
    let inputImg = document.getElementById('ava-input-img');
    let saveBtn = document.getElementById('ava-save-btn');

    inputImg.addEventListener('change', onPrepareImg);
    saveBtn.addEventListener('click', onUploadAva);

    function onPrepareImg() {
        let file = inputImg.files[0];
        let avaPrepareImg = document.querySelector('.ava-prepare-img-wrapper');
        let addImageIcon = document.querySelector('.ava-add-img-icon')
        let imgReader = new FileReader();

        imgReader.onloadend = function () {
            avaPrepareImg.style.backgroundImage = `url(${imgReader.result})`;
            addImageIcon.style.opacity = '0';
        }

        file ? imgReader.readAsDataURL(file) : avaPrepareImg.src = "";
    }

    async function onUploadAva() {
        showLoaderIcon()
        let avatarFile = inputImg.files[0];
        let currentUser = firebase.auth().currentUser
        let displayName = currentUser.displayName;

        imgURL = await model.convertImgToURL(avatarFile, 'userAvatars/' + displayName);
        await currentUser.updateProfile({
            photoURL: imgURL
        });
        offLoaderIcon();
        await firebase.firestore().collection('users').doc(currentUser.uid).update({
            photoURL: imgURL
        });
        alert('Cập nhật thành công');
        location.reload();

    }

    function showLoaderIcon() {
        let loader = document.getElementById('ava-modal-loader');
        loader.style.visibility = 'visible'
    }

    function offLoaderIcon() {
        let loader = document.getElementById('ava-modal-loader');
        loader.style.visibility = 'hidden'
    }
}

module.exports = {
    profileScreen,
    initProfileScreen,
    addProfileUpdateEvent,
    onUnlockForm,
    onEnableFormBtn,
    onUpdateDisplayName,
    showUploadAvaModal,
    showAvaModal,
    offAvaModal,
    onCancelUpload,
    uploadAvaHandler,
    onPrepareImg,
    onloadend,
    onUploadAva,
    showLoaderIcon,
    offLoaderIcon
}