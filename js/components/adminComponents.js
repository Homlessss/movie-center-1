components.adminPostFilmScreen = `
<section>
    <form action="" class="post-film-form" id="post-film-form">
        <aside class="poster-img">
            <input type="file" id="poster-img">
            <img src="" alt="" id="preview-poster-img">
        </aside>
        <article>
            <section>
                <h1>Thêm Phim</h1>
                <div>
                    <input type="text" name="mainName" placeholder="Tên phim (Tiếng Anh)">
                    <input type="text" name="subName" placeholder="Tên phim (Tiếng Việt)">
                </div>
                <div>
                    <input type="url" name="trailerURL" placeholder="Trailer URL">
                    <input type="text" name="plot" placeholder="Nội dung">
                    <input type="text" name="starring" placeholder="Diễn viên">
                </div>
                <div>
                    <input type="text" name="director" placeholder="Đạo diễn">
                    <input type="text" name="runningTime" placeholder="Thời lượng">
                    <input type="text" name="imdb" placeholder="Điểm imdb">
                    <input type="text" name="rotten" placeholder="Rotten tomatoes">
                </div>
            </section>
            <section>
                <h1>Thể loại</h1>
                <div>
                    <div>
                        <input type="checkbox" class="genre" value="Hành động" id="genre-1">
                        <label for="genre-1">Hành động</label>
                    </div>
                    <div>
                        <input type="checkbox" class="genre" value="Viễn tưởng" id="genre-2">
                        <label for="genre-2">Viễn Tưởng</label>
                    </div>
                    <div>
                        <input type="checkbox" class="genre" value="Kinh dị" id="genre-3">
                        <label for="genre-3">Kinh dị</label>
                    </div>
                    <div>
                        <input type="checkbox" class="genre" value="Phiêu lưu" id="genre-4">
                        <label for="genre-4">Phiêu lưu</label>
                    </div>
                    <div>
                        <input type="checkbox" class="genre" value="Hài hước" id="genre-5">
                        <label for="genre-5">Hài hước</label>
                    </div>
                    <div>
                        <input type="checkbox" class="genre" value="Âm nhạc" id="genre-6">
                        <label for="genre-6">Âm nhạc</label>
                    </div>
                    <div>
                        <input type="checkbox" class="genre" value="Tâm lí" id="genre-7">
                        <label for="genre-7">Tâm lí</label>
                    </div>
                    <div>
                        <input type="checkbox" class="genre" value="Hoạt hình" id="genre-8">
                        <label for="genre-8">Hoạt hình</label>
                    </div>
                    <div>
                        <input type="checkbox" class="genre" value="Trinh thám" id="genre-9">
                        <label for="genre-9">Trinh thám</label>
                    </div>
                    <div>
                        <input type="checkbox" class="genre" value="Gia Đình" id="genre-10">
                        <label for="genre-10">Gia Đình</label>
                    </div>
                    <div>
                        <input type="checkbox" class="genre" value="Cổ Trang" id="genre-11">
                        <label for="genre-11">Cổ Trang</label>
                    </div>
                    <div>
                        <input type="checkbox" class="genre" value="Võ thuật" id="genre-12">
                        <label for="genre-12">Võ thuật</label>
                    </div>
                </div>
            </section>
            <section>
                <h1>Ngày khởi chiếu</h1>
                <select name="date" id="">
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
                <select name="month" id="">
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
                <select name="year" id="">
                    <option value="2018">2018</option>
                    <option value="2019">2019</option>
                    <option value="2020">2020</option>
                    <option value="2021">2021</option>
                    <option value="2022">2022</option>
                    <option value="2023">2023</option>
                    <option value="2024">2024</option>
                </select>
            </section>
            <section>
                <h1>Rated</h1>
                <select name="" id="rated-select">
                    <option value="G">G</option>
                    <option value="PG">PG</option>
                    <option value="PG-13">PG-13</option>
                    <option value="R">R</option>
                    <option value="NC17">NC17</option>
                </select>
            </section>
            <section>
                <p id="add-film-error"></p>
                <button id="post-film-btn">Xác nhận</button>
            </section>
        </article>
    </form>
</section>
`

components.adminManagement = `
    <section>
        <button id="add-film-btn">Thêm phim</button>
    </section>
    <article>
        <div></div>
    </article>
    <section>
        <div class="table-header">
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
        </div>
    </section>
`