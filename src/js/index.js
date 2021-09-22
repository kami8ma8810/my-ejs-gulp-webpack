import "@babel/polyfill";
import scrollTop from "./scrollTop";
import toggleModal from "./modal";
import toggleDrawer from "./drawer";
import { shuffleLettersAnime } from "./shuffleLetters";
import smoothParallax from "./smoothParallax";
import IntersectionObserver from "./intersectionObserver";
import { showUpEachText, showUpEachTextBr } from "./showUpEachText";
import shuffleText from "./shuffleText";
import mobileNotHover from "./notHover";
import ua from "./addBrowserClass";

// 画面が読み込まれたら実行する処理

// window.addEventListener('load', function () {
//   stopLoading();
//   // TOP FVのシャッフル
//   if ($('.js-shuffleLetters')) {
//     shuffleLettersAnime();
//   }
//   // 下層ページのFVアニメーション;
//   if ($('.js-startLoaded')) {
//     $('.js-startLoaded').addClass('is-show');
//   }
// });

// ーーーーーーーーーーーーーーーーーーーーーーーーー

// ロードが完了したらローディング画面終了、アニメーションスタート。3秒経ってもロードが終わらなければローディング強制終了
// function loadingThenAnime() {
//   return new Promise((resolve, reject) => {
//     window.addEventListener('load', () => {
//       stopLoading();
//       resolve();
//     });
//     setTimeout(() => {
//       reject();
//     }, 5000);
//   });
// }
// loadingThenAnime()
//   .then(() => {
//     // console.log('5秒以内にロードが完了しました');
//     startTopAnime();
//     startPageAnime();
//   })
//   .catch(() => {
//     // console.log('5秒以内にロードが完了しませんでした');
//     stopLoading();
//     startTopAnime();
//     startPageAnime();
//   });

// // promise効かなかったときの保険
// setTimeout(function () {
//   document.getElementById('loading').remove();
// }, 6000);

// ――――――――――――――――――――――――――――――――
// 別の書き方
// ――――――――――――――――――――――――――――――――

// const ScrollObserver = require('./class_scrollObserver');

// document.addEventListener('DOMContentLoaded', function () {
//   const main = new Main();
// });

// class Main {
//   constructor() {
//     this._observers = [];
//     this._init();
//   }
// 	set observers(){
// 		this._observers.push(val)
// 	}
// 	get observers(){
// 		return this._observers;
// 	}

// 	_inviewAnimation(el,inview){
// 		if(inview) {
// 			el.classList.add('inview');
// 	}else {
// 			el.classList.remove('inview');
// 	}
// 	}
// 	_scrollInit(){
// 		this.observers = new ScrollObserver('js-tween-animate',this._textAnimation,{rootMargin:'-200px 0px'})
// 	}
// }

// const cb = function (el, isIntersecting) {
//   if (isIntersecting) {
//     const ta = new TextAnimation(el);
//     ta.animate();
//   }
// };

// const so = new ScrollObserver('.animate-title', cb);

document.addEventListener("DOMContentLoaded", function () {
  const main = new Main();
});

class Main {
  constructor() {
    this._userAgent();
  }
  _userAgent() {
    //bodyに各UserAgentクラスを付与
    ua.init();
    // PCでは電話番号ボタンを無効
    const telTargets = document.querySelectorAll("a[href*='tel:']");
    for (let telTarget of telTargets) {
      telTarget.addEventListener("click", (e) => {
        if (ua.getDevice() == "pc") {
          e.preventDefault();
        }
      });
    }
  }
}
