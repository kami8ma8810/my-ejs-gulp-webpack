(() => {
  // ローディング画面フェードアウト
  const stopLoading = () => {
    $("#loading-main").fadeOut(100, function () {
      $("#loading").fadeOut(100);
    });
  };
  // トップページのFVアニメーション
  const startTopAnime = () => {
    if ($(".js-shuffleLetters") !== null) {
      shuffleLettersAnime();
    }
  };

  // 下層ページのFVアニメーション
  const startPageAnime = () => {
    if ($(".js-startLoaded") !== null) {
      $(".js-startLoaded").addClass("is-show");
    }
  };

  function loadingThenAnime() {
    return new Promise((resolve, reject) => {
      let timer;

      const whenLoadSucceed = () => {
        clearTimeout(timer);
        resolve();
      };

      const whenLoadFailed = () => {
        window.addEventListener("load", whenLoadSucceed);
        reject();
      };
      window.addEventListener("load", whenLoadSucceed);
      timer = setTimeout(whenLoadFailed, 3000);
    });
  }
  loadingThenAnime()
    .then(() => {
      // console.log(
      //   '3秒以内にロード完了。ローディング画面を終了してアニメーション開始。'
      // );
      stopLoading();
      startTopAnime();
      startPageAnime();
    })
    .catch(() => {
      // console.log(
      //   '3秒以内にロード失敗。ロードを強制終了。ローディング画面を終了してアニメーション開始。'
      // );
      stopLoading();
      startTopAnime();
      startPageAnime();
    });
})();

// for regacy browser
(() => {
  const loadingElm = document.getElementById("loading");
  const loadingTimer = setTimeout(() => {
    if (loadingElm !== null) {
      stopLoading();
      // console.log('ローディング終了！');
    } else {
      return;
    }
  }, 6000);
  clearTimeout(loadingTimer);
})();
