var searchRange = function (nums, target) {
  const result = [-1, -1];

  let low = 0;
  let high = nums.length - 1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    if (nums[mid] === target) {
      result[0] = mid;
      high = mid - 1; 
    } else if (target > nums[mid]) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  if (result[0] === -1) {
    return result;
  }

  low = 0; 
  high = nums.length - 1; 

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    if (nums[mid] === target) {
      result[1] = mid;
      low = mid + 1;  
    } else if (target > nums[mid]) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return result;
};

const nums = [5, 7, 7, 8, 8, 8, 10],
  target = 8;
console.log(searchRange(nums, target));
