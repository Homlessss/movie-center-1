model.addFilm = async function (film) {
    firebase.firestore().collection('films').add(film)
}

model.convertImgToURL = async function (imgFile, imgPath) {
    imgRef = firebase.storage().ref().child(imgPath);
    await imgRef.put(imgFile);
    imgURL = await imgRef.getDownloadURL();
    return imgURL
}

model.getFirst10Film = async function() {
    let filmsRef = firebase.firestore().collection('films');
    let filmDatas = await filmsRef.orderBy('releaseDate', 'desc').get();
    return filmDatas
}