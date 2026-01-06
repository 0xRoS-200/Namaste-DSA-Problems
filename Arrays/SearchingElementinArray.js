//Write a function that searches for an element in an array and returns the index, if the element is not present then just return -1.
function findElement(arr, element) {
  const Hashmap = new Map();

  for (let i = 0; i < arr.length; i++) {
    if (!Hashmap.has(arr[i])) {
      Hashmap.set(arr[i], i);
    }
  }
  console.log(Hashmap) // check how hash map looks like Key-value pairs
  if (Hashmap.has(element)) {
    return Hashmap.get(element);
  } else {
    return -1;
  }
}

let arr = [1, 5, 7, 3, 5, 9];
let element = 9;

let result = findElement(arr, element);

if (result == -1) {
  console.log("Element not found");
} else {
  console.log(`Element ${element} is found at index ${result}`);
}
