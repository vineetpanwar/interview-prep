function throttle(func, wait) {
    let timer = null;
    let lastArgs = null;
    
    return function(...args) {
      if (timer) {
        lastArgs = args;  // Store the latest args if a call is made during the throttle period
      } else {
        func.apply(this, args);  // Call the function immediately
        timer = setTimeout(() => {
          if (lastArgs) {
            func.apply(this, lastArgs);  // Call the function with the last arguments
            lastArgs = null;  // Clear the last arguments after execution
          }
          timer = null;  // Reset the timer to allow the next call
        }, wait);
      }
    };
  }

  function logMessage(message) {
    console.log(message);
  }
  
  const throttledLog = throttle(logMessage, 3000); // Throttled with a 3-second delay
  
  // Simulating rapid calls
  throttledLog("A"); // Called immediately
  setTimeout(() => throttledLog("B"), 500);  // Ignored
  setTimeout(() => throttledLog("C"), 1000); // C gets called after delay
  setTimeout(() => throttledLog("D"), 3500); // D gets called after its own delay
  setTimeout(() => throttledLog("E"), 6000); // E gets called after its own delay
  setTimeout(() => throttledLog("F"), 8000); // F gets called after its own delay
  setTimeout(() => throttledLog("G"), 8500); // G is ignored because it's too close to F