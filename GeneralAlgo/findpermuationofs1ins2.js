// To find if any permutation of a given string s1 is present in another string s2, we can use a sliding window approach combined with character frequency counting. Here's how you can implement this in JavaScript:

// Step-by-Step Explanation
// Character Frequency Counting: First, we need to count the frequency of each character in the string s1.
// Sliding Window: We then slide a window of the same length as s1 over s2 and check if the character frequencies in the window match those in s1.
// Window Adjustment: Adjust the window by including the next character and excluding the first character of the previous window, updating the character frequencies accordingly.
// Implementation
// Here’s the code to find if any permutation of s1 is present in s2:

// javascript
// Copy code
// function checkInclusion(s1, s2) {
//   const s1Length = s1.length;
//   const s2Length = s2.length;

//   if (s1Length > s2Length) return false;

//   const s1Count = new Array(26).fill(0);
//   const s2Count = new Array(26).fill(0);

//   // Count frequencies of characters in s1
//   for (let i = 0; i < s1Length; i++) {
//     s1Count[s1.charCodeAt(i) - 'a'.charCodeAt(0)]++;
//     s2Count[s2.charCodeAt(i) - 'a'.charCodeAt(0)]++;
//   }

//   // Helper function to compare two frequency arrays
//   function matches(s1Count, s2Count) {
//     for (let i = 0; i < 26; i++) {
//       if (s1Count[i] !== s2Count[i]) return false;
//     }
//     return true;
//   }

//   // Slide the window over s2
//   for (let i = s1Length; i < s2Length; i++) {
//     if (matches(s1Count, s2Count)) return true;
//     // Include the next character in the window
//     s2Count[s2.charCodeAt(i) - 'a'.charCodeAt(0)]++;
//     // Exclude the first character of the previous window
//     s2Count[s2.charCodeAt(i - s1Length) - 'a'.charCodeAt(0)]--;
//   }

//   // Check the last window
//   return matches(s1Count, s2Count);
// }

// // Example usage:
// const s1 = "ab";
// const s2 = "eidbaooo";
// console.log(checkInclusion(s1, s2)); // Output: true
// Explanation
// Initial Setup: We create frequency arrays s1Count and s2Count to store the character counts for s1 and the initial window of s2 of the same length as s1.
// Frequency Counting: We populate the frequency arrays for the characters in s1 and the initial window of s2.
// Sliding Window: We slide the window across s2, updating the frequency array for s2 by including the next character and excluding the previous one.
// Match Check: After each update, we check if the frequency arrays match. If they do, it means we have found a permutation of s1 in s2.
// Final Check: We perform a final check for the last window after exiting the loop.
// Conclusion
// This approach ensures that we efficiently find any permutation of s1 in s2 by using the sliding window technique with character frequency counting, resulting in an optimal solution with a time complexity of O(n).

function checkInclusion(s1, s2) {
    const s1Length = s1.length;
    const s2Length = s2.length;
  
    if (s1Length > s2Length) return false;
  
    const s1Count = new Array(26).fill(0);
    const s2Count = new Array(26).fill(0);
  
    // Count frequencies of characters in s1
    for (let i = 0; i < s1Length; i++) {
      s1Count[s1.charCodeAt(i) - 'a'.charCodeAt(0)]++;
      s2Count[s2.charCodeAt(i) - 'a'.charCodeAt(0)]++;
    }
  
    // Helper function to compare two frequency arrays
    function matches(s1Count, s2Count) {
      for (let i = 0; i < 26; i++) {
        if (s1Count[i] !== s2Count[i]) return false;
      }
      return true;
    }
  
    // Slide the window over s2
    for (let i = s1Length; i < s2Length; i++) {
      if (matches(s1Count, s2Count)) return true;
      // Include the next character in the window
      s2Count[s2.charCodeAt(i) - 'a'.charCodeAt(0)]++;
      // Exclude the first character of the previous window
      s2Count[s2.charCodeAt(i - s1Length) - 'a'.charCodeAt(0)]--;
    }
  
    // Check the last window
    return matches(s1Count, s2Count);
  }
  
  // Example usage:
  const s1 = "ab";
  const s2 = "eidbaooo";
  console.log(checkInclusion(s1, s2)); // Output: true
  