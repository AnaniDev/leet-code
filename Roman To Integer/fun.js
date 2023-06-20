chars = {
    "I": 1,
    "V": 5,
    "X": 10,
    "L": 50,
    "C": 100,
    "D": 500,
    "M": 1000
};

var romanToInt = function(s) {
    value = 0;
    for(let i = 0; i < s.length; i++){
        chars[s[i]] < chars[s[i+1]] ? value -= chars[s[i]]: value += chars[s[i]]
    }
    return value
};  
nums1 = [-2,1,-3,4,-1,2,1,-5,4];
nums2 = [1];
nums3 = [5,4,-1,7,8];

// maxSubArray(nums1);
// maxSubArray(nums2);
maxSubArray(nums3);