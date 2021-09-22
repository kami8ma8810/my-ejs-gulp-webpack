var option = {
	root: null, //nullでブラウザ画面を対象にする
	rootMargin: "0% 0% -20% 0%", //画面の下から-20%の位置をターゲットと交差する位置に指定
	threshold: 0.2, //指定した要素が画面に20%入るとコールバッイベント発生
};

// 交差した際の処理を記載
var callback = function (entries) {

	entries.forEach(function (entry) {

		if (entry.intersectionRatio > 0.2) { //交差する位置が20%を超えたら発火

			var targets = entry.target.getElementsByClassName("demo__block"); //クラス名demo__blockのHTML要素を取得
			var targetsArray = Array.prototype.slice.call(targets, 0); //配列に変換

			targetsArray.forEach(function (item) { //配列化したものを１つ１つ処理していく
				var targetClassList = item.classList; //demo__blockと一緒に指定されているクラス名を取得

				if (targetClassList.contains('is-fade_in_side') == true) { //クラス名is-fade_in_sideがあれば…
					targetClassList.add("is-fade_in_side--done"); //クラス名is-fade_in_side--doneを付与する
				} else if (targetClassList.contains('is-fade_in_updown') == true) { //クラス名is-fade_in_updownがあれば…
					targetClassList.add("is-fade_in_updown--done"); //クラス名is-fade_in_updown--doneを付与する
				} else if (targetClassList.contains('is-fade_in_zoom') == true) { //クラス名is-fade_in_zoomがあれば…
					targetClassList.add("is-fade_in_zoom--done"); //クラス名is-fade_in_zoom--doneを付与する
				}
			});
			observeres.unobserve(entry.target); //ターゲットの監視を終了
		}
	});
};
var observeres = new IntersectionObserver(callback, option); //引数callback、optionを持ったobserverインスタンスを作成

var trigger = document.getElementsByClassName("js-trigger"); //ターゲットとなるクラス名js-triggerをすべて格納

for (let i = 0; i < trigger.length; i++) {
	observeres.observe(trigger[i]); //ターゲットごとに監視を開始する
}