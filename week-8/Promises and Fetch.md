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
```
