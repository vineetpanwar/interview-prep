// function mergeSort(arr, comparator) {
//     if (arr.length <= 1) {
//         return arr;
//     }

//     const mid = Math.floor(arr.length / 2);
//     const left = mergeSort(arr.slice(0, mid), comparator);
//     const right = mergeSort(arr.slice(mid), comparator);

//     return merge(left, right, comparator);
// }

// function merge(left, right, comparator) {
//     let result = [];
//     let l = 0;
//     let r = 0;

//     while (l < left.length && r < right.length) {
//         if (comparator(left[l], right[r]) <= 0) {
//             result.push(left[l]);
//             l++;
//         } else {
//             result.push(right[r]);
//             r++;
//         }
//     }

//     return result.concat(left.slice(l)).concat(right.slice(r));
// }

// console.log(mergeSort([3,2,9,5,4,8,0,1], (a,b) => a-b))


function mergeSort(arr) {
    if (arr.length <= 1) {
      return arr; // Base case: return the array if it has 1 or no elements
    }
  
    // Split the array into two halves
    const mid = Math.floor(arr.length / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);
  
    // Recursively sort each half
    return merge(mergeSort(left), mergeSort(right));
  }
  
  // Merge function to merge two sorted arrays
  function merge(left, right) {
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;
  
    // Compare elements of left and right arrays and merge them in sorted order
    while (leftIndex < left.length && rightIndex < right.length) {
      if (left[leftIndex].localeCompare(right[rightIndex]) <= 0) {
        result.push(left[leftIndex]);
        leftIndex++; // Move to the next element in the left array
      } else {
        result.push(right[rightIndex]);
        rightIndex++; // Move to the next element in the right array
      }
    }
  
    // Concatenate any remaining elements
    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
  }
  
  // Example usage:
  const stringsArray = ["banana", "apple", "cherry", "date"];
  const sortedArray = mergeSort(stringsArray);
  console.log(sortedArray);