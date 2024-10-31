// Creating the HashMap:

// We use a stack to keep track of the elements for which we need to find the next greater element.
// As we iterate through arr2, we pop elements from the stack if they are smaller than the current element. This means the current element is the next greater element for those popped elements.
// We store these relationships in the nextGreaterMap.
// Finding the Next Greater Element for arr1:

// For each element in arr1, we use the hashmap to find its next greater element in arr2.
// If an element does not have a next greater element in arr2, we return -1.


function nextGreaterElement(arr1, arr2) {
    // Step 1: Create a hashmap to store the next greatest element for each element in arr2
    const nextGreaterMap = new Map();
    const stack = [];
  
    for (let num of arr2) {
      while (stack.length && stack[stack.length - 1] < num) {
        nextGreaterMap.set(stack.pop(), num);
      }
      stack.push(num);
    }
    console.log('vineet stack', stack)
    for (const [key, value] of nextGreaterMap) {
      console.log(`${key}: ${value}`);
    }
    
  
    // Step 2: Iterate through arr1 and find the next greatest element in arr2 using the hashmap
    const result = arr1.map(num => nextGreaterMap.get(num) || -1);
  
    return result;
  }
  
  // Example usage:
  const arr1 = [10, 6, 8, 2, 9, 4];
  const arr2 = [6, 1, 7, 27, 2, 4, 15, 98];
  console.log(nextGreaterElement(arr1, arr2)); // Output: [-1, 7, -1, 4, -1, 15]
  