controller.previewImg = function() {
    let posterImgPreview = document.getElementById('preview-poster-img');
    let file = document.getElementById('poster-img').files[0];
    let imgReader = new FileReader();

    imgReader.onloadend = function() {
        posterImgPreview.src = imgReader.result;
    }

    file ? imgReader.readAsDataURL(file) : posterImgPreview.src = "";
}

controller.addFilm = function() {
    let film = {};

    prepareImg()
    model.addFilm(film)
    
    function prepareImg() {
        let img = document.getElementById('poster-img').files[0];
        film.posterImg = img
    }
}