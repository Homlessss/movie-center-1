controller.initThreadPage = function(id) {
    let filmData = model.allFilmDatas.find(function(film) {
        return film.id === id;
    });

    controller.addThreadInfo(filmData);
    controller.addThreadReviews(filmData.reviews);
    controller.addThreadRelated(id)
}

controller.addThreadInfo = function(filmData) {
    let app = document.getElementById('app');
    app.innerHTML = components.thread(filmData);
}

controller.addThreadReviews = function(reviews) {
    let reviewComponents = document.getElementById('comment-container');
    for (let review of reviews) {
        reviewComponents.innerHTML += components.addReviewsItems(review)
    }
}

controller.addThreadRelated = function(id) {
    let filmDatas = model.allFilmDatas;
    let filmIndex = filmDatas.findIndex(function(film) {
        return film.id === id
    })
    
    filmDatas.sort(function(a, b) {
        let c = Math.abs((filmDatas.indexOf(a) - filmIndex)) - Math.abs((filmDatas.indexOf(b) - filmIndex));
        console.log(c)
        return Math.abs((filmDatas.indexOf(a) - filmIndex)) - Math.abs((filmDatas.indexOf(b) - filmIndex));
    })

    console.log(filmDatas)
}