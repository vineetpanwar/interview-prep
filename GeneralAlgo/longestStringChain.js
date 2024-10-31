function longestStrChain(words) {
    // Sort the words by their lengths
    words.sort((a, b) => a.length - b.length);
    
    // Initialize a map to store the longest chain lengths ending at each word
    const dp = new Map();
    
    let maxLength = 1;
    
    for (const word of words) {
        let currentLength = 1;
        
        // Generate all possible predecessors by removing one character at a time
        for (let i = 0; i < word.length; i++) {
            const predecessor = word.slice(0, i) + word.slice(i + 1);
            if (dp.has(predecessor)) {
                currentLength = Math.max(currentLength, dp.get(predecessor) + 1);
            }
        }
        
        dp.set(word, currentLength);
        maxLength = Math.max(maxLength, currentLength);
    }
    
    return maxLength;
}

// Example usage
const words1 = ["a","b","ba","bca","bda","bdca"];
console.log(longestStrChain(words1)); // Output: 4

const words2 = ["xbc","pcxbcf","xb","cxbc","pcxbc"];
console.log(longestStrChain(words2)); // Output: 5

const words3 = ["abcd","dbqca"];
console.log(longestStrChain(words3)); // Output: 1
