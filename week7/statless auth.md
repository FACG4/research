# Stateless vs stateful authentication


#### What is session based authentication (stateful) vs token based authentication (stateless)?

####  What Are JSON Web Tokens?
JSON Web Token (JWT) is an open standard (RFC 7519) that defines a compact and self-contained way to securely transmit information between parties as a JSON Object. This information can be verified and trusted because it is digitally signed. JWTs can be signed using a secret (with HMAC algorithm) or a public/private key pair using RSA.

#### JWT Anatomy
JWTs basically consist of three parts separated by a(.). This is the header, payload and signature.
##### How JSON Web Tokens Work
In authentication, when the user successfully logs in using his credentials, a JSON Web Token will be returned and must be saved locally (typically in local storage, but cookies can be also used), instead of the traditional approach of creating a session in the server and returning a cookie.
Whenever the user wants to access a protected route, it should send the JWT, typically in the Authorization header using the Bearer schema. Therefore, the content of the header should look like the following:

##### Authorization: Bearer <token>

This is a stateless authentication mechanism as the user state is never saved in the server memory. The server’s protected routes will check for a valid JWT in the Authorization header, and if it is there, the user will be allowed. As JWTs are self-contained, all the necessary information is there, reducing the need to go back and forth to the database.

This allows the user to fully rely on data APIs that are stateless and even make requests to downstream services. It doesn’t matter which domains are serving your APIs, as Cross-Origin Resource Sharing (CORS) won’t be an issue since it doesn’t use cookies.

![image](https://i.imgur.com/OCD5AJB.png)
_




## Sessions

 we had the predominant server-based authentication. As we all know, HTTP Protocol is stateless, this means that if we authenticate a user with a username and password, then on the next request, our application won’t know who we are. We would have to authenticate again. So there was a need to ensure that after a user has logged in, the user’s authentication status can still be verified on every subsequent HTTP request.

 ![image](https://i.imgur.com/cGa7eQn.png)


















 ### Conclusion
JSON Web Tokens (JWTs) are lightweight and can easily be used across platforms and languages. They are a clever way to authenticate & authorize without sessions. There are several JWT libraries available for signing and verifying the tokens. There are also many reasons to use tokens, and Auth0 can help implement token authentication in an easy and secure way.
