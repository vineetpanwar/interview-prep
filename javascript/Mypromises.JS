class MyPromise {
    constructor(executor) {
      this.state = 'pending';
      this.value = undefined;
      this.handlers = [];
  
      this.resolve = this.resolve.bind(this);
      this.reject = this.reject.bind(this);
  
      try {
        executor(this.resolve, this.reject);
      } catch (err) {
        this.reject(err);
      }
    }
  
    resolve(value) {
      if (this.state !== 'pending') return;
      if (value instanceof MyPromise) {
        // If the value is a promise, adopt its state
        return value.then(this.resolve, this.reject);
      }
  
      this.state = 'fulfilled';
      this.value = value;
      this.executeHandlers();
    }
  
    reject(reason) {
      if (this.state !== 'pending') return;
  
      this.state = 'rejected';
      this.value = reason;
      this.executeHandlers();
    }
  
    then(onFulfilled, onRejected) {
      return new MyPromise((resolve, reject) => {
        this.addHandler({
          onFulfilled: onFulfilled ? onFulfilled : v => v,
          onRejected: onRejected ? onRejected : err => { throw err },
          resolve,
          reject
        });
      });
    }
  
    catch(onRejected) {
      return this.then(null, onRejected);
    }
  
    static resolve(value) {
      return new MyPromise(resolve => resolve(value));
    }
  
    static reject(reason) {
      return new MyPromise((_, reject) => reject(reason));
    }
  
    addHandler(handler) {
      this.handlers.push(handler);
      if (this.state !== 'pending') {
        this.executeHandlers();
      }
    }
  
    executeHandlers() {
      if (this.state === 'pending') {
        return;
      }
  
      setTimeout(() => {
        this.handlers.forEach(handler => {
          if (this.state === 'fulfilled') {
            try {
              const result = handler.onFulfilled(this.value);
              if (result instanceof MyPromise) {
                result.then(handler.resolve, handler.reject);
              } else {
                handler.resolve(result);
              }
            } catch (err) {
              handler.reject(err);
            }
          } else {
            try {
              const result = handler.onRejected(this.value);
              if (result instanceof MyPromise) {
                result.then(handler.resolve, handler.reject);
              } else {
                handler.resolve(result);
              }
            } catch (err) {
              handler.reject(err);
            }
          }
        });
        this.handlers = [];
      }, 0);
    }
  }

  // Static methods usage
const a = MyPromise.resolve(42).then((value) => 2 * value).then((value) => {console.log('value:', value); return value}); // 42
console.log(a);
// MyPromise.reject("Error!").catch((err) => console.log(err)); // "Error!"