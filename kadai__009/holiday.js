//　配列を宣言
const holidays =["正月","成人の日","建国記念日","天皇誕生日","春分の日","昭和の日","憲法記念日","みどりの日","こどもの日","海の日","山の日","敬老の日","秋分の日","スポーツの日","文化の日","勤労感謝の日"]
console.log(holidays);

// for文を使ってリストの中身をすべて取り出す
for ( let i =0; i<= 15; i++){
  console.log(holidays[i]);
}

//while文を使ってリストの中身をすべて取り出す
let i=0;

while(i< holidays.length){
console.log(holidays[i]);
  i++;
}