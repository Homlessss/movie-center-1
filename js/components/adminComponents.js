components.adminAlalytics = `
<button id="add-film-btn">Thêm phim</button>
`

components.adminPostFilmScreen = `
<section>
    <form action="" class="post-film-form">
        <aside class="poster-img">
            <input type="file">
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
                        <label for="genre-5">Hành động</label>
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
                <select name="" id="">
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
                <select name="" id="">
                    <option value=""></option>
                </select>
                <input type="date">
            </section>
        </article>
    </form>
</section>
`