# Attacks:

### Man In The Middle (MITM):



### Cross Site Scripting (XSS):


### Cross Site Request Forgery (CSRF):

Cross Site Request Forgery is an attack that forces the victim to issue http requests without their knowledge.

The attack relies on the fact that browser requests automatically include any credentials associated with the site, such as the user's session cookie.

Therefore, if the user is currently authenticated to the site, the site will have no way to distinguish between the forged request sent by the victim and a legitimate request sent by the victim.

A successful CSRF can result in damaged client relationships, unauthorized fund transfers, changed passwords...etc.

How is it done?

![CSRF attack](https://www.incapsula.com/images/illustrations/web-app-security-mini-site/csrf-cross-site-request-forgery.png)



### How can you defend against each of them?

<!--
Man in the middle:

XSS:
-->

#### CSRF:

**Identifying Source Origin**

To identify the source origin, we recommend using one of these two standard headers that almost all requests include one or both of:
* Origin Header
* Referer Header

**If both headers are not present:**
* Identifying the Target Origin

Further reading on preventing CSRF [here
](https://bit.ly/NKbSES)
