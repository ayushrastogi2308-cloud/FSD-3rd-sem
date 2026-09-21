const EventEmitter = require('events');
const myemitter = new EventEmitter();

myemitter.on('greet', (name) => {
  console.log(`hello,${name}! welcome to Node.js`);
});

myemitter.on('exit', () => {
  console.log('Application closed');
});

myemitter.emit('greet', '2nd year');
myemitter.emit('exit');