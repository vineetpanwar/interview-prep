function uncompress(s) {
    const stack = [];
    let currentStr = '';
    let repeatCount = 0;

    for (let i = 0; i < s.length; i++) {
        const char = s[i];

        if (/\d/.test(char)) {
            // Build the full number in case it's more than one digit
            repeatCount = repeatCount * 10 + Number(char);
        } else if (char === '(') {
            // Push the current string and repeat count onto the stack
            stack.push([currentStr, repeatCount]);
            currentStr = '';
            repeatCount = 0;
        } else if (char === ')') {
            // Pop the stack and repeat the current string
            const [prevStr, count] = stack.pop();
            currentStr = prevStr + currentStr.repeat(count);
        } else {
            // Accumulate characters in the current string
            currentStr += char;
        }
    }

    return currentStr;
}

console.log(uncompress('3(ab)')); // Output: 'ababab'
console.log(uncompress('3(ab2(c))')); // Output: 'abccabccabcc'