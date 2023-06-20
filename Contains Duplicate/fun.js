function containsDuplicate(nums) {
    const map = new Set(nums); 
    return map.size !== nums.length;
};

nums1 = [1,2,3,1]
nums2 = [1,2,3,4]
nums3 = [1,1,1,3,3,4,3,2,4,2]

containsDuplicate(nums1);
containsDuplicate(nums2);
containsDuplicate(nums3);