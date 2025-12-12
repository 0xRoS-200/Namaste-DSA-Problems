//print this pattern
/* 

    *
   **
  ***
 ****
*****  
*/

let n = 5;

//outer loop

for (let i = 1; i <= n; i++) {
  let store = "";
  //print spaces
  for (let j = 1; j <= n-i; j++) {
    store += " ";
  }
  for (let k = 0; k < i; k++) {
    store += "*";
  }
  console.log(store);
}
