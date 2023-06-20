
function maxSubArray(nums) {
    let maxSum = nums[0];
    for (let i = 1; i < nums.length; i++) {
        nums[i] = Math.max(0, nums[i - 1]) + nums[i];
        if (nums[i] > maxSum){
            maxSum = nums[i];
        }
    }
    return maxSum;  
};
nums1 = [-2,1,-3,4,-1,2,1,-5,4];
nums2 = [1];
nums3 = [5,4,-1,7,8];

// maxSubArray(nums1);
// maxSubArray(nums2);
maxSubArray(nums3);