
// The balance becomes negative when there are more closing brackets } than opening brackets { at any point in the string. This imbalance indicates that a swap is necessary to balance the brackets up to that point.

//     When the balance is negative, it signifies that a closing bracket } is encountered without a matching opening bracket { before it. To balance this, we can think of a swap operation that would ideally place an opening bracket { at the position of the encountered }. In reality, this means we have encountered an imbalance that needs to be corrected, and this correction is equivalent to a swap operation.

function minSwapsToBalanceBrackets(s) {
    let balance = 0; // Current balance of brackets
    let swaps = 0;   // Number of swaps needed
  
    for (let i = 0; i < s.length; i++) {
      if (s[i] === '{') {
        balance++; // Increase balance for opening bracket
      } else {
        balance--; // Decrease balance for closing bracket
      }
  
      // If balance is negative, we have more closing brackets than opening
      if (balance < 0) {
        swaps++;   // Increment swap counter
        balance = 1; // Reset balance as if we balanced the closing bracket
      }
    }
  
    return swaps;
  }
  
  // Example usage:
  const s = "}{}{{";
  console.log(minSwapsToBalanceBrackets(s)); // Output: 1s