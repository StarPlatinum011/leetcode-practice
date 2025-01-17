/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    let left = 0; 
    let right = nums.length-1;
    let res = nums[0];

    while(left<= right) {
        if(nums[left] < nums[right]) {
            res = Math.min(res, nums[left])
            break;
        }
        let mid = Math.floor((left+right)/2);
        res = Math.min(res, nums[mid]);

        if(nums[left] > nums[mid]) {
            right = mid-1;
        }else {
            left = mid+1;
        }

    }

    return res;


};