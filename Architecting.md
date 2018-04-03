The architecture of a software system is a metaphor, analogous to the architecture of a building

## Separation of concerns (_SoC_)

(reduce complexity by separating the concerns that drive the design)

### SoC code should be:

* Well separated, individual sections.
* Modular, reusable
* easier to read

### tasks that are normally handled in the back end

* Data storage (Database)
* Validating user submitted Data
* Validating requests
* Sending data back to the client

### tasks that are usually handled in the front end

* DOM (html, css, dom manipulation)
* API calls
* Form Validations
* Local storage

## Client side vs server side

Server-side rendering worked great at the time too, since most webpages were mostly just for displaying static images and text, with little in the way of interactivity.

### Method for getting all html up into a screen
#### 1- server side rendering 
```
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Example Website</title>
  </head>
  <body>
    <h1>My Website</h1>
    <p>This is an example of my new website</p>
    <a href="http://example.testsite.com/other.html.">Link</a>
  </body>
</html>
```

Once the request is done processing, your browser gets back the fully rendered HTML and displays it on the screen.

If you then decide to visit a different page on the website, your browser will once again make another request for the new information.

It doesn’t matter if the new page only has a few items that are different than the current page, the browser will ask for the entire new page and will re-render everything from the ground up.

Now, assume that you wanted to click on the link from the rendered page which contains the following code.

```
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Example Website</title>
  </head>
  <body>
    <h1>My Website</h1>
    <p>This is an example of my new website</p>
    <p>This is some more content from the other.html</p>
  </body>
</html>
```

The only difference between the previous page and this one is that this page does not have a link and instead has another paragraph. Logic would dictate that only the new content should be rendered and the rest should be left alone. 
Alas, that isn’t how server-side rendering works. 

#### 2- client side rendering

This is a relatively new approach to rendering websites
some  examples are Vue.js and React.js
Going back to the previous website, example.testsite.com, assume that you now have an index.html file with the following lines of code.
```
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Example Website</title>
</head>
<body>
  <div id="root">
    <app></app>
  </div>
  <script src="https://vuejs.org"type="text/javascript"></script>
  <script src="location/of/app.js"type="text/javascript"></script>
</body>
</html>
```

For starters, instead of having the content inside the HTML file, you have a container div with an id of root. You also have two script elements right above the closing body tag. One that will load the Vue.js JavaScript library and one that will load a file called app.js.


following lines of code into the app.js file.
```
var data = {
        title:"My Website",
        message:"This is an example of my new website"
      }
  Vue.component('app', {
    template:
    `
    <div>
    <h1>{{title}}</h1>
    <p id="moreContent">{{message}}</p>
    <a v-on:click='newContent'>Link</a>
    </div>
    `,
    data: function() {
      return data;
    },
    methods:{
      newContent: function(){
        var node = document.createElement('p');
        var textNode = document.createTextNode('This is some more content from the other.html');
        node.appendChild(textNode);
        document.getElementById('moreContent').appendChild(node);
      }
    }
  })
  new Vue({
    el: '#root',
  });
```
This is much faster since you are only loading a very small section of the page to fetch the new content, instead of loading the entire page.

Another thing to keep in mind is that your website/application won’t be able to load until ALL of the JavaScript is downloaded to the browser. Which makes sense, since it contains all the content that will be needed. If your users are using slow internet connection, it could make their initial loading time a bit long.

### Server-side pros:

1-The initial page load is faster.

2-Great for static sites.



#### Server-side cons:
1-Frequent server requests.
2-An overall slow page rendering.
3-Full page reloads.
4-Non-rich site interactions.


#### Client-side pros:
1-Rich site interactions
2-Fast website rendering after the initial load.
3-Robust selection of JavaScript libraries.



#### Client-side cons:
1-Initial load might require more time.
2-In most cases, requires an external library.


## Alternative back-end technologies

There alot of backend languages such as
> PHP, Python, ASP .NET and other languages

### Why to use NodeJS:

* Non-blocking (Asynchronous) 
* Event Driven (Event Loop)
* Dynamic
* Single threaded

### cons of NodeJS:

* Node.js don't work well with relational databases
* Doesn't support multi-threaded programmings

### Example demonstrate the difference between sync and async code:

--- Synchronous / Blocking ---

```
var output = getDataFromDatabase('names');
console.log('Hi There');
console.log(output);
```

The above code is synchronous and in sequence and it's blocking. Meaning until and unless, the first line of code finishes. It is going to block the rest of the code unless the first line is finished.

--- Asynchronous / Non-blocking ---
```
getDataFromDatabase('name', function(output){
  console.log(output);
});
console.log('Hi There');
```

It's not going to wait for database querying to finish, it's going to proceed to the next line. So by design this is non-blocking and asynchronous that means everything is happening together.

## Writing for different environments:
### Why might you have to write JavaScript differently if it's going to run in the browser, rather than in Node?


In web applications, there is the client and the server. The “client” is a web browser, like Internet Explorer, Google Chrome, Firefox, etc. The “server” is a web application server at a remote location that will process web requests and send pages to the client.

JavaScript consists of :  
##### Native objects : the core of the js language itself which works everywhere

##### Host objects :  
1.Browser objects  
2.Server side objects  
Some browser objects doesn’t work on server objects and vica versa. For example :  

1.Window : is an object which work only on the browser.

2.Module and require : works only on the server side.

3.Document: which is also another predefined global variable in browsers, has the html which is rendered.

### Tools to bridge the gap:

**1. Browserify** is an open-source JavaScript tool that allows developers to write Node.js-style modules that compile for use in the browser.

Browsers don't have the require method defined, but Node.js does. With Browserify you can write code that uses require in the same way that you would use it in Node.

**2. Webpack** is an open-source JavaScript module bundler. Webpack takes modules with dependencies and generates static assets representing those modules. While browseify is simple and easy to use in small projects. Webpack can reduce the time it takes to stand up a robust build process.