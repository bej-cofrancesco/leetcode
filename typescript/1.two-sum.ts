function twoSum(nums: number[], target: number): number[] {
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    const remainder = target - nums[i];
    if (map.has(nums[i])) {
      return [map.get(nums[i]), i];
    }

    map.set(remainder, i);
  }
}

// TEST CASES
console.log(twoSum([2, 7, 11, 15], 9));

console.log(twoSum([3, 2, 4], 6));

console.log(twoSum([3, 3], 6));
