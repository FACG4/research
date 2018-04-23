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
  <dd><span style="color:green;">Abd</span> <i>"Meet me at the bus stop!" [encrypted with Mohammed's key]</i> → &nbsp; &nbsp; <span style="color:red;">Mohammed</span> &nbsp; &nbsp; <span style="color:green;">Farah</span></dd>
  </dl>
  </li>
  <li>However, because it was actually encrypted with Mohammed's key, Mohammed can decrypt it, read it, modify it (if desired), re-encrypt with Farah's key, and forward it to Farah:
  <dl>
  <dd><span style="color:green;">Abd</span> &nbsp; &nbsp; <span style="color:red;">Mohammed</span> <i>"Meet me at the van down by the river!" [encrypted with Farah's key]</i> → &nbsp; &nbsp; <span style="color:green;">Farah</span></dd>
  </dl>
  </li>
  <li>Farah thinks that this message is a secure communication from Abd.</li>
  <li>Farah goes to the van down by the river and gets robbed by Mohammed.</li>
  </ol>


### Defense and detection

  ### Using the Secure flag in the cookie header. This means the cookie will only be set over a HTTPS connection.



### Cross Site Scripting (XSS):


### Cross Site Request Forgery (CSRF):


### How can you defend against each of them?
