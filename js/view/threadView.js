view.threadScreen = function(id) {
    model.currentFilm = id;
    controller.initThreadPage(id);
    controller.addReviewBtnEvent(id);
    // controller.releatedFilmEvent();
}
