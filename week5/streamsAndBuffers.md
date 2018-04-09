
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



