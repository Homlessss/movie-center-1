components.adminPostFilmScreen = `
<section class="admin-post-film">
    <form action="" class="post-film-form" id="post-film-form">
        <aside class="poster-img">
            <img class="poster-add-img-icon" src="img/add-img-icon.svg" alt="">
            <input type="file" id="poster-img">
            <img src="" alt="" id="preview-poster-img">
        </aside>
        <article class="post-film-info">
            <section class="add-film-input">
                <h1 class="sub-title">Thêm Phim</h1>
                <div class="a">
                    <input class="input-border" type="text" name="mainName" placeholder="Tên phim (Tiếng Anh)">
                    <input class="input-border" type="text" name="subName" placeholder="Tên phim (Tiếng Việt)">
                </div>
                <div class="b">
                    <input class="input-border" type="url" name="trailerURL" placeholder="Trailer URL">
                    <textarea class="input-border" type="text" name="plot" placeholder="Nội dung" spellcheck="false"></textarea>
                    <input class="input-border" type="text" name="starring" placeholder="Diễn viên">
                </div>
                <div class="c">
                    <input class="input-border" type="text" name="director" placeholder="Đạo diễn">
                    <input class="input-border" type="text" name="runningTime" placeholder="Thời lượng">
                    <input class="input-border" type="text" name="imdb" placeholder="Điểm imdb">
                    <input class="input-border" type="text" name="rotten" placeholder="Rotten tomatoes">
                </div>
            </section>
            <section class="genre-input-container">
                <h1 class="sub-title">Thể loại</h1>
                <div class="genre-input">
                    <div>
                        <div class="checkbox-wrapper">
                            <input type="checkbox" class="genre" value="Hành động" id="genre-1">
                        </div>
                        <label for="genre-1">Hành động</label>
                    </div>
                    <div>
                        <div class="checkbox-wrapper">
                            <input type="checkbox" class="genre" value="Viễn tưởng" id="genre-2">
                        </div>
                        <label for="genre-2">Viễn Tưởng</label>
                    </div>
                    <div>
                        <div class="checkbox-wrapper">
                            <input type="checkbox" class="genre" value="Kinh dị" id="genre-3">
                        </div>
                        <label for="genre-3">Kinh dị</label>
                    </div>
                    <div>
                        <div class="checkbox-wrapper">
                            <input type="checkbox" class="genre" value="Phiêu lưu" id="genre-4">
                        </div>
                        <label for="genre-4">Phiêu lưu</label>
                    </div>
                    <div>
                        <div class="checkbox-wrapper">
                            <input type="checkbox" class="genre" value="Hài hước" id="genre-5">
                        </div>
                        <label for="genre-5">Hài hước</label>
                    </div>
                    <div>
                        <div class="checkbox-wrapper">
                            <input type="checkbox" class="genre" value="Âm nhạc" id="genre-6">
                        </div>
                        <label for="genre-6">Âm nhạc</label>
                    </div>
                    <div>
                        <div class="checkbox-wrapper">
                            <input type="checkbox" class="genre" value="Tâm lí" id="genre-7">
                        </div>
                        <label for="genre-7">Tâm lí</label>
                    </div>
                    <div>
                        <div class="checkbox-wrapper">
                            <input type="checkbox" class="genre" value="Hoạt hình" id="genre-8">
                        </div>
                        <label for="genre-8">Hoạt hình</label>
                    </div>
                    <div>
                        <div class="checkbox-wrapper">
                            <input type="checkbox" class="genre" value="Trinh thám" id="genre-9">
                        </div>
                        <label for="genre-9">Trinh thám</label>
                    </div>
                    <div>
                        <div class="checkbox-wrapper">
                            <input type="checkbox" class="genre" value="Gia Đình" id="genre-10">
                        </div>
                        <label for="genre-10">Gia Đình</label>
                    </div>
                    <div>
                        <div class="checkbox-wrapper">
                            <input type="checkbox" class="genre" value="Cổ Trang" id="genre-11">
                        </div>
                        <label for="genre-11">Cổ Trang</label>
                    </div>
                    <div>
                        <div class="checkbox-wrapper">
                            <input type="checkbox" class="genre" value="Võ thuật" id="genre-12">
                        </div>
                        <label for="genre-12">Võ thuật</label>
                    </div>
                </div>
            </section>
            <section class="date-input">
                <h1 class="sub-title">Ngày khởi chiếu</h1>
                <div>
                    <select class="custom-select" name="date" id="">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                        <option value="11">11</option>
                        <option value="12">12</option>
                        <option value="13">13</option>
                        <option value="14">14</option>
                        <option value="15">15</option>
                        <option value="16">16</option>
                        <option value="17">17</option>
                        <option value="18">18</option>
                        <option value="19">19</option>
                        <option value="20">20</option>
                        <option value="21">21</option>
                        <option value="22">22</option>
                        <option value="23">23</option>
                        <option value="24">24</option>
                        <option value="25">25</option>
                        <option value="26">26</option>
                        <option value="27">27</option>
                        <option value="28">28</option>
                        <option value="29">29</option>
                        <option value="30">30</option>
                        <option value="31">31</option>
                    </select>
                    <select class="custom-select"  name="month" id="">
                        <option value="1">Tháng 1</option>
                        <option value="2">Tháng 2</option>
                        <option value="3">Tháng 3</option>
                        <option value="4">Tháng 4</option>
                        <option value="5">Tháng 5</option>
                        <option value="6">Tháng 6</option>
                        <option value="7">Tháng 7</option>
                        <option value="8">Tháng 8</option>
                        <option value="9">Tháng 9</option>
                        <option value="10">Tháng 10</option>
                        <option value="11">Tháng 11</option>
                        <option value="12">Tháng 12</option>
                    </select>
                    <select class="custom-select"  name="year" id="">
                        <option value="2019">2019</option>
                        <option value="2020">2020</option>
                        <option value="2021">2021</option>
                        <option value="2022">2022</option>
                        <option value="2023">2023</option>
                        <option value="2024">2024</option>
                    </select>   
                </div>
            </section>
            <section class="rate-input">
                <h1 class="sub-title">Rated</h1>
                <select class="custom-select"  name="" id="rated-select">
                    <option value="G">G</option>
                    <option value="PG">PG</option>
                    <option value="PG-13">PG-13</option>
                    <option value="R">R</option>
                    <option value="NC17">NC17</option>
                </select>
            </section>
            <section class="form-footer">
                <button class="primary-btn" id="post-film-btn">Xác nhận</button>
                <p id="add-film-error"></p>
            </section>
        </article>
    </form>
</section>
`

components.adminManagement = `
<section>
    <button id="add-film-btn">Thêm phim</button>
</section>
<section class="table-header-container">
    <section class="table-row table-header">
        <div>
            <h1>Phim</h1>
        </div>
        <div>
            <h3>Ngày khởi chiếu</h3>
        </div>
        <div>
            <h3>Trạng thái</h3>
        </div>
        <div>
            <h3>Đánh giá</h3>
        </div>
        <div>
            <h3>Lượt bình luận</h3>
        </div>
    </section>
</section>
<article class="table-body-container" id="table-body">
</article>
<section class="table-footer-container">
    <button id="step-down-btn" data-direction="down">
        < </button> <input type="number" value="1" id="page-number">
            <button id="step-up-btn" data-direction="up"> > </button>
            <span id="number-of-pages">of 5</span>
</section>
`