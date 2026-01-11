// var moveZeroes = function (nums) {
//   let temp;
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = 0; j < nums.length - i - 1; j++) {
//       if (nums[j] <= nums[j + 1] && nums[j] == 0) {
//         temp = nums[j];
//         nums[j] = nums[j + 1];
//         nums[j + 1] = temp;
//       }
//     }
//   }
// };  //failed test case for negative numbers as I thought (bubble sort approach)
var moveZeroes = function (nums) {
    let p1 = 0, p2, temp;
    for(p2 = 0; p2 < nums.length; p2++)
    {
        if(nums[p2] != 0)
        {
            temp = nums[p1];
            nums[p1] = nums[p2];
            nums[p2] = temp;
            p1++;
        }
    }
}

let arr = [0, 1, 0, 3, 12];
moveZeroes(arr);
console.log(arr);
