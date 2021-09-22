## my-ejs-gulp-webpack

## 環境
* node v12.16.1
* npm v6.13.4
***
### ejsについて
webpackでejsを使うのは難しそうだったので、gulpと併用しています。
***
### gulpについて
主な処理内容
* ejsのコンパイル
* scssのコンパイル
* jsの圧縮
* 画像の圧縮
* ファイル監視、リロード
***
### webpackについて
主な処理内容
* jsファイルのバンドル→main.js
* jQuery,GSAP,swiperなど外部の共通モジュールのバンドル→vendors.js
