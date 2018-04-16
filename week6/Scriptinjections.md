

# Script injection


 #### Code Injection is
  the general term for attack types which consist of injecting code that is then interpreted/executed by the application.
 This type of attack exploits poor handling of untrusted data.
 These types of attacks are usually made possible due to a lack of proper input/output data validation, for example:
* allowed characters (standard regular expressions classes or custom) .
* data format .
* amount of expected data .

#### How do these happen?

Cross-site scripting(XSS) is a type of computer security vulnerability typically found in web applications.XSS enables attackers to inject client-side scripts into web pages viewed by other users. the research community proposed and started using two new terms to help organize the types of XSS that can happen:

* Server XSS means that the data comes directly from the server onto the page. For example, the data containing the malicious text is from the HTTP response that made up the weak page.

* Client XSS means that the data comes from JavaScript which has manipulated the page. So it is JavaScript that has added the malicious text to the page, rather than it being in the page at that location when it was first loaded in the browser.
