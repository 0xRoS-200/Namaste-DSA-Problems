//print this pattern
/* 
1
10
101
1010
10101
101010

n = 6
*/

let n = 6;

//outer loop
for (let i = 0; i < n; i++) {
  let store = "";
  for (let j = 0; j < i + 1; j++) {
    if (j % 2 == 0) {
      store += 1 + " ";
    } else {
      store += 0 + " ";
    }
  }
  console.log(store);
}
