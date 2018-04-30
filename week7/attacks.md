# Attacks:

### Man In The Middle (MITM):


![](http://i68.tinypic.com/rlfhit.png)

<ol>
  <li>Abd sends a message to Farah, which is intercepted by Mohammed:
  <dl>
  <dd><span style="color:green;">Abd</span> <i>"Hi Farah, it's Abd. Give me your key."</i> → &nbsp; &nbsp; <span style="color:red;">Mohammed</span> &nbsp; &nbsp; <span style="color:green;">Farah</span></dd>
  </dl>
  </li>
  <li>Mohmmed relays this message to Farah; Farrah cannot tell it is not really from Abd:
  <dl>
  <dd><span style="color:green;">Abd</span> &nbsp; &nbsp; <span style="color:red;">Mohammed</span> <i>"Hi Farah, it's Abd. Give me your key."</i> → &nbsp; &nbsp; <span style="color:green;">Farah</span></dd>
  </dl>
  </li>
  <li>Farah responds with his encryption key:
  <dl>
  <dd><span style="color:green;">Abd</span> &nbsp; &nbsp; <span style="color:red;">Mohammed</span> &nbsp; &nbsp; ← <i>[Farah's key]</i> <span style="color:green;">Farah</span></dd>
  </dl>
  </li>
  <li>Mohmmed replaces Farah's key with her own, and relays this to Abd, claiming that it is Farah's key:
  <dl>
  <dd><span style="color:green;">Abd</span> &nbsp; &nbsp; ← <i>[Mohammed's key]</i> <span style="color:red;">Mohammed</span> &nbsp; &nbsp; <span style="color:green;">Farah</span></dd>
  </dl>
  </li>
  <li>Abd encrypts a message with what she believes to be Farah's key, thinking that only Farah can read it:
  <dl>
  <dd><span style="color:green;">Abd</span> <i>"Meet me at GSG!" [encrypted with Mohammed's key]</i> → &nbsp; &nbsp; <span style="color:red;">Mohammed</span> &nbsp; &nbsp; <span style="color:green;">Farah</span></dd>
  </dl>
  </li>
  <li>However, because it was actually encrypted with Mohammed's key, Mohammed can decrypt it, read it, modify it (if desired), re-encrypt with Farah's key, and forward it to Farah:
  <dl>
  <dd><span style="color:green;">Abd</span> &nbsp; &nbsp; <span style="color:red;">Mohammed</span> <i>"Meet me at beach after mid night!" [encrypted with Farah's key]</i> → &nbsp; &nbsp; <span style="color:green;">Farah</span></dd>
  </dl>
  </li>
  <li>Farah thinks that this message is a secure communication from Abd.</li>
  <li>Farah goes to the beach and gets robbed by Mohammed.</li>
  </ol>


### Defense and detection

   Using the Secure flag in the cookie header. This means the cookie will only be set over a HTTPS connection.



### Cross Site Scripting (XSS):
## What is XSS?

**C**ross-**S**ite **S**cripting (XSS) is a code injection attack that allows an attacker to execute malicious JavaScript in another user's browser.

## Types of XSS:


#### Persistent XSS:
where the malicious string originates from the website's database.

![](https://excess-xss.com/persistent-xss.png)

#### Reflected XSS:
where the malicious string originates from the victim's request.

![](https://excess-xss.com/reflected-xss.png)

#### DOM-based XSS:
where the vulnerability is in the client-side code rather than the server-side code.

![](https://excess-xss.com/dom-based-xss.png)

## Methods of preventing XSS:
For a web developer, there are two fundamentally different ways of performing secure input handling:

**Encoding**, which escapes the user input so that the browser interprets it only as data, not as code.
converts characters like < and > into &lt; and &gt;

**Validation**, which filters the user input so that the browser interprets it as code without malicious commands.

### Cross Site Request Forgery (CSRF):

Cross Site Request Forgery is an attack that forces the victim to issue http requests without their knowledge.

The attack relies on the fact that browser requests automatically include any credentials associated with the site, such as the user's session cookie.

Therefore, if the user is currently authenticated to the site, the site will have no way to distinguish between the forged request sent by the victim and a legitimate request sent by the victim.

A successful CSRF can result in damaged client relationships, unauthorized fund transfers, changed passwords...etc.

How is it done?

![CSRF attack](https://www.incapsula.com/images/illustrations/web-app-security-mini-site/csrf-cross-site-request-forgery.png)




#### CSRF:

**Identifying Source Origin**

To identify the source origin, we recommend using one of these two standard headers that almost all requests include one or both of:
* Origin Header
* Referer Header

**If both headers are not present:**
* Identifying the Target Origin

Further reading on preventing CSRF [here
](https://bit.ly/NKbSES)
