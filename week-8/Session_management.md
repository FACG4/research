# Session Management In Express

### What are session?
* Ii is the method which used between request so the server can store some user data and use it.
* Session handling in any web application is very important and must have thing, without it we won’t be able to track user and it’s activity.
* We do not use cookies and URL parameters since they both are readable in client side.

### What are the different ways of managing sessions in express?
We have many modules that we can in order to create new session:
1. Express-session:
```
npm install express-session
```
2. Node-session:
```
npm install node-session
```
### Example
Here a simple example shows how to use express-session to create a view counter for a client:

  ```
  var express = require('express');
  var cookieParser = require('cookie-parser');
  var session = require('express-session');

  var app = express();

  app.use(cookieParser());
  app.use(session({secret: "Shh, its a secret!"}));

  app.get('/', function(req, res){
     if(req.session.page_views){
        req.session.page_views++;
        res.send("You visited this page " + req.session.page_views + " times");
     } else {
        req.session.page_views = 1;
        res.send("Welcome to this page for the first time!");
     }
  });
  app.listen(3000);
  ```
