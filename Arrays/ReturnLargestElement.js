//Write a function that would return the largest element in an array
function returnLargestElement(arr) {
  let largestNum = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largestNum) {
      largestNum = arr[i];
    }
  }
  return largestNum;
}
let arr = [-9, -19, -3];
let result = returnLargestElement(arr);
console.log(`Largest Element is ${result}`);
