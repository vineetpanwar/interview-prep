function largestNumber(nums) {
    nums.sort((a, b) => {
        const strA = a.toString();
        const strB = b.toString();
        return (strB + strA).localeCompare(strA + strB);
    });

    const result = nums.join('');
    return result[0] === '0' ? '0' : result;
}

// Example usage
const nums = [3, 30, 34, 5, 9];
console.log(largestNumber(nums));  // Output: "9534330"
