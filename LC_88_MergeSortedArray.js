// var merge = function (nums1, m, nums2, n) {
//   let p1 = 0;
//   let p2 = 0;
//   let traverse = 0;

//   let nums1cpy = [...nums1];

//   while (traverse < m + n) {
//     if (p2 >= n) {
//       nums1[traverse] = nums1cpy[p1];
//       p1++;
//     } else if (p1 >= m) {
//       nums1[traverse] = nums2[p2];
//       p2++;
//     } else if (nums1cpy[p1] <= nums2[p2]) {
//       nums1[traverse] = nums1cpy[p1];
//       p1++;
//     } else {
//       nums1[traverse] = nums2[p2];
//       p2++;
//     }

//     traverse++;
//   }
// };  // Approach Not optimal since it uses extra space

var merge = function (nums1, m, nums2, n) {
  let p1 = m - 1;
  let p2 = n - 1;
  for (let i = m + n - 1; i >= 0; i--) {
    if (p2 < 0) {
      break;
    } else if (p1 < 0) {
      nums1[i] = nums2[p2];
      p2--;
    } else if (nums1[p1] >= nums2[p2]) {
      nums1[i] = nums1[p1];
      p1--;
    } else {
      nums1[i] = nums2[p2];
      p2--;
    }
  }
};

let nums1 = [1, 2, 3, 0, 0, 0],
  m = 3,
  nums2 = [2, 5, 6],
  n = 3;

merge(nums1, m, nums2, n);
console.log(nums1);
