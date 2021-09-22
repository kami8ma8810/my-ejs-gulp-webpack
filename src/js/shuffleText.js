import ShuffleText from 'shuffle-text';

// 数字で見るページ用

export function shuffleText() {
  ('use strict');

  // 監視と発火

  // ターゲット（複数）
  const targets = document.querySelectorAll('.js-shuffleText');

  // ターゲットが交差した時の処理
  function doWhenTargetObserve(entries, observerStop) {
    //複数ターゲットを１つずつ取り出す
    entries.forEach((entry) => {
      // 監視範囲にないときは何もしない
      if (!entry.isIntersecting) {
        return;
      }
      // // 監視範囲と交差したときの処理
      var shuffleElm = new ShuffleText(entry.target);
      shuffleElm.duration = 800; //シャッフルしている時間
      shuffleElm.sourceRandomCharacter = '0123456789';
      // shuffleElm.sourceRandomCharacter = '_~?/(^ΔΣθΩξω)![фБ]{Ξψ∽√∫Σζπ}*&^%$#';
      shuffleElm.emptyCharacter = '-'; //空白文字（デフォルトではハイフン
      shuffleElm.start();
      entry.target.classList.add('is-show');
      //一度処理したら監視をやめる
      observerStop.unobserve(entry.target);
    });
  }
  // 監視範囲
  const options = {
    root: null, //監視範囲を画面全体
    rootMargin: '-20% 0%', //交差範囲
    threshold: 0,
    once: true,
  };
  const observer = new IntersectionObserver(doWhenTargetObserve, options);

  // ターゲットを監視
  targets.forEach((target) => {
    observer.observe(target);
  });
}
if (document.querySelector('.js-shuffleText') !== null) {
  shuffleText();
}
