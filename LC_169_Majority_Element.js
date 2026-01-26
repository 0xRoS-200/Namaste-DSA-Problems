console.time("funcstart")
// var majorityElement = function(nums) {
//     const Hashmap = new Map()
//     for (let i = 0; i < nums.length; i++) {
//         if (!Hashmap.has(nums[i])) {
//             Hashmap.set(nums[i], 1);
//         } else {
//             Hashmap.set(nums[i], Hashmap.get(nums[i]) + 1);
//         }
//     } 
//     for (let i = 0; i < nums.length; i++) {
//         if (Hashmap.get(nums[i]) >= (nums.length /2)) {
//             return nums[i];
//         }
//     }
// };

var majorityElement = function(nums) {
    let candidate = null;
    let count = 0;

    for (let num of nums) {
        if (count === 0) {
            candidate = num;
        }

        count += (num === candidate) ? 1 : -1;
    }

    return candidate;
};

console.timeEnd("funcstart")

let nums = [2,2,1,1,1,2,2];
let result = majorityElement(nums);
console.log(result);