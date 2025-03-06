/* ハンバーガーメニューの開閉を切り替える関数 */
function toggleMenu() {
    document.querySelector('.nav-links').classList.toggle('active'); // メニューの表示・非表示を切り替え
}

let slideIndex = 0; // スライドの現在のインデックスを管理

/* 指定したスライドを表示する関数 */
function showSlide(index) {
    const slides = document.querySelectorAll('.slide'); // すべてのスライドを取得
    if (index >= slides.length) slideIndex = 0; // 最後のスライドの次は最初に戻る
    if (index < 0) slideIndex = slides.length - 1; // 最初のスライドの前は最後に戻る
    document.querySelector('.slider').style.transform = `translateX(${-slideIndex * 100}%)`; // スライドを横に移動
}

/* 次のスライドを表示する関数 */
function nextSlide() {
    slideIndex++; // インデックスを1つ進める
    showSlide(slideIndex); // 更新したインデックスでスライドを表示
}

/* 前のスライドを表示する関数 */
function prevSlide() {
    slideIndex--; // インデックスを1つ戻す
    showSlide(slideIndex); // 更新したインデックスでスライドを表示
}

/* ページが読み込まれたときに最初のスライドを表示 */
document.addEventListener('DOMContentLoaded', () => showSlide(slideIndex));

/* ページが読み込まれたときにハンバーガーメニューのクリックイベントを設定 */
document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.menu-icon').addEventListener('click', toggleMenu);
});