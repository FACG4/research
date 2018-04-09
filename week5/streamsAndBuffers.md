# Buffers and Streams:


### Streams:

A stream is the flow of data from one point to another.

Instead of waiting for all the data to be stored in memory, using the readStream method allows us to store chunks of data in the memory and read it bit by bit.

Each type of Stream is an EventEmitter instance and throws several events at different instance of times.

 For example, some of the commonly used events are:

* data − This event is fired when there is data is available to read.

* end − This event is fired when there is no more data to read.

* error − This event is fired when there is any error receiving or writing data.

* finish − This event is fired when all the data has been flushed to underlying system.



### Buffers:

A buffer is a temporary storage place in memory that stores the input it receives from the stream.

You can allocate a buffer size, but you can't resize it. Once the buffer is full, it is moved to the destination point. (Example: from server to client).

to create a buffer with a size of 5 bytes:
```
let buf = Buffer.alloc(5);

console.log(buf);
// Prints: <Buffer 00 00 00 00 00>
```
### How to use streams and buffers:

Using the fileSystem module.

fs.readfile: Reads the file specified (reserves a space for the entire file in memory)

fs.createReadStream: tells the program to read the file as chunks in an asynchronous way.



Reading from a Stream:
Create a js file named main.js with the following code −
```
var fs = require("fs");
var data = '';

// Create a readable stream
var readerStream = fs.createReadStream('input.txt');

// Set the encoding to be utf8.
readerStream.setEncoding('UTF8');

// Handle stream events --> data, end, and error
readerStream.on('data', function(chunk) {
   data += chunk;
});

readerStream.on('end',function(){
   console.log(data);
});

readerStream.on('error', function(err){
   console.log(err.stack);
});

console.log("Program Ended");
```


##  Node project
```javascript
const fs = require('fs');
var stream = fs.createReadStream(process.argv[2]);
var byteSize = 50;
stream.setEncoding('utf8');
stream.on("readable", function() {
    var chunk;
   
        setInterval((chunk)=>{
            chunk=stream.read(byteSize)
            console.log(chunk);
    
        },process.argv[3])
    
});
```



