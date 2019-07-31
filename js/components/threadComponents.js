components.thread = function(id) {
return `
<div class="thread-page">
    <header class="thread-header-container">
        <div class="thread-header-wrapper">
            <section class="thread-header-info">
                <h1>Spider-Man Far From Home</h1>
                <h3>Người nhện xa nhà</h3>
                <p>PG-13 | 160p | Hành động, Phiêu lưu, Viễn Tưởng</p>
            </section>
            <section class="thread-header-vote">
                <div>
                    <span class="star">&#9733;</span>
                    <span class="score">8.2</span>
                </div>
                <span>Lượt đánh giá: 230</span>
            </section>
        </div>
    </header>
    <div class="thread-body-container">
        <div class="thread-body-wrapper">
            <aside class="thread-aside">
                <div>
                    <img class="poster-img" src="https://galaxycine.vn/media/2019/5/23/spider-man_1558596633242.jpg"
                        alt="">
                </div>
                <section class="related">
                    <h4>Liên quan</h4>
                    <section class="related-item-wrapper">
                        <div class="related-item">
                            <div>
                                <div class="img-wrapper">
                                    <img src="https://lh3.googleusercontent.com/LB0KWzHlEQHpWnHooMYy9RgKtl998urV1dFOojd__lqrC4-RmN0sKkXCIzLTv266vrA9mIQ=s85"
                                        alt="">
                                </div>
                                <span class="name">Spider Man Far From Home</span>
                            </div>
                            <div>
                                <span class="star">&#9733;</span>
                                <span class="score">8.2</span>
                            </div>
                        </div>
                        <div class="related-item">
                            <div>
                                <div class="img-wrapper">
                                    <img src="https://lh3.googleusercontent.com/LB0KWzHlEQHpWnHooMYy9RgKtl998urV1dFOojd__lqrC4-RmN0sKkXCIzLTv266vrA9mIQ=s85"
                                        alt="">
                                </div>
                                <span class="name">Spider Man Far From Home</span>
                            </div>
                            <div>
                                <span class="star">&#9733;</span>
                                <span class="score">8.2</span>
                            </div>
                        </div>
                        <div class="related-item">
                            <div>
                                <div class="img-wrapper">
                                    <img src="https://lh3.googleusercontent.com/LB0KWzHlEQHpWnHooMYy9RgKtl998urV1dFOojd__lqrC4-RmN0sKkXCIzLTv266vrA9mIQ=s85"
                                        alt="">
                                </div>
                                <span class="name">Spider Man Far From Home</span>
                            </div>
                            <div>
                                <span class="star">&#9733;</span>
                                <span class="score">8.2</span>
                            </div>
                        </div>
                    </section>
                </section>
            </aside>
            <article class="thread-article">
                <section class="thread-info">
                    <h1>Thông tin phim</h1>
                    <p class="plot">Hậu chiến Vô Cực, Người Nhện Peter Parker và nhóm bạn thân cùng
                        tham gia chuyến du lịch châu Âu của trường. Tuy nhiên, kế hoạch
                        siêu anh hùng nghỉ phép của Peter nhanh chóng bị hủy bỏ sau khi
                        cậu đồng ý giúp Nick Fury khám phá bí ẩn về những cuộc tấn công của
                        nhóm kẻ thù mang sức mạnh nguyên tố đang tàn phá khắp lục địa.</p>
                    <p><span class="title">Đạo diễn: </span>Jon Watts</p>
                    <p><span class="title">Diễn viên: </span>Tom Holland, Samuel L. Jackson, Zendaya, Jon Favreau</p>
                    <p class="release-date"><span class="title">Khởi chiếu: </span> 05/07/2019</p>
                    <div class="score">
                        <div class="imdb-score">
                            <img src="https://firebasestorage.googleapis.com/v0/b/codeintensive.appspot.com/o/images%2FIMDB.svg?alt=media&token=cc62468c-9399-4ea3-a926-a709b4ce54c8"
                                alt="">
                            <span>8.0</span>
                        </div>
                        <div class="rotten-score">
                            <img src="https://firebasestorage.googleapis.com/v0/b/codeintensive.appspot.com/o/images%2FRotten%20Tomatoes.svg?alt=media&token=ffe96f4d-49e8-4b87-aba4-07622232098d"
                                alt="">
                            <span>93%</span>
                        </div>
                    </div>
                </section>
                <section class="thread-vote">
                    <p class="title">Đánh giá</p>
                    <form action="" class="rating-form">
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
                        <textarea name="content" id="" placeholder="Bình luận"></textarea>
                        <button class="rating-form-btn">Gửi đánh giá</button>
                    </form>
                </section>
                <section class="thread-comment">Comment</section>
            </article>
        </div>
    </div>
</div>
`
}