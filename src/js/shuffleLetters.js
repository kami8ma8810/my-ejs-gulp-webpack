import shuffleLetters from './modules/jquery.shuffleLetters';

export function shuffleLettersAnime() {
  $(function () {
    // シャッフルさせる要素の取得
    let shuffleElm = $('.js-shuffleLetters');
    let shuffleElmFast = $('.js-shuffleLettersFast');
    let shuffleElmInfinite = $('.js-shuffleLettersInfinite');
    let shuffleElmInfinite2 = $('.js-shuffleLettersInfinite2');
    let shuffleElmInfinite3 = $('.js-shuffleLettersInfinite3');
    let shuffleElmInfiniteFast = $('.js-shuffleLettersInfiniteFast');
    let shuffleElmInfiniteFast2 = $('.js-shuffleLettersInfiniteFast2');

    // 実行関数
    shuffleElm.shuffleLetters();
    shuffleElmFast.shuffleLettersFast();
    shuffleElmInfinite.shuffleLetters();
    shuffleElmInfinite2.shuffleLetters();
    shuffleElmInfinite3.shuffleLetters();
    shuffleElmInfiniteFast.shuffleLettersFast();
    shuffleElmInfiniteFast2.shuffleLettersFast();

    // // n秒後にアニメーション（一度きり
    // setTimeout(function () {
    //   // Shuffle the container with custom text
    //   container.shuffleLetters({
    //     text: '最初に流れるテキスト',
    //   });
    // }, 2000); //秒数設定

    // n秒後に繰り返しアニメーション
    // setInterval(function () {
    //   // Shuffle the container with custom text
    //   // shuffleElmInfinite.shuffleLetters();
    //   // shuffleElmInfinite.shuffleLetters();
    // }, 2000); //秒数設定

    function shuffleRandom() {
      let min = 2,
        max = 6;
      let rand = Math.floor(Math.random() * (max - min + 1) + min); //Generate Random number between 5 - 10
      shuffleElmInfinite.shuffleLetters();
      setTimeout(shuffleRandom, rand * 1000);
    }

    function shuffleRandom2() {
      let min = 3,
        max = 6;
      let rand = Math.floor(Math.random() * (max - min + 1) + min); //Generate Random number between 5 - 10
      shuffleElmInfinite2.shuffleLetters();
      setTimeout(shuffleRandom2, rand * 1000);
    }

    function shuffleRandom3() {
      let min = 2,
        max = 5;
      let rand = Math.floor(Math.random() * (max - min + 1) + min); //Generate Random number between 5 - 10
      shuffleElmInfiniteFast.shuffleLettersFast();
      setTimeout(shuffleRandom3, rand * 1000);
    }
    function shuffleRandom4() {
      let min = 2,
        max = 5;
      let rand = Math.floor(Math.random() * (max - min + 1) + min); //Generate Random number between 5 - 10
      shuffleElmInfiniteFast2.shuffleLettersFast();
      setTimeout(shuffleRandom4, rand * 1000);
    }
    shuffleRandom();
    shuffleRandom2();
    shuffleRandom3();
    shuffleRandom4();
  });
}
// shuffleLetters();

// export function shuffleLettersScroll() {
//   $(function () {
//     // シャッフルさせる要素の取得
//     let shuffleScrollElm = $('.js-shuffleScroll');
//     // 実行関数

//     shuffleScrollElm.shuffleLettersScrollShow();
//   });
// }
// shuffleLettersScroll();
