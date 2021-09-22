// トップへ戻るスクロール
export function scrollTop() {
  $('#js-scrollTop').on('click', function () {
    $('body,html').animate(
      {
        scrollTop: 0,
      },
      800
    );
    return false;
  });
}
scrollTop();
