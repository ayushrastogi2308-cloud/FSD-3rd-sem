const EventEmitter = require("events");
// 1. Create a custom EventEmitter
class MyEmitter extends EventEmitter {}
const emitter = new MyEmitter();
// 2. Add event handlers for "greet" and "exit"
emitter.on("greet", (name) => {
    console.log(`Hello, ${name}!`);
});
emitter.on("exit", () => {
    console.log("Exit event triggered");
});
// Trigger custom events
emitter.emit("greet", "Ayush");
// 3. Visualize the Node.js Event Loop
console.log("Start");
setTimeout(() => {
    console.log("setTimeout");
}, 0);
setImmediate(() => {
    console.log("setImmediate");
});
process.nextTick(() => {
    console.log("process.nextTick");
});
emitter.emit("exit");
console.log("End");