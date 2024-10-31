class EventEmitter {
    constructor() {
      // A Map to store events and their corresponding listeners
      this.events = new Map();
    }
  
    // Register an event listener
    on(event, listener) {
      if (!this.events.has(event)) {
        this.events.set(event, []);
      }
      this.events.get(event).push(listener);
    }
  
    // Emit an event, calling all listeners attached to it
    emit(event, ...args) {
      if (this.events.has(event)) {
        this.events.get(event).forEach(listener => {
          listener(...args);
        });
      }
    }
  
    // Remove a specific listener for an event
    off(event, listenerToRemove) {
      if (this.events.has(event)) {
        const listeners = this.events.get(event);
        this.events.set(
          event,
          listeners.filter(listener => listener !== listenerToRemove)
        );
      }
    }
  }


  ///usage
  const emitter = new EventEmitter();

function onHello(name) {
  console.log(`Hello, ${name}`);
}

function onGoodbye(name) {
  console.log(`Goodbye, ${name}`);
}

// Register events
emitter.on('greet', onHello);
emitter.on('farewell', onGoodbye);

// Emit events
emitter.emit('greet', 'John'); // Output: Hello, John
emitter.emit('farewell', 'John'); // Output: Goodbye, John

// Remove an event listener
emitter.off('greet', onHello);

// Try to emit again (nothing happens because the listener was removed)
emitter.emit('greet', 'John'); // No output