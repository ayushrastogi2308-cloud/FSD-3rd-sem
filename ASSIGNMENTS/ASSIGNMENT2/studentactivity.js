const EventEmitter=require('events');
const myemitter=new EventEmitter();
myemitter.on('login', () => {
  console.log(`Student logged succesfully`);
});
myemitter.on('assign', () => {
  console.log(`Submitted`);
});
myemitter.on('Logout',()=>{
    console.log(`Student logged Out`);
})
myemitter.on('exit' ,()=>{
    console.log(`exiting Applcation`);
})
myemitter.emit('login');
myemitter.emit('assign');
myemitter.emit('Logout');
myemitter.emit('exit');