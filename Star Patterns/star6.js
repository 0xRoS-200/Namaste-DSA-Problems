//print this pattern
/*
     *
    ***
   *****
  *******
 *********
 */

let n = 5;

for (let i = 1; i <= n; i++) {
  let store = "";
  
  // 1. Print spaces (n - i)
  // For i=1, spaces=4. For i=5, spaces=0.
  for (let j = 1; j <= n - i; j++) {
    store += " ";
  }
  
  // 2. Print stars (2 * i - 1)
  // For i=1, stars=1. For i=2, stars=3.
  for (let k = 1; k <= 2 * i - 1; k++) {
    store += "*";
  }
  
  console.log(store);
}