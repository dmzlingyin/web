const EventEmitter = require('events');
const eventEmitter = new EventEmitter();

eventEmitter.on('start',() => {
    console.log("开始");
});
eventEmitter.emit('start');