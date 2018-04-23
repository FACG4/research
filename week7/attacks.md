# Attacks:

### Man In The Middle (MITM):



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
