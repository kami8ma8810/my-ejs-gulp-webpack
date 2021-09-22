export function shuffleScrollShow() {
  ('use strict');
  const targets = document.querySelectorAll('.js-shuffleScroll');
  function doWhenTargetObserve(entries, observerStop) {
    //複数ターゲットを１つずつ取り出す
    entries.forEach((entry) => {
      // 監視範囲にないときは何もしない
      if (!entry.isIntersecting) {
        return;
      } else if (entry.target.classList.contains('is-show')) {
        return;
      }
      // 監視範囲と交差したときの処理
      // const targetText = entry.target.textContent;
      shuffleLetters(entry.target, {
        // text: targetText,
        step: 10, // How many times should the letters be changed
        fps: 60, // Frames Per Second
      });
      entry.target.classList.add('is-show');
      //一度処理したら監視をやめる
      observerStop.unobserve(entry.target);
    });
  }
  // 監視範囲
  const options = {
    root: null, //監視範囲を画面全体
    // rootMargin: '-30% 0%', //交差範囲
    threshold: 1,
    once: true,
  };
  const observer = new IntersectionObserver(doWhenTargetObserve, options);

  // ターゲットを監視
  targets.forEach((target) => {
    observer.observe(target);
  });
}
