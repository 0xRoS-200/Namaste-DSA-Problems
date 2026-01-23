var check = function(nums) {
  let breaks = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > nums[(i + 1) % nums.length]) {
      breaks++;
      if (breaks > 1) return false;
    }
  }
  return true;
};

const nums = [3, 4, 5, 1, 2];
console.log(check(nums)); 
