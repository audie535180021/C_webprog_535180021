// console.log('Hello World');

// Callback
process.on('exit', function(){

});

// Event emitter
var events = require('events');

var eventEmitter = new events.EventEmitter();

var connectHandler = function connected(){
    console.log('Connection Successfull');
    eventEmitter.emit('data received!');
}

eventEmitter.on('connection', connectHandler);
eventEmitter.on('data received', function(){
    console.log('data received successful');
});

eventEmitter.emit('connection');
console.log('Program ended');