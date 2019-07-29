controller.prepareData = async function() {
    filmDatas = await controller.loadAllFilms();
    console.log(filmDatas)
}