# Types of DBs

![IMAGE](https://cdn-images-1.medium.com/max/2000/1*u_nsXXVHO3qjyDRQSPLubg.jpeg
)

![IMAGE](https://cdn-images-1.medium.com/max/499/0*GQE0-Nd5BYBp9G90.jpg)

## SQL Databases
#### RELATIONAL DATABASES
### REASONS TO USE A SQL DATABASE
- You need to ensure ACID compliancy (Atomicity, Consistency, Isolation, Durability).
- Your data is structured and unchanging.

### Popular SQL databases and RDBMS’s

- MySQL
```javascript
var mysql = require('mysql');
```
- Oracle
```javascript
var mysql = require('oracledb');
```
- IMB DB2
```javascript
var ibmdb = require('ibm_db');
```
- Sybase
```javascript
var Sybase = require('sybase');
```
- MS SQL Server
```javascript
var sql = require('mssql')
```
- Microsoft Azure
```javascript
var sqlManagement = require('azure-asm-sql');
```
- MariaDB
```javascript
var nodeMaria = require('node-mariadb');
```
- PostgreSQL
```javascript
var pg = require('pg');
```

## NoSQL Databases

#### NON-RELATIONAL & DISTRIBUTED DATA

### REASONS TO USE A NoSQL DATABASE
- Storing large volumes of data that often have little to no structure
- Making the most of cloud computing and storage
- Rapid development

### Popular NoSQL Databases
- MongoDB
```javascript 
var mongodb = require('mongodb');
```
- Apache’s CouchDB
```javascript 
var couchdb = require('node-couchdb');
```
- HBase
```javascript 
var hbase = require('hbase');

```
- Oracle NoSQL
```javascript 
var nosqldb-oraclejs = require('nosqldb-oraclejs');
```
- Apache’s Cassandra DB
```javascript 
var cassandra = require('cassandra-driver');
```
- Riak
```javascript 
var riak-js = require('riak-js');
```
