controller.updateDisplayName = function (name) {
    let currentUser = firebase.auth().currentUser;
    try {
        updateAuthDisplayName();
    } catch(error) {
        alert(error.message)
    }

    async function updateAuthDisplayName() {
        let loaderImg = document.querySelector('.loader-img');
        loaderImg.style.visibility = 'visible';
        await currentUser.updateProfile({
            displayName: name
        });
        loaderImg.style.visibility = 'hidden';
        await firebase.firestore().collection('users').doc(currentUser.uid)
            .update({ displayName: name });
        alert('Cập nhật thành công');
        location.reload();
    }

}