function throttlePromises(funcs, max) {
    const results = [];  // To store the results of the promises
    let index = 0;       // To track which promise needs to be executed next
    let activePromises = 0; // To track the number of currently running promises
    
    return new Promise((resolve, reject) => {
      function runNext() {
        // If all promises have been processed, resolve the main promise
        if (index === funcs.length && activePromises === 0) {
          return resolve(results);
        }
  
        // Start as many promises as allowed
        while (activePromises < max && index < funcs.length) {
          const currentIndex = index;  // Store the current index for tracking results
          const currentFunc = funcs[currentIndex]; // Get the current function
  
          index++;  // Increment the index to move to the next function
          activePromises++;  // Increment active promises
  
          currentFunc()  // Execute the promise-returning function
            .then(result => {
              results[currentIndex] = result;  // Store the result
            })
            .catch(err => {
              reject(err);  // Reject the entire promise if any promise fails
            })
            .finally(() => {
              activePromises--;  // Decrement active promises count
              runNext();  // Recursively call runNext to start new promises
            });
        }
      }
  
      // Kick off the first batch of promises
      runNext();
    });
  }