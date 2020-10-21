model.addFilm = async function (film) {
    await firebase.firestore().collection('films').add(film);
    alert('Thêm phim thành công');
    location.reload();

}

model.convertImgToURL = async function (imgFile, imgPath) {
    imgRef = firebase.storage().ref().child(imgPath);
    await imgRef.put(imgFile);
    imgURL = await imgRef.getDownloadURL();
    return imgURL
}

model.getAllFilm = async function () {
    let filmsRef = firebase.firestore().collection('films');
    let filmDatas = await filmsRef.orderBy('releaseDate', 'desc').get();
    return filmDatas
}

module.exports = {
    addFilm,
    convertImgToURL,
    getAllFilm
}