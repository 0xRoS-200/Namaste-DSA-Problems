function removeElement(nums, ele)
{
    let p1 = 0, p2;
    for(p2 = 0; p2 < nums.length; p2++)
    {
        if(nums[p2] !==  ele)
        {
            nums[p1] = nums[p2];
            p1++;
        }
    }
    return p1;
}

const nums = [0,1,2,2,3,0,4,2];
const ele = 2;
let uniqueEleCount = removeElement(nums, ele);
console.log(nums);
console.log(uniqueEleCount);

