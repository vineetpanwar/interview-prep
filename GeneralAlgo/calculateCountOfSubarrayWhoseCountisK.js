// We can use a hash map to keep track of the cumulative sums and their frequencies. This approach allows us to find the number of subarrays with a sum equal to 
// O(n) time.

// Steps:
// Prefix Sum: Calculate the prefix sum for each element in the array.
// Hash Map: Use a hash map to store the frequency of each prefix sum.
// Check Subarrays: For each prefix sum, check if there exists a prefix sum that, when subtracted from the current prefix sum, equals 
// 𝑘
// k. This is done using the hash map.

// Explanation with Example
// Prefix Sum: A prefix sum is the cumulative sum of elements from the start of the array to a particular index.
// Hash Map: We use a hash map to store the frequency of each prefix sum encountered.
// Array: [1, 2, 3, 4, 5], k: 5

// Initialize prefixSum = 0 and prefixSumCount with {0: 1} to handle subarrays starting from index 0.
// Traverse the array and update prefixSum.
// For each element, check if prefixSum - k exists in the hash map:
// If it exists, it means there is a subarray that sums to 
// 𝑘
// k.
// Increment the count by the frequency of prefixSum - k.
// Update the hash map with the current prefixSum.
// Walkthrough
// For the first element 1, prefixSum becomes 1.

// prefixSumCount is {0: 1, 1: 1}.
// No subarray sums to 5 yet.
// For the second element 2, prefixSum becomes 3.

// prefixSumCount is {0: 1, 1: 1, 3: 1}.
// No subarray sums to 5 yet.
// For the third element 3, prefixSum becomes 6.

// prefixSumCount is {0: 1, 1: 1, 3: 1, 6: 1}.
// Subarray [1, 2, 3] sums to 6 - 5 = 1 which exists in the map, so increment count.
// For the fourth element 4, prefixSum becomes 10.

// prefixSumCount is {0: 1, 1: 1, 3: 1, 6: 1, 10: 1}.
// No subarray sums to 5 yet.
// For the fifth element 5, prefixSum becomes 15.

// prefixSumCount is {0: 1, 1: 1, 3: 1, 6: 1, 10: 1, 15: 1}.
// Subarray [5] sums to 15 - 5 = 10 which exists in the map, so increment count.
// Result
// The function will return 2 because there are two subarrays that sum to 5: [2, 3] and [5].

function subarraySum(nums, k) {
    const prefixSumCount = new Map();
    prefixSumCount.set(0, 1); // To handle the case where a subarray's sum is exactly k
  
    let prefixSum = 0;
    let count = 0;
  
    for (let num of nums) {
      console.log('prefixSum before', prefixSum, num)
      prefixSum += num;
      console.log('prefixSum after', prefixSum)
  
      // Check if there is a prefix sum that, when removed from the current prefix sum, gives k
      if (prefixSumCount.has(prefixSum - k)) {
        console.log('updating count', count, prefixSumCount.get(prefixSum - k));
        count += prefixSumCount.get(prefixSum - k);
      }
      console.log('count', count)
  
      // Update the hash map with the current prefix sum
      if (prefixSumCount.has(prefixSum)) {
        console.log('increment the prefix Sum count', prefixSumCount.get(prefixSum) + 1)
        prefixSumCount.set(prefixSum, prefixSumCount.get(prefixSum) + 1);
      } else {
        console.log('set the prefix Sum count')
        prefixSumCount.set(prefixSum, 1);
      }
      console.log('prefixSumCount final state:')
      for (const [key, value] of prefixSumCount) {
      console.log(`${key}: ${value}`);
      }
    }
    
    
  
    return count;
  }
  
  // Example usage:
  const nums = [1, 2, 3, 4, 5];
  const k = 5;
  console.log(subarraySum(nums, k)); // Output: 2
  