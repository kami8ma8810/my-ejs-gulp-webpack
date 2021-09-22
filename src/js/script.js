//MV100vh
const setViewHeight = () => {
  const vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
};
//リサイズ時にも発動するようにする
window.addEventListener('resize', setViewHeight);
//初期化
setViewHeight();

// 現在のナビゲーションハイライト
$(function () {
  $('.header-nav a').each(function () {
    if (this.href == location.href) {
      $(this).parents('li').addClass('is-current');
    }
  });
});
