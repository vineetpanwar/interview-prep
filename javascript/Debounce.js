function debounce(func, delay) {
    let timer = null;
  
    return function (...args) {
      // Clear the previous timer if a call is made before the delay finishes
      clearTimeout(timer);
  
      // Set a new timer to call the function after the specified delay
      timer = setTimeout(() => {
        func.apply(this, args);  // Execute the function with the latest arguments
      }, delay);
    };
  }
  