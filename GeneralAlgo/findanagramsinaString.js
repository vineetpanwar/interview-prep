function findAnagrams(s, p) {
    const result = [];
    const pCount = new Array(26).fill(0);
    const sCount = new Array(26).fill(0);
    const aCharCode = 'a'.charCodeAt(0);

    // Fill the frequency counter for string p
    for (let char of p) {
        pCount[char.charCodeAt(0) - aCharCode]++;
    }

    // Sliding window over string s
    for (let i = 0; i < s.length; i++) {
        // Add the current character to the window's counter
        sCount[s[i].charCodeAt(0) - aCharCode]++;
        
        // Remove the character left behind the window
        if (i >= p.length) {
            sCount[s[i - p.length].charCodeAt(0) - aCharCode]--;
        }

        // Compare the frequency arrays
        if (arraysEqual(pCount, sCount)) {
            result.push(i - p.length + 1);
        }
    }

    return result;
}

// Helper function to compare two arrays
function arraysEqual(arr1, arr2) {
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            return false;
        }
    }
    return true;
}

// Example usage
const s = "cbaebabacd";
const p = "abc";
console.log(findAnagrams(s, p));  // Output: [0, 6]
