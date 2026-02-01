var search = function (nums, target) {
  let left = 0,
    right = nums.length - 1,
    mid;

  while (left <= right) {
    mid = Math.floor((left + right) / 2);

    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1;
};

const nums = [-1, 0, 3, 5, 9, 12],
  target = 9;
console.log(search(nums, target));
