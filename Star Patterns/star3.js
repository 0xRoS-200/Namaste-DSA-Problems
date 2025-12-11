//print this pattern
/* 
1 
1 2 
1 2 3 
1 2 3 4 
n = 4
*/

let n = 4;
for (let i = 0; i < n; i++) {
  let store = "";
  for (let j = 1; j <= i + 1; j++) {
    store += j + " ";
  }
  console.log(store);
}
