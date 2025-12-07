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
let arr = [1, 4, 7, 2, 4, 6, 8, 2, 1, 3, 5, 6];
let result = returnLargestElement(arr);
console.log(`Largest Element is ${result}`);
