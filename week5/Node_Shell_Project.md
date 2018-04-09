# Node Shell project

#### TASK!!!

Create your own test output formatter!

#### How?!
when you pipe the results of your tests into,

  read the results of those tests and provide you with useful information about them.

  Something like `tap-spec`, `tap-nyan`!

  we can access piped in input, as a read stream, in our node programs using the `process.openStdin()` method.

  This is our great code! ^__^

```var readLine = require('readline');
var rd=readLine.createInterface({
  input: process.stdin,
 // output: process.stdout
})
rd.on('line',function(line){
  if(line.includes('pass')){
    console.log("^_^",chalk.underline.inverse(line));
  }
  if(line.includes('fail')){
    console.log("'_'"chalk.red.underline.inverse(line));
  }
  if(line.includes('#') && !line.includes('pass')&& !line.includes('fail')){
    console.log("^_*",chalk.yellow.bold(line));
  }
})```
