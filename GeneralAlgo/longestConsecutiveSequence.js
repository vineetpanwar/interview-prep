

function findMaxLengthOfConsecutivePermutation(arr) {
    if (arr.length === 0) return 0;
  
    const numSet = new Set(arr);
    let maxLength = 0;
  
    for (let num of arr) {
      // Check if the current number is the start of a sequence
      if (!numSet.has(num - 1)) {
        let currentNum = num;
        let currentLength = 1;
  
        // Count the length of the consecutive sequence
        while (numSet.has(currentNum + 1)) {
          currentNum++;
          currentLength++;
        }
  
        // Update the maximum length found
        maxLength = Math.max(maxLength, currentLength);
      }
    }
  
    return maxLength;
  }
  
  // Example usage:
  const arr = [3, 5, 8, 9, 1, 2, 4, 100, 45];
  console.log(findMaxLengthOfConsecutivePermutation(arr)); // Output: 5 (sequence is [1, 2, 3, 4, 5])
  