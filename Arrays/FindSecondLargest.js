//Find second largest number in an Array
function findSecondLargest(arr) {
  let temp, first=0, second = 0;
  for (let i = 0; i < arr.length; i++) {
    if (i <= arr.length) {
        temp = arr[i];
        if(temp > first) {
            second = first;
            first = temp;
        } else if (temp > second && temp < first) {
            second = temp;
        }
    }
  }
  return second;
}
let arr = [1, 4, 5, 6, 8, 10, 3, 2];
let result = findSecondLargest(arr);
console.log(`Second Largest Element is ${result}`);
