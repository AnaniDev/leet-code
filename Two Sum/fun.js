
function twoSum(nums, target) {
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (map.has(complement)) {
            console.log([map.get(complement), i])
            return [map.get(complement), i];
        }
        map.set(nums[i], i);
    }
    return null;
}

const nums = [2,7,11,15], target = 9;
twoSum(nums,target);
const nums2 = [3,2,4], target2 = 6;
twoSum(nums2,target2);
const nums3 = [3,3], target3 = 6;
twoSum(nums3,target3);
