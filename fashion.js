const video = document.getElementById('playlistVideo');

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  const scrollableHeight = document.body.scrollHeight - window.innerHeight;
  const scrollFraction = scrollY / scrollableHeight;

  // 스크롤에 따른 비디오 시간 설정
  video.currentTime = scrollFraction * video.duration;

  // 스크롤 방향에 따른 재생 속도 설정
  const playbackRate = scrollY > video.currentTime ? 1 : -1;
  video.playbackRate = playbackRate;
  video.play();
});
