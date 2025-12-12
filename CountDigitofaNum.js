function getCount(num) {
  // Fix 1: Handle empty strings specifically
  if (num === "") return 0;

  // Fix 2: Use Strict Equality for the zero check
  if (num === 0) return 1;

  if (isNaN(num)) return 0;

  num = Math.abs(num);

  let count = 0;
  let temp = num;

  while (temp != 0) {
    temp = Math.floor(temp / 10);
    count++;
  }
  return count;
}

let num = -2343;
let countedDig = getCount(num);
console.log(`Total number count is: ${countedDig}`);
