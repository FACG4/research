# Web storage
***What are local storage ?***

   **local storage**: stores data with no expiration date, and gets cleared only through JavaScript, or clearing the Browser Cache / Locally Stored Data

```
// Store
localStorage.lastname = "Smith";

// Retrieve
document.getElementById("result").innerHTML = localStorage.lastname;

localStorage.removeItem("lastname");
```


   *** What is session storage ?***

  **session storage** : similar to localStorage but expires when the browser closed (not the tab).


  ```
     sessionStorage.anyValue = "hello World"
  ```

***what is the difference between the two?***
 * **Web storage** can be viewed in any tab in the browser

 **session storage** can be viewed only in the tab you opened with it

 * **Web storage** stores data with no expiration date

 **session storage** stores data for one session (data is lost when the browser tab is closed)

 ## Why would you use cookies vs local/session storage?



 1-Stores data that has to be sent back to the server with subsequent requests. Its expiration varies based on the type and the expiration duration can be set from either server-side or client-side (normally from server-side).,,,

 -local Storage Stores data with no expiration date, and gets cleared only through JavaScript, or clearing the Browser cache / Locally Stored Data.

-The session Storage object stores data only for a session, meaning that the data is stored until the browser (or tab) is closed.

 2-Cookies are primarily for server-side reading (can also be read on client-side), local Storage and session Storage can only be read on client-side.

 3- Cookies Size must be less than 4KB.
 -Local Storage Storage limit is the maximum amongst the three.

 -Session Storage storage limit is larger than a cookie (at least 5MB).

 4-Cookies can be made secure by setting the httpOnly flag as true for that cookie. This prevents client-side access to that cookie
