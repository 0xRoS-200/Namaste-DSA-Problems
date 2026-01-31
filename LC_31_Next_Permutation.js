var nextPermutation = function(nums) {
    let n = nums.length;
    let i = n - 2;

    // 1. find pivot
    while (i >= 0 && nums[i] >= nums[i + 1]) {
        i--;
    }

    // 2. if pivot exists, find just larger element and swap
    if (i >= 0) {
        let j = n - 1;
        while (nums[j] <= nums[i]) {
            j--;
        }
        [nums[i], nums[j]] = [nums[j], nums[i]];
    }

    // 3. reverse suffix
    let l = i + 1, r = n - 1;
    while (l < r) {
        [nums[l], nums[r]] = [nums[r], nums[l]];
        l++;
        r--;
    }
};

const nums = [1, 3, 5, 4, 2];
nextPermutation(nums);
console.log(nums);