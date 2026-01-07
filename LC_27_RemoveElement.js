var removeElement = function (nums, val) {
  let p1, p2;
  p1 = 0;
  for (p2 = 0; p2 < nums.length; p2++) {
    if (nums[p2] !== val) {
      nums[p1] = nums[p2];
      p1++;
    }
  }
  return p1;
};

const arr = [13, 5, 6, 10, 6, 8, 5, 3];
const ele = 6;
const storeCount = removeElement(arr, ele);
console.log(storeCount);
