# Express Middlewares Research

### What are express middlewares ?

 Middleware functions are functions that have access to the request object (req), the response object (res), and the next function in the application’s request-response cycle.

 ##### Middleware function :
* Execute any code.
* Make changes to the request and the response objects.
* End the request-response cycle.
* Call the next middleware in the stack.

###### The following figure shows the elements of a middleware function call:

![](https://camo.githubusercontent.com/6281938f34cb1289b66bb391ea4b2c1078f67484/68747470733a2f2f73657276696e672e70686f746f732e70686f746f626f782e636f6d2f3230333439303939306261373662393566626235353037653838393536613763326335386336343435303061386637666461316339616236353165663066326432323532343835322e6a7067)


### What functionality do they provide?
* Middlewares on Requests: Using app.use();
* Middlewares on Response : middlewares are to be used before sending back a response to the front-end(client side), e.g. there are middlewares that compress the body of the response.
 * next


 ### What are some examples of useful express middleware and how do you use them?

 [ click](What are some examples of useful express middleware and how do you use them)
