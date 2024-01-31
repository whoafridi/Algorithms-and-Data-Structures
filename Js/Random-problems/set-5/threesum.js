// brute force
function threeSum(nums, target) {
  let result = [];
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        if (nums[i] + nums[j] + nums[k] === target) {
          result.push([nums[i], nums[j], nums[k]]);
        }
      }
    }
  }
  return result;
}

// hash map
function threeSum(nums, target) {
  let result = [];
  const hash = {};
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      const complement = target - (nums[i] + nums[j]);
      if (complement in hash) {
        result.push([nums[i], nums[j], complement]);
      } else {
        hash[nums[j]] = true;
      }
    }
  }

  return result;
}
