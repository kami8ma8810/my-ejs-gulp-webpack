// import { bodyScrollPrevent } from './modules/bodyScrollPrevent';

export function toggleDrawer() {
  // ボタンと本体
  const openButton = document.getElementById("js-drawerOpen");
  const drawer = document.querySelector(".js-drawer");
  const closeButton = drawer.querySelector("#js-closeDrawer button");
  const backdrop = drawer.querySelector(".js-backdrop");
  // ドロワーを開閉するボタンがハンバーガーボタンの他にあれば以下を追加
  // const closeDrawerItems = document.querySelectorAll('.js-closeItem');

  // 現在の状態（開いていたらtrue）
  let drawerOpen = false;

  // stateは真偽値
  function changeAriaExpanded(state) {
    const value = state ? "true" : "false";
    drawer.setAttribute("aria-expanded", value);
    openButton.setAttribute("aria-expanded", value);
    closeButton.setAttribute("aria-expanded", value);
  }

  // stateは真偽値
  function changeState(state) {
    if (state === drawerOpen) {
      // console.log('2回以上連続で同じ状態に変更しようとしました');
      return;
    }
    changeAriaExpanded(state);
    drawerOpen = state;
  }

  function openDrawer() {
    changeState(true);
    // ドロワーを開いたらbodyをスクロール不可
    // bodyScrollPrevent(true);
  }

  function closeDrawer() {
    changeState(false);
    // ドロワーを閉じたらbodyのスクロール不可を解除
    // bodyScrollPrevent(false);
  }

  function onClickOpenButton() {
    openDrawer();
  }

  function onClickCloseButton() {
    closeDrawer();
  }
  // bodyScrollPrevent();

  openButton.addEventListener("click", onClickOpenButton, false);
  closeButton.addEventListener("click", onClickCloseButton, false);
  backdrop.addEventListener("click", onClickCloseButton, false);

  // ドロワーを開閉するボタンがハンバーガーボタンの他にあれば以下を追加
  // for (var i = 0; i < closeDrawerItems.length; i++) {
  //   closeDrawerItems[i].addEventListener('click', onClickCloseButton, false);
  // }
}

toggleDrawer();
