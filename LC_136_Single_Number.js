// var singleNumber = function(nums) {
//     const Hashmap = new Map();

//     for (let i = 0; i < nums.length; i++) {
//         if (!Hashmap.has(nums[i])) {
//             Hashmap.set(nums[i], 1);
//         } else {
//             Hashmap.set(nums[i], Hashmap.get(nums[i]) + 1);
//         }
//     }
//     for (let i = 0; i < nums.length; i++) {
//         if (Hashmap.get(nums[i]) === 1) {
//             return nums[i];
//         }
//     }
// }; //using hashmaps

function singleNumber(nums) {
    let xor = 0;
    for (let i = 0; i < nums.length; i++) {
        xor ^= nums[i];
    }
    return xor;
}    //binary operation

let arr = [1, 1, 3, 5, 3, 5, 4];

console.log(singleNumber(arr));