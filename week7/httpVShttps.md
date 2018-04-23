# HTTP vs HTTPS

![alt text](https://content-static.upwork.com/blog/uploads/sites/3/2017/06/18231344/What-are-SSL-Certificates-feature.jpg)



why some websites begin with “http://” and others with “https://”? That “s” stands for “secure,” and it indicates that the site you’re browsing is using a protected, encrypted connection. This measure of security has become increasingly important for all sites on the web—both to protect users’ sensitive information and to improve SEO.
"Search engine optimization"

![alt text](https://content-static.upwork.com/blog/uploads/sites/3/2017/06/19063529/Screen-Shot-2017-06-14-at-11.59.26-AM.png)


[Above, the Twitter URL as it appears in Chrome, showing the lock icon and https:// protocol.]

So how does a site switch from “http://www.yoursite” to “https://www.yoursite,” and what does it mean when it does?

The answer lies in SSL (Secure Sockets Layer) certificates, a method of encryption that involves obtaining a verification from an SSL provider and installing that certificate on your site. In this article, we’ll discuss how SSL certificates work, why they’re important, and how to go about getting one installed for your site.


## WHAT ARE HTTPS AND SSL?

HTTPS is really just the sum of a set of protocols: HTTP, SSL (or TLS), and TCP.

![alt text](https://content-static.upwork.com/blog/uploads/sites/3/2016/11/03131855/HTTPS-as-a-Bundle-of-Protocols.png)

As a part of the HTTPS protocol, SSL is a secure way to send encrypted information between a server and a browser. Sites that use HTTPS safeguard their visitors’ information, and also earn better rank in search engines—even Google has prioritized sites using HTTPS.

Using public key cryptography (or asymmetric cryptography), any information that’s sent between the site (the user interacting via a browser) and the site’s server (with the database, operating system, etc.) is unreadable if it’s intercepted by another party. That can be anything from your username and password, credit card information, to other important data.

Only the intended recipient with the key to unlock that encrypted data can read it, keeping hackers and thieves out of the loop. Without it, any computer between a user and the server can theoretically intercept that information. Also, hackers can recreate or impersonate websites to lure users into entering sensitive information—something that’s easy to do if a user isn’t looking for that verification an SSL certificate can provide.

## Are SSL and TLS the same thing?

Before we talk more about SSL certificates, you’ve probably seen SSL and TLS (Transport Layer Security) used interchangeably. So, is there a difference between SSL and TLS? The answer is basically no, because they’re both encrypted protocols and TLS is essentially a newer version of SSL. (SSL version 3.0 served as the basis for the first version of the TLS protocol.) TLS is a session layer protocol between the Application and Transport layers, and SSL is a high-level encryption for the transmission of encrypted data. With SSL, while an outside party may still access your data, without the encryption key they won’t be able to read it.

## IMPLEMENTING SSL ON YOUR SITE
With SSL, you’ll be changing your domain name from “http://sitename” to “https://sitename.”

It’s relatively straightforward to obtain free SSL/TLS certificates and install them on your web server. You’ll need to get an SSL certificate from a provider like Cloudflare or Let’s Encrypt and then go about installing it. While this is possible to do even if you’re not too familiar with IT, it’s probably a good idea to engage a skilled DevOps professional for the task. 
For a step-by-step guide to setting up HTTPS encryption on your site, check out this article.
[Read more](https://medium.com/@nileshsingh/everything-about-creating-an-https-server-using-node-js-2fc5c48a8d4e)



### To get started, you’ll need to:

* **Choose an SSL provider.** You’ll want to look for a trusted, verified SSL provider that’s recognized by browsers, devices, and operating systems as a trusted certificate authority.

* **Choose the kind of SSL certificate you want** Some SSL certificates require more background checks and verification to obtain.

* **Strategize your switch to HTTPS.** You’ll want to consider your timing and how to handle things like existing backlinks. 

### To summarize: Why every site should be SSL-encrypted
 what implementing SSL encryption on your site will provide:

* Better SEO ranking. SSL and HTTPS are not only valuable to security, but they’re also going to be helpful when it comes to SEO, ecommerce, and visual notifications about the security of a page in Google Chrome. 

* Safer, more secure data transfer between servers, with less chance of interception
* Increased trust with customers
* SSL is required for Payment Card Industry (PCI) compliance.

