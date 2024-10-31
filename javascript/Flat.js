const flat = (array, depth = 1) => {
    if (!array || !Array.isArray(array)) {
        return array;
    }

    const outputArray = [];
    
    array.forEach(curr => {
        if (Array.isArray(curr)) {
            if (depth > 0) {
                outputArray.push(...flat(curr, depth - 1));
            } else {
                outputArray.push(curr);
            }
        } else {
            outputArray.push(curr);
        }
    });
    
    return outputArray;
}

// function flat(arr, depth = 1) {
//     const result = [];
//     const stack = arr.map(item => ({ item, depth })); // Initialize the stack
  
//     while (stack.length > 0) {
//       const current = stack.pop(); // Get the top element from the stack
  
//       if (current === undefined) {
//         continue; // Skip undefined values or empty slots
//       }
  
//       const { item, depth: currentDepth } = current;
  
//       if (Array.isArray(item) && currentDepth > 0) {
//         // If it's an array and we can still flatten it, push its elements to the stack
//         stack.push(...item.map(subItem => ({ item: subItem, depth: currentDepth - 1 })));
//       } else {
//         // Otherwise, add the item to the result, including undefined but ignoring "holes"
//         result.push(item);
//       }
//     }
  
//     return result.reverse(); // We reverse because we are using a stack (LIFO)
//   }

const arr1 = [0, 1, 2, [3, 4]];
console.log(flat(arr1))
// console.log(arr1.flat());
// // expected output: Array [0, 1, 2, 3, 4]

const arr2 = [0, 1, [2, [3, [4, 5]]]];

console.log(flat(arr2, 2));
// expected output: Array [0, 1, 2, Array [3, Array [4, 5]]]

// console.log(arr2.flat(1));
// // expected output: Array [0, 1, 2, 3, Array [4, 5]]

// console.log(arr2.flat(Infinity));
// // expected output: Array [0, 1, 2, 3, 4, 5]