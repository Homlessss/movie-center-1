components.home = `
<div class="home-background">
    <div class="home-container">
        <article class="home-wrapper">
            <header class="film-hot-title">
                <h1 class=home-title>Đang hot</h1>
            </header>
            <aside class="video-trailer" id="home-video-trailer">
                
            </aside>
            <article class="home-list-film" id="home-shown-film">
        
            </article>
            <section class="home-paginate">
                <div class="dot-container" data-number="1">
                    <div class="dot"></div>
                </div>
                <div class="dot-container" data-number="2">
                    <div class="dot"></div>
                </div>
                <div class="dot-container" data-number="3">
                    <div class="dot"></div>
                </div>
                <div class="dot-container" data-number="4">
                    <div class="dot"></div>
                </div>
            </section>
            <section class="comming-soon-title">
                <h1 class=home-title>Phim Sắp Chiếu</h1>
                <div class="footer-left-btn triangle" id="slide-left-btn">&#9668;</div>
                <div class="footer-right-btn triangle" id="slide-right-btn">&#9658;</div>
            </section>
            <footer class="home-footer" id="comming-soon-film">
            </footer>
        </article>
    </div>
</div>
`

components.homeFilmItem = `
<div class="film-item-container">
    <div class="img-wrapper">
        <img src="https://galaxycine.vn/media/2019/5/23/spider-man_1558596633242.jpg" alt="">
    </div>
    <span class="list-item-name">Spider-Man: Far From Home</span>
    <div class="vote-btn">
        <button>Vote</button>
    </div>
    <div class="list-item-vote">
        <span class="list-item-star">&#9733</span>
        <span class="list-item-score">8.2</span>
    </div>
</div>
`