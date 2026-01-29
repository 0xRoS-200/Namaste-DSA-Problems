var rearrangeArray = function (nums) {
  let parr = [],
    narr = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) {
      parr.push(nums[i]);
    } else {
      narr.push(nums[i]);
    }
  }

  let p = 0,
    n = 0;

  for (let j = 0; j < nums.length; j++) {
    if (j % 2 == 0) {
      nums[j] = parr[p];
      p++;
    } else {
      nums[j] = narr[n];
      n++;
    }
  }
  return nums;
};

const nums = [3, 1, -2, -5, 2, -4];
rearrangeArray(nums);
console.log(nums);
