console.log('test output');

// example of global variable
global.myOwnGlobalVariable = 'global variable';
console.log(myOwnGlobalVariable);

// example of process
console.log(process.env);
console.log(`Process: ${process.platform}` );

// example of events
// one of the example of event is 'exit' (build-in to node)
process.on('exit', () => {
    console.log('bye now!');
});

// create an event emitter
const { EventEmitter } = require('events'); //build-in

// Create an instance of the emitter
const eventEmitter = new EventEmitter();
eventEmitter.on('lunch', () => {
    console.log('hmm.. yummy!');
});

eventEmitter.emit('lunch');
eventEmitter.emit('lunch');

// File system example (sync)
const {readFile, readFileSync } = require('fs'); // fs is a build-in module
const text = readFileSync('./file.txt', 'utf8');
console.log(text);

// async file read
const textAsync = readFile('./file.txt', 'utf8', (err, txt) => {
    console.log(txt);
})
console.log('this log should come before the async read');