model.loadAllFilms = async function () {
    let querySnapshots = await firebase.firestore().collection('films').orderBy('releaseDate', 'desc').get()
    return querySnapshots;
}

module.exports = {
    loadAllFilms
}