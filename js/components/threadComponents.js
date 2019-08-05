// import { userInfo } from "os";

components.thread = function(filmData) {
return `
<div class="thread-page">
    <div class="video-modal" id="video-modal">
        <div class="video-modal-content">
            ${filmData.trailerIframe}
        </div>
    </div>
    <header class="thread-header-container">
        <div class="thread-header-wrapper">
            <section class="thread-header-info">
                <h1>${filmData.name.mainName}</h1>
                <h3>${filmData.name.subName}</h3>
                <p>${filmData.rated} | ${filmData.runningTime}p | ${filmData.genre}</p>
            </section>
            <section class="thread-header-vote">
                <div>
                    <span class="star">&#9733;</span>
                    <span class="score" id="header-score">${filmData.score.movieCenter}</span>
                </div>
                <span id="header-review">Lượt đánh giá: ${filmData.reviews.length}</span>
            </section>
        </div>
    </header>
    <div class="thread-body-container">
        <div class="thread-body-wrapper">
            <aside class="thread-aside">
                <div id="thread-video">
                    <img class="poster-img" src="${filmData.posterImg}"
                        alt="">
                    <div class="img-overlay">
                        <img src="img/play-icon.svg" alt="">
                    </div>
                </div>
                <section class="related" id="related">
                    <h4>Liên quan</h4>
                    <section class="related-item-wrapper" id="related-film">
                        
                    </section>
                </section>
            </aside>
            <article class="thread-article">
                <section class="thread-info">
                    <h1>Thông tin phim</h1>
                    <p class="plot">${filmData.plot}</p>
                    <p><span class="title">Đạo diễn: </span>${filmData.director}</p>
                    <p><span class="title">Diễn viên: </span>${filmData.starring}</p>
                    <p class="release-date"><span class="title">Khởi chiếu: </span>${filmData.releaseDateString}</p>
                    <div class="score">
                        <div class="imdb-score">
                            <img src="https://firebasestorage.googleapis.com/v0/b/codeintensive.appspot.com/o/images%2FIMDB.svg?alt=media&token=cc62468c-9399-4ea3-a926-a709b4ce54c8"
                                alt="">
                            <span>${filmData.score.imdb}</span>
                        </div>
                        <div class="rotten-score">
                            <img src="https://firebasestorage.googleapis.com/v0/b/codeintensive.appspot.com/o/images%2FRotten%20Tomatoes.svg?alt=media&token=ffe96f4d-49e8-4b87-aba4-07622232098d"
                                alt="">
                            <span>${filmData.score.rotten}%</span>
                        </div>
                    </div>
                </section>
                <section class="thread-vote">
                    <p class="title">Đánh giá</p>
                    <form action="" class="rating-form" id="rating-form">
                        <div class="star-container">
                            <input class="star" type="radio" id="star-10" name="star" value="10">
                            <label class="star" for="star-10">&#9733;</label>
                            <input class="star" type="radio" id="star-9" name="star" value="9">
                            <label class="star" for="star-9">&#9733;</label>
                            <input class="star" type="radio" id="star-8" name="star" value="8">
                            <label class="star" for="star-8">&#9733;</label>
                            <input class="star" type="radio" id="star-7" name="star" value="7">
                            <label class="star" for="star-7">&#9733;</label>
                            <input class="star" type="radio" id="star-6" name="star" value="6">
                            <label class="star" for="star-6">&#9733;</label>
                            <input class="star" type="radio" id="star-5" name="star" value="5">
                            <label class="star" for="star-5">&#9733;</label>
                            <input class="star" type="radio" id="star-4" name="star" value="4">
                            <label class="star" for="star-4">&#9733;</label>
                            <input class="star" type="radio" id="star-3" name="star" value="3">
                            <label class="star" for="star-3">&#9733;</label>
                            <input class="star" type="radio" id="star-2" name="star" value="2">
                            <label class="star" for="star-2">&#9733;</label>
                            <input class="star" type="radio" id="star-1" name="star" value="1">
                            <label class="star" for="star-1">&#9733;</label>
                        </div>
                        <textarea name="content" id="" placeholder="Bình luận" spellcheck="false"></textarea>
                        <button class="rating-form-btn" id="review-btn">Gửi đánh giá</button>
                    </form>
                </section>
                <article class="thread-comment">
                    <section class="comment-header">
                        <p class="sub-header" id="footer-review">${filmData.reviews.length} bình luận</p>
                        <div class="comment-sort">
                            <span id="review-sort-btn">Sắp xếp theo <img src="https://firebasestorage.googleapis.com/v0/b/codeintensive.appspot.com/o/icon%2Fdropdown-icon.svg?alt=media&token=0c69959f-bf8f-4c40-bbbd-7718f09c8598" alt=""></span>
                            <div class="dropdown" id="sort-dropdown">
                                <a href="#" id="reaction-sort">Hay nhất</a>
                                <a href="#" id="date-sort">Mới nhất</a>
                            </div>
                        </div>
                    </section>
                    <section class="comment-container" id="comment-container">
                        
                    </section>
                </article>
            </article>
        </div>
    </div>
</div>
`
}

components.addReviewsItems = function(review) {
    let color = false;
    if (firebase.auth().currentUser) {
        if (review.reactions.includes(firebase.auth().currentUser.uid)) {
            color = true
        }
    }
    let html = `
    <div class="comment-item">
        <div class="avatar">
            <img src="${review.photoURL}" alt="">
        </div>
        <div class="title-wrapper">
            <div>
                <a href="#" class="sub-header">${review.displayName}</a>
                <div class="score">
                    <span>&#9733;</span>
                    <span>${review.score}</span>
                </div>
            </div>
            <span class="time-stamp">${review.timeStampString}</span>
        </div>
        <div class="content">
            <p class="body-text">${review.content}</p>
            <div class="heart-container">
                <div class="heart ${color}" id="react-btn" data-id="${review.id}">
                    <img src="https://firebasestorage.googleapis.com/v0/b/codeintensive.appspot.com/o/images%2Fheart-icon.svg?alt=media&token=06247f4e-72f2-4854-a6c0-1c2d6fc33ee1" alt="">
                </div>
                <span>${review.reactions.length}</span>
            </div>
        </div>    
    </div>
    `
    return html
}

components.addRelatedItem = function(film) {
    return `
    <div class="related-item">
        <div>
            <div class="img-wrapper">
                <img src="${film.posterImg}"  alt="">
            </div>
            <span class="name related-item-name" data-id="${film.id}">${film.name.mainName}</span>
        </div>
        <div>
            <span class="star">&#9733;</span>
            <span class="score">${film.score.movieCenter}</span>
        </div>
    </div>
    `
}

