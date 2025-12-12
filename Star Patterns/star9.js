//print this pattern
/* 
1
01
010
1010
10101

*/
let n = 5;
let toggle = 1;
//outer loop
for (let i = 0; i < n; i++) {
  let store = "";

  for (let j = 0; j < i + 1; j++) {
    store += toggle + " ";
    if (toggle == 1) {
      toggle = 0;
    } else {
      toggle = 1;
    }
  }
  console.log(store);
}
