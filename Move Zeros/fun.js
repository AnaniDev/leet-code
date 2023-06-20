function moveZeroes(nums) {
    let counter = 0;
    for(let i=0; i<nums.length; i++) {
        if(nums[i] === 0) {counter++;}
        else {
        [nums[i-counter], nums[i]] = [nums[i], nums[i-counter]]
        }
    }
};

nums1 = [0,1,0,3,12];
nums2 = [0];
moveZeroes(nums1);
moveZeroes(nums2);
