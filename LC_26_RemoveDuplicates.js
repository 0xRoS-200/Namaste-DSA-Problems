//Leetcode Problem 26: Remove Element from a Sorted Array
var removeDuplicates = function (nums) {
  if (nums.length === 0) return 0;
  let p1,
    p2,
    uniquecount = 1;
  p1 = 0;
  for (p2 = 1; p2 <= nums.length - 1; p2++) {
    if (nums[p1] !== nums[p2]) {
      p1++;
      nums[p1] = nums[p2];
      uniquecount++;
    }
  }
  return uniquecount;
};

let arr = [0, 0, 0, 1, 1, 2, 3, 3, 3, 3];
let uniqueEle = removeDuplicates(arr);
console.log(uniqueEle);
