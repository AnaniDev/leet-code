/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
function rotate(nums, k) {
    if(k>=0 && k<=100000){
    let t = k % nums.length;
    nums.unshift(...nums.splice(-t));
    console.log(t,nums.unshift(...nums.splice(-t)))
    }
    return nums;
};

nums1 = [1,2,3,4,5,6,7];
k1 = 3;
nums2 = [-1,-100,3,99];
k2 = 2;


rotate(nums1,k1);
// rotate(nums2,k2);
