function promiseAll(promises) {
    return new Promise((resolve, reject) => {
      if (!Array.isArray(promises)) {
        return reject(new TypeError("Argument should be an array of promises"));
      }
  
      const resultArray = [];
      let resolvedCount = 0;
  
      promises.forEach((promise, index) => {
        Promise.resolve(promise)
          .then(value => {
            resultArray[index] = value;
            resolvedCount++;
  
            // When all promises resolve, we resolve the main promise
            if (resolvedCount === promises.length) {
              resolve(resultArray);
            }
          })
          .catch(error => {
            // Reject as soon as any promise fails
            reject(error);
          });
      });
    });
  }

// Resolved example.
const p0 = Promise.resolve(3);
const p1 = 42;
const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('foo');
  }, 100);
});

await promiseAll([p0, p1, p2]); // [3, 42, 'foo']


// Rejection example.
const p3 = Promise.resolve(30);
const p4 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject('An error occurred!');
  }, 100);
});

try {
  await promiseAll([p3, p4]);
} catch (err) {
  console.log(err); // 'An error occurred!'
}


