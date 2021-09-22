import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
import LocomotiveScroll from "locomotive-scroll";

// ----------------------------------------
// SP/PCでクラス名（アニメーションのjs-move**クラス名を切り替え）

// ★★★あとでmatchMediaで書き換える！★★★
// ----------------------------------------

if (document.getElementById("js-topKvAnimation") !== null) {
  const animeNumber = document.querySelector(".number");
  const animeMillion = document.querySelector(".million");
  const animeReal = document.querySelector(".real");
  const animeGrow = document.querySelector(".grow");
  const animeCreate = document.querySelector(".create");
  const animeValue = document.querySelector(".value");
  const animeMa = document.querySelector(".ma");
  const animeDx = document.querySelector(".dx");
  const animeYakusyoku = document.querySelector(".yakusyoku");
  const animeMarket = document.querySelector(".market");
  const animeMedicine = document.querySelector(".medicine");
  const animeTimes = document.querySelector(".times");
  const animeMetamor = document.querySelector(".metamor");
  const animeOnly = document.querySelector(".only");
  const animeOnlyLight = document.querySelector(".only-light");
  const animeAi = document.querySelector(".ai");
  // ここまで変更するアニメーション要素
  const kvMediaQueryList = matchMedia("(min-width: 1366px)");

  function onMediaQueryChange(kvMediaQueryList) {
    if (kvMediaQueryList.matches === true) {
      animeNumber.classList.add("js-moveTop");
      animeNumber.classList.remove("js-moveLeft");

      animeMillion.classList.add("js-moveBottomHalfDelay");
      animeMillion.classList.remove("js-moveLeft");

      animeReal.classList.add("js-moveLeft");
      animeReal.classList.remove("js-moveRight");

      animeGrow.classList.add("js-moveTop");
      animeGrow.classList.remove("js-moveLeft");

      animeCreate.classList.add("js-moveRight");
      animeCreate.classList.remove("js-moveLeft");

      animeValue.classList.add("js-moveLeft");
      animeValue.classList.remove("js-moveRight");

      animeMa.classList.add("js-moveBottom");
      animeMa.classList.remove("js-moveTopDelay");

      animeDx.classList.add("js-moveRight");
      animeDx.classList.remove("js-moveBottom");

      animeYakusyoku.classList.add("js-moveRT");
      animeYakusyoku.classList.remove("js-moveRight");

      animeMarket.classList.add("js-moveLB");
      animeMarket.classList.remove("js-moveRB");

      animeMedicine.classList.add("js-moveLT");
      animeMedicine.classList.remove("js-moveRB");

      animeTimes.classList.add("js-moveRT");
      animeTimes.classList.remove("js-moveLeftDelay");

      animeMetamor.classList.add("js-moveLeft");
      animeMetamor.classList.remove("js-moveRT");

      animeOnlyLight.classList.add("js-moveLeft");
      animeOnlyLight.classList.remove("js-moveBottom");

      animeOnly.classList.add("js-moveBottomDelay");
      animeOnly.classList.remove("js-moveBottom");

      animeAi.classList.add("js-moveBottom");
      animeAi.classList.remove("js-moveLeft");
    } else {
      false;
    }
  }

  kvMediaQueryList.addEventListener("change", onMediaQueryChange);

  onMediaQueryChange(kvMediaQueryList);
}

// ----------------------------------------
// ここからスクロール（ボディの高さ）に関わるスクリプト
// ----------------------------------------
export function smoothParallax() {
  gsap.registerPlugin(ScrollTrigger); //スクロールトリガーを使用するのに必須

  // エラーを非表示
  gsap.config({
    nullTargetWarn: false,
  });

  // Locomotive/ScrollTriggerの設定
  const locoScroll = new LocomotiveScroll({
    el: document.querySelector(".smooth-scroll-container"),
    // multiplier: 0.9, // スクロールの速度（値が小さいほど遅くなる）
    multiplier: 1,
    smooth: true,

    smartphone: {
      // smooth: false,//慣性スクロール無効
      smooth: true,
    },
    tablet: {
      // smooth: false,慣性スクロール無効
      smooth: true,
      breakpoint: 1024, //1024px以下までをタブレットとして認識
    },
  });
  // Locomotiveが更新されるたびに、ScrollTriggerも更新する
  locoScroll.on("scroll", ScrollTrigger.update);

  // Locomotiveがスムースさせる要素（.smooth-scroll-container）を使用しているため、この要素に対してScrollTriggerはスクローラープロキシメソッドを使用させる 参考：https://greensock.com/docs/v3/Plugins/ScrollTrigger/static.scrollerProxy
  ScrollTrigger.scrollerProxy(".smooth-scroll-container", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    }, // 垂直方向にスクロールするだけのため、scrollLeftを定義する必要はない
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
  });
  // Locomotive/ScrollTriggerの設定 end

  // ------------------------------
  // GSAP parallax
  // ------------------------------

  // パララックス効果を持つ要素のコンテナ
  // ------------------------------
  let parallaxElements = Array.prototype.slice.call(
    document.querySelectorAll(".parallax-container")
  );
  let self = this;

  // parallax-container内の要素（boxまたはboxTop）にパララックス効果を持たせる
  parallaxElements.forEach(function (self) {
    let boxTop = self.querySelectorAll(".parallaxTop");
    let box = self.querySelectorAll(".parallax");

    // FVで既にビューポートに入っているセクションの発火
    gsap.to(boxTop, {
      scrollTrigger: {
        scroller: ".smooth-scroll-container",
        scrub: true,
        trigger: self,
        start: "top 0%",
        end: "bottom 0%",
      },
      y: (i, target) => -innerHeight * target.dataset.speed,
      ease: "none",
    });

    // 要素がビューポートに入ったらアニメーション発火
    gsap.to(box, {
      scrollTrigger: {
        scroller: ".smooth-scroll-container",
        scrub: true,
        trigger: self,
        start: "top 100%",
        end: "bottom 0%",
      },
      y: (i, target) => -innerHeight * target.dataset.speed,
      ease: "none",
    });
  });

  // -----------------------
  // TOPページ文字散らばるアニメーションの動き
  // -----------------------
  if (document.querySelector(".js-scrollAnime") !== null) {
    const horizontalScrollWidth = window.innerWidth * 1.1;
    const verticalScrollWidth = window.innerHeight * 1.5;

    const tl = gsap.timeline({
      scrollTrigger: {
        scroller: ".smooth-scroll-container",
        // scrub: 0.1,
        scrub: 0.5,
        trigger: ".js-scrollAnime",
        pin: true,
        // anticipatePin: 1,
        start: "top top",
        // end: '+=1000',
        end: verticalScrollWidth,
      },
    });
    tl.to(
      ".js-moveLeft",
      {
        x: -horizontalScrollWidth,
        ease: "power3.out",
        // stagger: 0.01,//同じクラス名を持つ要素でそれぞれ遅らせる場合は追加
      },
      0 //ここの数値でdelay調整
    )
      .to(
        ".js-moveLeftDelay",
        {
          x: -horizontalScrollWidth,
          ease: "power3.out",
        },
        0.005
      )
      .to(
        ".js-moveTop",
        {
          y: -verticalScrollWidth,
          ease: "power3.out",
        },
        0
      )
      .to(
        ".js-moveBottom",
        {
          y: verticalScrollWidth,
          ease: "power3.out",
        },
        0
      )
      .to(
        ".js-moveBottomHalfDelay",
        {
          y: verticalScrollWidth,
          ease: "power3.out",
        },
        0.01
      )
      .to(
        ".js-moveBottomDelay",
        {
          y: verticalScrollWidth,
          ease: "power3.out",
        },
        0.05
      )
      .to(
        ".js-moveRight",
        {
          x: horizontalScrollWidth,
          ease: "power3.out",
        },
        0
      )
      .to(
        //左上へ
        ".js-moveLT",
        {
          x: -horizontalScrollWidth * 2,
          y: -verticalScrollWidth * 2,
          ease: "power3.out",
        },
        0
      )
      .to(
        ".js-moveLTDelay",
        {
          x: -horizontalScrollWidth * 2,
          y: -verticalScrollWidth,
          ease: "power3.out",
        },
        0.005
      )
      .to(
        //左下へ
        ".js-moveLB",
        {
          x: -horizontalScrollWidth * 2,
          y: verticalScrollWidth * 2,
          ease: "power3.out",
        },
        0
      )
      .to(
        //右下へ
        ".js-moveRB",
        {
          x: horizontalScrollWidth * 2,
          y: verticalScrollWidth,
          ease: "power3.out",
        },
        0.005
      )
      .to(
        //右上へ
        ".js-moveRT",
        {
          x: horizontalScrollWidth * 2,
          y: -verticalScrollWidth,
          ease: "power3.out",
        },
        0.005
      )
      .to(
        ".js-moveTopDelay",
        {
          y: -verticalScrollWidth,
          ease: "power3.out",
        },
        0.05
      );
  }

  if (document.querySelector(".js-topPageHeader") !== null) {
    // 医療×ITで世界を変える
    ScrollTrigger.create({
      scroller: ".smooth-scroll-container",
      trigger: ".js-titleAnime",
      pin: true,
      start: "center 50%",
      // end: 'bottom center',
      end: "120% 50%",
      toggleClass: {
        targets: ".js-showBox",
        className: "is-show",
      },
      once: true,
      // markers: true,
    });
    // // ヘッダー出現
    ScrollTrigger.create({
      scroller: ".smooth-scroll-container",
      trigger: ".js-titleAnime",
      start: "center 50%",
      end: "120% 50%",
      // markers: true,
      onEnter: function () {
        document.querySelector(".js-topPageHeader").classList.add("is-show");
        // document.querySelector('.header').classList.add('is-show');
      },
      //上に戻ったときはヘッダー非表示にする
      onLeaveBack: () =>
        document.querySelector(".js-topPageHeader").classList.remove("is-show"),
    });
  }

  // アンカートップ
  $("#js-scrollTop").on("click", () => {
    locoScroll.scrollTo(
      "top",
      { duration: 800 },
      { easing: [0.85, 0, 0.15, 1] }
    );
  });

  // ======================================================================================
  // PERSONページ タグソートの処理
  // ======================================================================================
  if (document.getElementById("js-filterTag") !== null) {
    ("use strict");
    // ----------------------------------------
    // タグ切り替え処理
    // ----------------------------------------
    document.addEventListener("DOMContentLoaded", function () {
      //name属性がcategoriesのinput要素（ラジオボタン）の集まり（静的NodeList）を取得
      const input_categories = document.querySelectorAll(
        "input[name=categories]"
      );
      //ループで各ラジオボタンにイベントリスナーを設定
      for (let input_category of input_categories) {
        //changeイベントリスナーを各ラジオボタンに登録
        input_category.addEventListener("change", function () {
          //全ての.targetの要素を取得
          const targets = document.querySelectorAll(".js-filterTarget");
          for (let target of targets) {
            //全ての.targetの要素にdisplay: block; を設定
            target.style.setProperty("display", "inline-block");
            target.classList.remove("is-show");
          }
          // 各記事のタグを初期化（デフォルトはグレー背景、アクティブで青背景白文字）
          const article_tags = document.querySelectorAll(".article-tag");
          for (let article_tag of article_tags) {
            article_tag.classList.remove("is-active");
          }

          //ラジオボタンを選択するときの処理
          if (this.checked) {
            const tagElm = document.getElementById("js-tagScrollTop");
            locoScroll.scrollTo(
              tagElm,
              { duration: 600 },
              { easing: [0, 0.55, 0.45, 1] }
            );
            //cat-all以外を選択したときの処理
            // ----------------------------
            if (this.value !== "cat-all") {
              //js-filterTargetの要素の中で、選択したvalue以外のものを全て取得
              const not_checked_categories = document.querySelectorAll(
                ".js-filterTarget:not([data-category~=" +
                  '"' +
                  this.value +
                  '"])'
              );
              //選択した要素以外をすべて非表示
              for (let not_checked_category of not_checked_categories) {
                not_checked_category.style.setProperty("display", "none");
              }
              //選択されたdata-categoryと一致するvalue属性の要素にアニメーションのクラスを追加
              const checked_categories = document.querySelectorAll(
                ".js-filterTarget[data-category~=" + '"' + this.value + '"]'
              );
              for (let checked_category of checked_categories) {
                checked_category.classList.add("is-show");
              }
              // それぞれの記事についているタグ（クリック不可）の処理
              const checked_article_tags = document.querySelectorAll(
                ".article-tag[data-category~=" + '"' + this.value + '"]'
              );
              for (let checked_article_tag of checked_article_tags) {
                checked_article_tag.classList.add("is-active");
              }
            }
            //cat-allを選択したときの処理
            // ----------------------------
            else {
              // 全ての.targetの要素にアニメーションのクラスを追加
              for (let target of targets) {
                target.classList.add("is-show");
              }
              // ALL以外のpickup!を非表示にする
              const not_all_pickupTags =
                document.querySelectorAll(".js-pickup");
              for (let not_all_pickupTag of not_all_pickupTags) {
                not_all_pickupTag.style.setProperty("display", "none");
              }
            }
            // 表示される記事数が変わったときの高さのズレを修正
            ScrollTrigger.addEventListener("refresh", () =>
              locoScroll.update()
            );
            ScrollTrigger.refresh();
          }
        });
      }
    });

    // ---------------------------------
    // PERSONページ TOPから遷移した時の処理
    // ---------------------------------
    window.addEventListener("load", function () {
      const tagCatAll = document.querySelector(".cat0");
      const tagCat1 = document.querySelector(".cat1");
      const tagCat2 = document.querySelector(".cat2");
      const tagCat3 = document.querySelector(".cat3");
      const tagCat4 = document.querySelector(".cat4");
      const tagCat5 = document.querySelector(".cat5");
      const tagCat6 = document.querySelector(".cat6");
      const tagCat7 = document.querySelector(".cat7");
      const tagCat8 = document.querySelector(".cat8");
      const tagCat9 = document.querySelector(".cat9");
      const tagCat10 = document.querySelector(".cat10");
      const tagCat11 = document.querySelector(".cat11");
      const tagCat12 = document.querySelector(".cat12");
      const tagCat13 = document.querySelector(".cat13");
      const tagCat14 = document.querySelector(".cat14");
      const tagCat15 = document.querySelector(".cat15");
      const tagCat16 = document.querySelector(".cat16");
      const tagCat17 = document.querySelector(".cat17");
      const tagCat18 = document.querySelector(".cat18");
      const tagCat19 = document.querySelector(".cat19");
      const tagCat20 = document.querySelector(".cat20");
      const tagCat21 = document.querySelector(".cat21");

      // URLのパラメータを取得
      let urlParam = location.search.substring(1);

      // URLにパラメータが存在するなら、
      if (urlParam) {
        // 「&」が含まれている場合は「&」で分割
        let param = urlParam.split("&");

        // パラメータを格納する用の配列を用意
        let paramArray = [];
        let i;

        // 用意した配列にパラメータを格納
        for (i = 0; i < param.length; i++) {
          let paramItem = param[i].split("=");
          paramArray[paramItem[0]] = paramItem[1];
        }

        // パラメータidを判定
        if (paramArray.id == tagCat1.className) {
          tagCat1.click();
        } else if (paramArray.id == tagCat2.className) {
          tagCat2.click();
        } else if (paramArray.id == tagCat3.className) {
          tagCat3.click();
        } else if (paramArray.id == tagCat4.className) {
          tagCat4.click();
        } else if (paramArray.id == tagCat5.className) {
          tagCat5.click();
        } else if (paramArray.id == tagCat6.className) {
          tagCat6.click();
        } else if (paramArray.id == tagCat7.className) {
          tagCat7.click();
        } else if (paramArray.id == tagCat8.className) {
          tagCat8.click();
        } else if (paramArray.id == tagCat9.className) {
          tagCat9.click();
        } else if (paramArray.id == tagCat10.className) {
          tagCat10.click();
        } else if (paramArray.id == tagCat11.className) {
          tagCat11.click();
        } else if (paramArray.id == tagCat12.className) {
          tagCat12.click();
        } else if (paramArray.id == tagCat13.className) {
          tagCat13.click();
        } else if (paramArray.id == tagCat14.className) {
          tagCat14.click();
        } else if (paramArray.id == tagCat15.className) {
          tagCat15.click();
        } else if (paramArray.id == tagCat16.className) {
          tagCat16.click();
        } else if (paramArray.id == tagCat17.className) {
          tagCat17.click();
        } else if (paramArray.id == tagCat18.className) {
          tagCat18.click();
        } else if (paramArray.id == tagCat19.className) {
          tagCat19.click();
        } else if (paramArray.id == tagCat20.className) {
          tagCat20.click();
        } else if (paramArray.id == tagCat21.className) {
          tagCat21.click();
        } else {
          return false;
        }
        // TOPからの遷移でタグが選択されていたらピックアップ記事までスクロール
        const tagElm = document.getElementById("js-tagScrollTop");
        locoScroll.scrollTo(
          tagElm,
          { duration: 1200 },
          { easing: [1, 0.28, 0.23, 0.88] }
        );

        // 表示される記事数が変わったときの高さのズレを修正
        ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
        ScrollTrigger.refresh();
      } else {
        tagCatAll.click();
      }
    });
  }

  // ======================================================================================
  // ABOUT/ミッションページのアコーディオン開閉
  // ======================================================================================
  if (document.getElementById("js-toggleAccordion") !== null) {
    $(".js-accordionToggle").on("click", function () {
      // $('.js-accordionInner').fadeToggle();
      if ($(".js-accordionToggle").hasClass("is-open")) {
        $(".js-accordionInner").css("display", "none");
        $(".js-accordionToggle").removeClass("is-open");
        // ２つ目の閉じるボタンで元の場所へ戻る
        $(".js-accordionOnlyClose").css("display", "none");
        locoScroll.scrollTo(
          ".js-accordionAnchor",
          { duration: 800 },
          { easing: [0.85, 0, 0.15, 1] }
        );
      } else {
        $(".js-accordionInner").css("display", "block");
        $(".js-accordionToggle").addClass("is-open");
        $(".js-accordionOnlyClose").css("display", "flex");
      }
      // 表示される記事数が変わったときの高さのズレを修正
      ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
      ScrollTrigger.addEventListener("resize", () => locoScroll.update());
      ScrollTrigger.refresh();
    });
  }
  // ======================================================================================
  // 他ページからTOPへ戻ってきたときと更新ボタンを押したときの処理
  // ======================================================================================
  if (document.getElementById("js-topKvAnimation") !== null) {
    // TOPページでの処理
    const removeElm = document.getElementById("js-topKv");
    const headerElm = document.querySelector(".header-container");
    const topicsElm = document.querySelector(".js-textScramble");
    const topicsItems = document.querySelectorAll(".js-srOnly");

    window.addEventListener("DOMContentLoaded", function () {
      // アクセスフラグがない場合はアニメーションあり。フラグをつける（初回アクセス
      if (sessionStorage.getItem("userAccessParam") == null) {
        sessionStorage.setItem("userAccessParam", "accessDone");
        sessionStorage.setItem("userTopParam", "topTrue");
        // console.log(sessionStorage.getItem('userAccessParam'));
        // console.log(sessionStorage.getItem('userTopParam'));
      }
      // アクセスフラグがある場合
      else {
        // トップフラグがある場合アニメーションあり（トップページでリロード
        if (sessionStorage.getItem("userTopParam") === "topTrue") {
          // console.log(sessionStorage.getItem('userAccessParam'));
          // console.log(sessionStorage.getItem('userTopParam'));
        }
        // トップフラグがない場合アニメーションなし、（他ページからTOPにアクセス）
        else {
          removeElm.classList.add("is-hidden");
          headerElm.classList.remove("js-topPageHeader");
          headerElm.classList.add("is-show");
          topicsElm.remove();
          topicsItems.forEach((topicsItem) => {
            topicsItem.classList.remove("js-srOnly");
          });
          sessionStorage.setItem("userAccessParam", "accessDone");
          sessionStorage.setItem("userTopParam", "topTrue");
          // console.log(sessionStorage.getItem('userAccessParam'));
          // console.log(sessionStorage.getItem('userTopParam'));
        }
      }
    });
  } else {
    // TOP以外のページでアクセスフラグ追加、トップフラグ削除
    window.addEventListener("DOMContentLoaded", function () {
      sessionStorage.setItem("userAccessParam", "accessDone");
      sessionStorage.setItem("userTopParam", null);
    });
  }

  //ウィンドウが更新されるたびに、ScrollTriggerを更新してからLocomotive更新する必要がある
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  ScrollTrigger.addEventListener("resize", () => locoScroll.update());

  // すべての設定を完了後、ピン留めなどのためにpaddingが追加されている可能性があるため、ScrollTriggerをrefresh、LocomotiveScrollを更新する
  ScrollTrigger.refresh();
}
smoothParallax();
