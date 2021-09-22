// import jQuery from 'jquery';
// const $ = jQuery;
// import { bodyScrollPrevent } from './modules/bodyScrollPrevent';

// モーダル表示・非表示
export function toggleModal() {
  $(function () {
    'use strict';
    const modalArea = $('#js-modalArea');
    $('.js-openModal').on('click', function () {
      modalArea.fadeIn();
      $('#js-youtube').attr(
        'src',
        '//www.youtube.com/embed/' + $('.js-openModal').data('src') + '?rel=0'
      );
      // モーダルを開いたらbodyをスクロール不可
      // bodyScrollPrevent(true);
      // e.preventDefault();
    });
    $('#js-closeModal , #js-modalBg').on('click', function () {
      // youtubeの読み込みをやめる（モーダルが消えても再生し続けるのを防ぐ）
      modalArea.fadeOut();
      $('#js-youtube').attr('src', '');
      // modalArea.fadeOut(function () {
      //   // モーダルを閉じたらbodyのスクロール不可を解除
      //   // bodyScrollPrevent(false);
      // });
    });
    // bodyScrollPrevent();
  });
}
if (document.getElementById('js-topMovie') !== null) {
  toggleModal();
} else {
  document.getElementById('js-modalArea').remove();
}
