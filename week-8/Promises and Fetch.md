Promises:

Promise is an object (class) that represents and acts upon the completion or failure of an asynchronous operation,
such as an API request.

Promises vs Callbacks:
Promises are essentially callbacks, but instead of using them in their plain form, we instead wrap a function
around them to do two main things.

```
const promise = new Promise((resolve, reject) => {
   //asynchronous stuff
})
```

The ```Promise``` is a constructor of the promise class. It takes a function, which takes two callbacks (resolve and reject) and adds a lot of functionality and methods to them, such as ```.all``` and ```.race```...etc.

* On execution of code, the promise will start pending. The pending status will be either true or false. So you can't really track the progress.

* on fulfillment of the promise (successful execution of code), the return value is handed to the ```.then``` method through the resolve parameter.

* If something goes wrong, the return value is an error (error handling) and is handed to the ```.catch``` method through the reject parameter.

Before

```
const readAFile = (url) => {
  // here you create a new Promise
  return new Promise((resolve, reject) => {
    //here you do something async
    fs.readFile(`${__dirname}/public/index.html`, 'utf8', (err, data) => {
      //here you do something if it errors
      if (err) reject(err)
      //here you do something if it works
      else resolve(data)
    });
  });
}

readAFile.then((res)=> console.log(res)).catch((err)=> console.log(err))




**Since promises are little more than just regular callbacks,  lets enlist a few of those differences:**

### 1. Readability

**// Regular Callbacks**
api1(function(result1){
    api2(function(result2){
        api3(function(result3){
             // do work
        });
    });
});

**// Using Promises**
api1().then(function(result1){
    return api2();
}).then(function(result2){
    return api3();
}).then(function(result3){
     // do work
});

* With Callbacks, more the number of callbacks you chain, more difficult does it get to read and more difficult to debug as well.

* Promises, on the other hand, offer much better readability allowing you to chain as many calls as you’d like. With the advent of ES6, flattening can also be easily achieved like this:

api().then(result => api2()).then(result2 => api3()).then(result3 => console.log(result3));

### 2. Error Handling

**// Regular Callbacks**
api1(function(error1, result2){
    if (error1) {
      // log error
    } else {
        api2(function(error2, result2){
            if (error2) {
            // log error
            } else {
                api3(function(error, result3){
                    if (error2) {
                        // log error
                    } else {
                        // do work
                    }
                });
            }
        });
    }   
});

**// Using Promises**
api1().then(function(result1){
    return api2();
}).then(function(result2){
    return api3();
}).then(function(result3){
     // do work
}).catch(function(error) {
     //handle any error that may occur before this point
});

* As you can see above, the solution with promises is pretty much like a try {} catch block but with regular callbacks its becomes a literal callback hell.

### Advantages of Callbacks

* **Simplicity**
Callbacks are simple to understand and easy to create.

* **Slightly Better Performance**

* Somewhat more efficient than Promises because fewer objects are created and garbage collected. Here is a JS perf test showing the performance difference between callbacks and promises on various browsers. The difference is quite negligible but worth mentioning.

**Advantages of Promises**

* Parallel Execution

With Promises, you can make simultaneous calls to the 3 apis and wait for them to be resolved. An intriguing use-case could be to make ajax calls in parallel instead of waiting for each one.


Promise.all([api1(), api2(), api3()]).then(function(result) {
    // Do some work.
    // result is an array containing values of the three fulfilled promises.
}).catch(function(error) {
    // Handle error
    // Executes when at least one of the promises was rejected.
});

Parallel Execution is not natively possible with callbacks but can be integrated using async.parallel().

**Integrated Error Handling**
* Promises come with integrated error handling. The result of the computation might be that either the promise is fulfilled with a value, or it is rejected with a reason.


promise.then(function(result){
    // do something
}).catch(function(error) {
    //handle any error that may occur before this point
}).then(function() {
    // do something whether there was an error or not
    // eg: hiding a spinner while performing an AJAX request
});

* Errors are handled and propagated automatically in promise chains, so that you don’t need to care about it explicitly compared to plain callbacks.```
