function checkSubarraySum(nums, k) {
    // Step 1: Initialize the hash map with {0: -1}
    const prefixSumMap = new Map();
    prefixSumMap.set(0, -1); // This handles subarrays starting from index 0
  
    let prefixSum = 0;
  
    for (let i = 0; i < nums.length; i++) {
      // Step 2: Update the prefix sum
      prefixSum += nums[i];
  
      // Step 3: Compute the modulo k of the current prefix sum
      let mod = prefixSum % k;
  
      // Handle negative modulo results
      if (mod < 0) {
        mod += k;
      }
  
      // Step 4: Check if the modulo value is already in the map
      if (prefixSumMap.has(mod)) {
        // If it exists, check if the subarray length is greater than 1
        if (i - prefixSumMap.get(mod) > 1) {
          return true; // Found a valid subarray
        }
      } else {
        // Step 5: If not, store the current index in the map for the current modulo value
        prefixSumMap.set(mod, i);
      }
    }
  
    // Step 6: If no such subarray is found, return false
    return false;
  }
  
  // Example usage:
  const nums = [6, 8, 2, 4, 9];
  const k = 8;
  console.log(checkSubarraySum(nums, k)); // Output: true
  