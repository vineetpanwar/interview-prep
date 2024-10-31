function promiseAllSettled(promises) {
    return new Promise((resolve) => {
      let results = [];
      let completedPromises = 0;
  
      promises.forEach((promise, index) => {
        Promise.resolve(promise) // Ensure it handles non-promise values
          .then((value) => {
            results[index] = {
              status: "fulfilled",
              value: value
            };
          })
          .catch((reason) => {
            results[index] = {
              status: "rejected",
              reason: reason
            };
          })
          .finally(() => {
            completedPromises++;
            if (completedPromises === promises.length) {
              resolve(results);
            }
          });
      });
  
      // Handle case where input array is empty
      if (promises.length === 0) {
        resolve([]);
      }
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

await promiseAllSettled([p0, p1, p2]); // [3, 42, 'foo']


// Rejection example.
const p3 = Promise.resolve(30);
const p4 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject('An error occurred!');
  }, 100);
});

try {
  await promiseAllSettled([p3, p4]);
} catch (err) {
  console.log(err); // 'An error occurred!'
}


