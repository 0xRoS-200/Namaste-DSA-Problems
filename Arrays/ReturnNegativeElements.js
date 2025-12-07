//Write a function that returns the number of the negative numbers in an array

function negativeNumCount(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      count++;
    }
  }
  return count;
}
let arr = [-1, 5, 7, -3, 44, 21, 0, -4, -23, -34, -56];
let result = negativeNumCount(arr);
console.log(`Total Negative Numbers in Array is ${result}`);
