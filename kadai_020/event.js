// textというidを持つHTML要素を取得し定数に代入する
const text= document.getElementById('text');
// btnというidを持つHTML要素を取得し定数に代入する
const btn= document.getElementById('btn');

// HTML要素がクリックされたときにイベント処理を実行する
btn.addEventListener('click',() =>{
  text.textContent='ボタンをクリックしました！';
});
