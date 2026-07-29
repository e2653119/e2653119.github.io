const topBtn = document.getElementById('backToTop');

// スクロール位置に応じてボタンを表示/非表示
window.addEventListener('scroll', () => {
    if (window.scrollY > 150) {
        topBtn.style.display = 'block';
    } else {
        topBtn.style.display = 'none';
    }
});

// クリックしたら一番上まで滑らかにスクロール
topBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

document.addEventListener('DOMContentLoaded', () => {

    const headers = document.querySelectorAll('.accordion-header');

    headers.forEach(header => {
        header.addEventListener('click', () => {
            const content = header.nextElementSibling;
            const span = header.querySelector('span');

            // 表示・非表示の切り替え
            content.classList.toggle('is-open');

            // ボタンのテキスト変更
            if (content.classList.contains('is-open')) {
                span.textContent = '[閉じる]';
            } else {
                span.textContent = '[開く]';
            }
        });
    });

    const quizButtons = document.querySelectorAll('.quiz-btn');
    const resultText = document.getElementById('quiz-result');

    quizButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const isCorrect = e.target.getAttribute('data-correct') === 'true';

            if (isCorrect) {
                resultText.textContent = "⭕️ 正解！ ウシガエルもアメリカザリガニも北アメリカ原産です。";
                resultText.style.color = "green";
            } else {
                resultText.textContent = "❌ 残念！ 不正解です。もう一度選んでみてね。";
                resultText.style.color = "red";
            }
        });
    });

});