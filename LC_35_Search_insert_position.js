var searchInsert = function (nums, target) {
  let low = 0,
    high = nums.length - 1,
    mid;
  while (low <= high) {
    mid = Math.floor((low + high) / 2);
    if (target === nums[mid]) {
      return mid;
    } else if (target > nums[mid]) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return low;
};

const nums = [1, 3, 5, 6],
  target = 2;
console.log(searchInsert(nums, target));
