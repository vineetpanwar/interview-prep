function getUniquePermutations(str) {
    const results = [];
    const sortedStr = str.split('').sort().join('');  // Sort the string to handle duplicates

    function permute(remaining, chosen = "") {
        if (remaining.length === 0) {
            results.push(chosen);
            return;
        }

        for (let i = 0; i < remaining.length; i++) {
            // Skip duplicate characters
            if (i > 0 && remaining[i] === remaining[i - 1]) continue;

            const char = remaining[i];
            permute(remaining.slice(0, i) + remaining.slice(i + 1), chosen + char);
        }
    }

    permute(sortedStr);
    return results;
}

// Example usage:
console.log(getUniquePermutations("aab"));  // Output: ['aab', 'aba', 'baa']