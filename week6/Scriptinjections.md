

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

#### The most popular ways of prevention :

* MITIGATING SQL INJECTION :

Any input from outside the system should be considered untrusted .
```
int quantity;
if (!int.TryParse(Request.QueryString["qty"], out quantity)) {
return RedirectToAction("Invalid");
}
```

1 .convert it to an integer and show an error if this fails
This will attempt to convert the string to an integer. If the conversion fails, the code redirects to an action that will display an invalid message.

Thats for integer but The preferred technique in text case is to use regular expressions or string replacements to allow only needed characters in the passed value.

You will need to evaluate any input respectively. Some database queries might need more specialized attention. Take characters that can be meaningful in an SQL command but also could be a valid character in a database call. For example the single quote character ' is used to start and finish a string in SQL, but could also be part of a person's name such as O'Conner. In this case replacing the single quote ' with consecutive single quotes '' can eliminate the problem.

* STORED PROCEDURES :

Stored procedures are often seen as the fix for this problem and they can be part of the solution. However a poorly written stored procedure will not save you.
ALTER PROCEDURE [dbo].[SearchProducts]
```
@searchterm VARCHAR(50) = ''
AS
BEGIN
DECLARE @query VARCHAR(100)
SET @query = 'SELECT * FROM Products WHERE productname LIKE ''%' + @searchterm + '%''';
EXEC(@query)
END
```
The string concatenation here is the problem.

* PARAMETERIZATION :

We can rewrite the stored procedure shown earlier to use parameters and produce a safer call. Instead of concatenating the % characters that represent wildcards, we'll create a new string adding these characters and then pass this new string as a parameter to the SQL statement. The new stored procedure looks like this:
```
ALTER PROCEDURE [dbo].[SearchProductsFixed]
@searchterm NVARCHAR(50) = ''
AS
BEGIN
DECLARE @query NVARCHAR(100)
DECLARE @msearch NVARCHAR(55)

SET @msearch = '%' + @searchterm + '%'
SET @query = 'SELECT * FROM Products WHERE productname LIKE @search'
EXEC sp_executesql @query, N'@search VARCHAR(55)', @msearch
END
```

Parameterization doesn't require stored procedures. You can also take advantage of it with queries built within code.

* LEAST PRIVILEGE :
Give the user authuntecation to create alter and drop tables .

### SQL Injection Based on 1=1 is Always True
Look at the example above again. The original purpose of the code was to create an SQL statement to select a user, with a given user id.

If there is nothing to prevent a user from entering "wrong" input, the user can enter some "smart" input like this:

UserId:
```105 OR 1=1```

Then, the SQL statement will look like this:

```SELECT * FROM Users WHERE UserId = 105 OR 1=1;```


### SQL Injection Based on ""="" is Always True

A hacker might get access to user names and passwords in a database by simply inserting " OR ""=" into the user name or password text box:

The code at the server will create a valid SQL statement like this:
```SELECT * FROM Users WHERE Name ="" or ""="" AND Pass ="" or ""=""```

[REFERENCES](https://www.w3schools.com/sql/sql_injection.asp)
