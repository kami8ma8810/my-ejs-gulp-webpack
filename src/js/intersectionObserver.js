{
  ("use strict");
  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  // ——————————————————————————————————————————————————
  // TextScramble
  // ——————————————————————————————————————————————————
  var TextScramble = /*#__PURE__*/ (function () {
    function TextScramble(el) {
      _classCallCheck(this, TextScramble);

      this.el = el;
      this.chars = "_~?/(^ΔΣθΩξω)![фБ]{Ξψ∽√∫Σζπ}*&^%$#";
      this.update = this.update.bind(this);
    }

    _createClass(TextScramble, [
      {
        key: "setText",
        value: function setText(newText) {
          var _this = this;

          var oldText = this.el.innerText;
          var length = Math.max(oldText.length, newText.length);
          var promise = new Promise(function (resolve) {
            return (_this.resolve = resolve);
          });
          this.queue = [];

          for (var i = 0; i < length; i++) {
            var from = oldText[i] || "";
            var to = newText[i] || "";
            var start = Math.floor(Math.random() * 40); //ランダム時間デフォルト40
            var end = start + Math.floor(Math.random() * 40);
            this.queue.push({
              from: from,
              to: to,
              start: start,
              end: end,
            });
          }

          cancelAnimationFrame(this.frameRequest);
          this.frame = 0;
          this.update();
          return promise;
        },
      },
      {
        key: "update",
        value: function update() {
          var output = "";
          var complete = 0;

          for (var i = 0, n = this.queue.length; i < n; i++) {
            var _this$queue$i = this.queue[i],
              from = _this$queue$i.from,
              to = _this$queue$i.to,
              start = _this$queue$i.start,
              end = _this$queue$i.end,
              char = _this$queue$i.char;

            if (this.frame >= end) {
              complete++;
              output += to;
            } else if (this.frame >= start) {
              if (!char || Math.random() < 0.28) {
                char = this.randomChar();
                this.queue[i].char = char;
              }

              output += '<span class="scramble-symbol">'.concat(
                char,
                "</span>"
              );
            } else {
              output += from;
            }
          }

          this.el.innerHTML = output;

          if (complete === this.queue.length) {
            this.resolve();
          } else {
            this.frameRequest = requestAnimationFrame(this.update);
            this.frame++;
          }
        },
      },
      {
        key: "randomChar",
        value: function randomChar() {
          return this.chars[Math.floor(Math.random() * this.chars.length)];
        },
      },
    ]);

    return TextScramble;
  })();

  // ——————————————————————————————————————————————————
  // 実行関数
  // ——————————————————————————————————————————————————

  // var phrases = [
  //   '#プロジェクトストーリー',
  //   // '誰も挑戦していない分野へ',
  //   // 'あなたにしかできない仕事がここに',
  // ];
  const phrases = [
    "#プロジェクトストーリー", //01
    "#座談会", //02
    "#インタビュー", //03
    "#新卒入社", //04
    "#中途入社", //05
    "#経営人材", //06
    "#DX", //07
    "#AI", //08
    "#新規事業", //09
    "#M&A", //10
    "#グローバル", //11
    "#執行役員", //12
    "#COVID-19", //13
    "#投資銀行", //14
    "#20代の成長環境", //15
    "#マッキンゼー", //16
    "#総合商社", //17
    "#メガベンチャー", //18
    "#BCG", //19
    "#コンサル", //20
    "#業務執行役員", //21
  ];
  const el1 = document.querySelector(".js-scramble01");
  const el2 = document.querySelector(".js-scramble02");
  const el3 = document.querySelector(".js-scramble03");
  const el4 = document.querySelector(".js-scramble04");
  const el5 = document.querySelector(".js-scramble05");
  const el6 = document.querySelector(".js-scramble06");
  const el7 = document.querySelector(".js-scramble07");
  const el8 = document.querySelector(".js-scramble08");
  const el9 = document.querySelector(".js-scramble09");
  const el10 = document.querySelector(".js-scramble10");
  const el11 = document.querySelector(".js-scramble11");
  const el12 = document.querySelector(".js-scramble12");
  const el13 = document.querySelector(".js-scramble13");
  const el14 = document.querySelector(".js-scramble14");
  const el15 = document.querySelector(".js-scramble15");
  const el16 = document.querySelector(".js-scramble16");
  const el17 = document.querySelector(".js-scramble17");
  const el18 = document.querySelector(".js-scramble18");
  const el19 = document.querySelector(".js-scramble19");
  const el20 = document.querySelector(".js-scramble20");
  const el21 = document.querySelector(".js-scramble21");
  const fx1 = new TextScramble(el1);
  const fx2 = new TextScramble(el2);
  const fx3 = new TextScramble(el3);
  const fx4 = new TextScramble(el4);
  const fx5 = new TextScramble(el5);
  const fx6 = new TextScramble(el6);
  const fx7 = new TextScramble(el7);
  const fx8 = new TextScramble(el8);
  const fx9 = new TextScramble(el9);
  const fx10 = new TextScramble(el10);
  const fx11 = new TextScramble(el11);
  const fx12 = new TextScramble(el12);
  const fx13 = new TextScramble(el13);
  const fx14 = new TextScramble(el14);
  const fx15 = new TextScramble(el15);
  const fx16 = new TextScramble(el16);
  const fx17 = new TextScramble(el17);
  const fx18 = new TextScramble(el18);
  const fx19 = new TextScramble(el19);
  const fx20 = new TextScramble(el20);
  const fx21 = new TextScramble(el21);
  // var counter = 0;

  var textScrambleShow = function textScrambleShow() {
    // fx.setText(phrases[counter]).then(function () {
    //   setTimeout(next, 5000);
    // });
    fx1.setText(phrases[0]);
    fx2.setText(phrases[1]);
    fx3.setText(phrases[2]);
    fx4.setText(phrases[3]);
    fx5.setText(phrases[4]);
    fx6.setText(phrases[5]);
    fx7.setText(phrases[6]);
    fx8.setText(phrases[7]);
    fx9.setText(phrases[8]);
    fx10.setText(phrases[9]);
    fx11.setText(phrases[10]);
    fx12.setText(phrases[11]);
    fx13.setText(phrases[12]);
    fx14.setText(phrases[13]);
    fx15.setText(phrases[14]);
    fx16.setText(phrases[15]);
    fx17.setText(phrases[16]);
    fx18.setText(phrases[17]);
    fx19.setText(phrases[18]);
    fx20.setText(phrases[19]);
    fx21.setText(phrases[20]);
    // counter = (counter + 1) % phrases.length;
  };
}

if (document.querySelector(".js-textScramble") !== null) {
  // ターゲット（複数）
  let targets = document.querySelectorAll(".js-textScramble");

  // ターゲットが交差した時の処理
  function doWhenTargetObserve(entries, observerStop) {
    //複数ターゲットを１つずつ取り出す
    entries.forEach((entry) => {
      // 監視範囲にないときは何もしない
      if (!entry.isIntersecting) {
        return;
      }
      // 監視範囲と交差したときの処理
      const deleteElm = document.querySelector(".js-textScramble");
      deleteElm.remove();
      textScrambleShow();

      //一度処理したら監視をやめる
      observerStop.unobserve(entry.target);
    });
  }
  // 監視範囲
  const options = {
    root: null, //監視範囲を画面全体
    rootMargin: "-15% 0%", //交差範囲
    threshold: 0,
    once: true,
  };
  const observer = new IntersectionObserver(doWhenTargetObserve, options);

  // ターゲットを監視
  targets.forEach((target) => {
    observer.observe(target);
  });
}
// ------------------------
// 下からニュッと一気に現れる
// ------------------------
if (document.querySelector(".js-showUp") !== null) {
  // ターゲット（複数）
  const targets = document.querySelectorAll(".js-showUp");

  // ターゲットが交差した時の処理
  function doWhenTargetObserve(entries, observerStop) {
    //複数ターゲットを１つずつ取り出す
    entries.forEach((entry) => {
      // 監視範囲にないときは何もしない
      if (!entry.isIntersecting) {
        return;
      }
      // 監視範囲と交差したときの処理
      entry.target.classList.add("is-show");

      //一度処理したら監視をやめる
      observerStop.unobserve(entry.target);
    });
  }
  // 監視範囲
  const options = {
    root: null, //監視範囲を画面全体
    rootMargin: "-20% 0%", //交差範囲
    threshold: 0,
    once: true,
  };
  const observer = new IntersectionObserver(doWhenTargetObserve, options);

  // ターゲットを監視
  targets.forEach((target) => {
    observer.observe(target);
  });
}
// ------------------------
// ボックス
// ------------------------
if (document.querySelector(".js-showReveal") !== null) {
  // ターゲット（複数）
  const targets = document.querySelectorAll(".js-showReveal");

  // ターゲットが交差した時の処理
  function doWhenTargetObserve(entries, observerStop) {
    //複数ターゲットを１つずつ取り出す
    entries.forEach((entry) => {
      // 監視範囲にないときは何もしない
      if (!entry.isIntersecting) {
        return;
      }
      // 監視範囲と交差したときの処理
      entry.target.classList.add("is-show");

      //一度処理したら監視をやめる
      observerStop.unobserve(entry.target);
    });
  }
  // 監視範囲
  const options = {
    root: null, //監視範囲を画面全体
    rootMargin: "-10% 0%", //交差範囲
    threshold: 0,
    once: true,
  };
  const observer = new IntersectionObserver(doWhenTargetObserve, options);

  // ターゲットを監視
  targets.forEach((target) => {
    observer.observe(target);
  });
}
// ------------------------
// 一文字ずつ下からニュッと出現
// ------------------------
if (document.querySelector(".js-showEach") !== null) {
  // ターゲット（複数）
  const targets = document.querySelectorAll(".js-showEach");

  // ターゲットが交差した時の処理
  function doWhenTargetObserve(entries, observerStop) {
    //複数ターゲットを１つずつ取り出す
    entries.forEach((entry) => {
      // 監視範囲にないときは何もしない
      if (!entry.isIntersecting) {
        return;
      }
      // 監視範囲と交差したときの処理
      entry.target.classList.add("is-show");

      //一度処理したら監視をやめる
      observerStop.unobserve(entry.target);
    });
  }
  // 監視範囲
  const options = {
    root: null, //監視範囲を画面全体
    rootMargin: "-20% 0%", //交差範囲
    threshold: 0,
    once: true,
  };
  const observer = new IntersectionObserver(doWhenTargetObserve, options);

  // ターゲットを監視
  targets.forEach((target) => {
    observer.observe(target);
  });
}
// ------------------------
if (document.querySelector(".js-showEachBr") !== null) {
  // ターゲット（複数）
  const targets = document.querySelectorAll(".js-showEachBr");

  // ターゲットが交差した時の処理
  function doWhenTargetObserve(entries, observerStop) {
    //複数ターゲットを１つずつ取り出す
    entries.forEach((entry) => {
      // 監視範囲にないときは何もしない
      if (!entry.isIntersecting) {
        return;
      }
      // 監視範囲と交差したときの処理
      entry.target.classList.add("is-show");

      //一度処理したら監視をやめる
      observerStop.unobserve(entry.target);
    });
  }
  // 監視範囲
  const options = {
    root: null, //監視範囲を画面全体
    rootMargin: "-20% 0%", //交差範囲
    threshold: 0,
    once: true,
  };
  const observer = new IntersectionObserver(doWhenTargetObserve, options);

  // ターゲットを監視
  targets.forEach((target) => {
    observer.observe(target);
  });
}
// ------------------------
// ふわっと
// ------------------------
if (document.querySelector(".js-fadeIn") !== null) {
  // ターゲット（複数）
  const targets = document.querySelectorAll(".js-fadeIn");

  // ターゲットが交差した時の処理
  function doWhenTargetObserve(entries, observerStop) {
    //複数ターゲットを１つずつ取り出す
    entries.forEach((entry) => {
      // 監視範囲にないときは何もしない
      if (!entry.isIntersecting) {
        return;
      }
      // 監視範囲と交差したときの処理
      entry.target.classList.add("is-show");

      //一度処理したら監視をやめる
      observerStop.unobserve(entry.target);
    });
  }
  // 監視範囲
  const options = {
    root: null, //監視範囲を画面全体
    rootMargin: "-20% 0%", //交差範囲
    threshold: 0,
    once: true,
  };
  const observer = new IntersectionObserver(doWhenTargetObserve, options);

  // ターゲットを監視
  targets.forEach((target) => {
    observer.observe(target);
  });
}

// ------------------------
// 問題提起ページ ヘッダー白反転 ・背景徐々に表示
// ------------------------
if (document.querySelector(".p-message-content") !== null) {
  // ターゲット（複数）
  const targetsBg = document.querySelectorAll(".p-message-content");

  // ターゲットが交差した時の処理
  function doWhenTargetObserveBg(entriesBg) {
    //複数ターゲットを１つずつ取り出す
    entriesBg.forEach((entryBg) => {
      const observeHeader = document.querySelector(".header-container");
      // 監視範囲にないときは何もしない
      observeHeader.classList.add("header-white");
      if (!entryBg.isIntersecting) {
        return;
      }
      // 監視範囲と交差したときの処理
      observeHeader.classList.remove("header-white");

      //一度処理したら監視をやめる
      // observerStop.unobserve(entry.target);
    });
  }
  // 監視範囲
  const optionsBg = {
    root: null, //監視範囲を画面全体
    rootMargin: "0% 0% -100%", //交差範囲
    threshold: 0,
    // once: true,
  };
  const observerBg = new IntersectionObserver(doWhenTargetObserveBg, optionsBg);

  // ターゲットを監視
  targetsBg.forEach((targetBg) => {
    observerBg.observe(targetBg);
  });
}
// ------------------------
// 問題提起ページ 背景徐々に表示
// ------------------------
if (document.getElementById("js-messageBg") !== null) {
  // ターゲット（複数）
  const targets = document.querySelectorAll(".p-message-content__text");

  // ターゲットが交差した時の処理
  function doWhenTargetObserve(entries, observerStop) {
    //複数ターゲットを１つずつ取り出す
    entries.forEach((entry) => {
      // 監視範囲にないときは何もしない
      if (!entry.isIntersecting) {
        return;
      }
      // 監視範囲と交差したときの処理
      document.querySelector(".p-message-page-bg").classList.add("is-show");
      //一度処理したら監視をやめる
      observerStop.unobserve(entry.target);
    });
  }
  // 監視範囲
  const options = {
    root: null, //監視範囲を画面全体
    rootMargin: "-30% 0%", //交差範囲
    threshold: 0,
    once: true,
  };
  const observer = new IntersectionObserver(doWhenTargetObserve, options);

  // ターゲットを監視
  targets.forEach((target) => {
    observer.observe(target);
  });
}
