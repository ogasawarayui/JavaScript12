/* Q1 関数宣言を行い、実行された時にアラート表示させるよう処理を作ってください。*/
function showAlert() {
  alert("アラート")
}
showAlert();
/* Q2 関数式内で計算した結果を返し、それを外部から実行してコンソールで表示させてください。*/
var getText = function () {
  var text = "getTextが実行されたのでこのテキストを返します。";
  return text;
};
var returnText = getText();
console.log(returnText);
/* Q3 スコープついて調べて自分なりの言葉でまとめてください。
変数の名前や関数などの参照できる範囲を決めるもの。*/