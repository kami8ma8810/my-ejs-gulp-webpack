// 一文字ずつアニメーションテスト
// js-showEachにis-showというクラス名を付ける定義
function showUpEachText() {
  $('.js-showEach').each(function () {
    // var elemPos = $(this).offset().top - 50;
    // var scroll = $(window).scrollTop();
    // var windowHeight = $(window).height();
    // if (scroll >= elemPos - windowHeight) {
    //   $(this).addClass('is-show');
    // } else {
    //   $(this).removeClass('is-show');
    // }
    var element = $('.js-showEach');
    element.each(function () {
      var text = $(this).text();
      var textbox = '';
      text.split('').forEach(function (t, i) {
        if (t !== ' ') {
          if (i < 10) {
            textbox +=
              '<span style="animation-delay:.' + i + 's;">' + t + '</span>';
          } else {
            var n = i / 10;
            textbox +=
              '<span style="animation-delay:' + n + 's;">' + t + '</span>';
          }
        } else {
          textbox += t;
        }
      });
      $(this).html(textbox);
    });
  });
}

// 画面が読み込まれたらすぐに動かしたい場合の記述
$(window).on('load', function () {
  //spanタグを追加する
}); // ここまで画面が読み込まれたらすぐに動かしたい場合の記述

showUpEachText(); /* アニメーション用の関数を呼ぶ*/

// ――――――――――
// 改行対応バージョン
// ――――――――――

export function showUpEachTextBr() {
  class SpanWrap {
    constructor(target) {
      this.target = this.convertElement(target);
      this.nodes = [...this.target.childNodes];

      this.convert();
    }

    convert() {
      let spanWrapText = '';

      this.nodes.forEach((node) => {
        if (node.nodeType == 3) {
          //テキストの場合
          const text = node.textContent.replace(/\r?\n/g, ''); //テキストから改行コード削除
          //spanで囲んで連結
          spanWrapText =
            spanWrapText +
            text.split('').reduce((acc, v) => {
              return acc + `<span>${v}</span>`;
            }, '');
        } else {
          //テキスト以外
          //<br>などテキスト以外の要素をそのまま連結
          spanWrapText = spanWrapText + node.outerHTML;
        }
      });

      this.target.innerHTML = spanWrapText;
    }

    //jQueryオブジェクトや文字列セレクターを変換
    convertElement(element) {
      if (element instanceof HTMLElement) {
        return element;
      }
      if (element instanceof jQuery) {
        return element[0];
      }
      return document.querySelector(element);
    }
  }
  new SpanWrap('.js-showEachBr');
}

if (document.querySelector('.js-showEachBr') !== null) {
  showUpEachTextBr();
}
