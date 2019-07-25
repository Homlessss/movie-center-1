model.addFilm = async function(film) {
    film.posterImg = await createImgURL();
    await firebase.firestore().collection('films').add(film);
    console.log(film);

    async function createImgURL() {
        imgRef = firebase.storage().ref().child('images/spider-man-far-from-home');
        await imgRef.put(film.posterImg);
        imgURL = await imgRef.getDownloadURL();
        return imgURL
    }
}