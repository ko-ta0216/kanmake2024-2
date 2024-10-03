let currentVideo = 0;
const videos = document.querySelectorAll('.video-container');

// 最初の動画を表示
videos[currentVideo].classList.add('active');

let startY;

// スワイプ開始位置を取得
document.addEventListener('touchstart', (e) => {
  startY = e.touches[0].clientY;
});

// スワイプ終了時に次/前の動画に切り替え
document.addEventListener('touchend', (e) => {
  const endY = e.changedTouches[0].clientY;
  if (startY - endY > 50) {
    showNextVideo(); // 上スワイプ
  } else if (endY - startY > 50) {
    showPreviousVideo(); // 下スワイプ
  }
});

function showNextVideo() {
  if (currentVideo < videos.length - 1) {
    videos[currentVideo].classList.remove('active');
    currentVideo++;
    videos[currentVideo].classList.add('active');
  }
}

function showPreviousVideo() {
  if (currentVideo > 0) {
    videos[currentVideo].classList.remove('active');
    currentVideo--;
    videos[currentVideo].classList.add('active');
  }
}
