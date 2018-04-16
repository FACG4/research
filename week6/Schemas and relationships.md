# Schemas and Relationship
By: Salam-Razan-Eman-Marwa
</br>

##### database schema:
 of a database system is its structure described in a formal language supported by the database management system (DBMS). The term "schema" refers to the organization of data as a blueprint of how the database is constructed (divided into database tables in the case of relational databases). The formal definition of a database schema is a set of formulas (sentences) called integrity constraints imposed on a database. These integrity constraints ensure compatibility between parts of the schema.


#### Constraints
Constraints can be specified when the table is created with the CREATE TABLE statement, or after the table is created with the ALTER TABLE statement.
They define certain properties that data in a database must comply with. They can apply to a column, a whole table, more than one table or an entire schema. A reliable database system ensures that constraints hold at all times (except possibly inside a transaction, for so called deferred constraints).
Constraints are part of a database schema definition.



#### common constrains:
1. NOT NULL - Ensures that a column cannot have a NULL value
2. UNIQUE - Ensures that all values in a column are different
3. PRIMARY KEY - A combination of a NOT NULL and UNIQUE. Uniquely identifies each row in a table
4. FOREIGN KEY - Uniquely identifies a row/record in another table
5. CHECK - Ensures that all values in a column satisfies a specific condition
6. DEFAULT - Sets a default value for a column when no value is specified



#### What does Relationship mean?
A relationship, in the context of databases, is a situation that exists between two relational database tables when one table has a foreign key that references the primary key of the other table. Relationships allow relational databases to split and store data in different tables, while linking disparate data items.



#### primary key
* The PRIMARY KEY constraint uniquely identifies each record in a database table.
* Primary keys must contain UNIQUE values, and cannot contain NULL values.

* A table can have only one primary key, which may consist of single or multiple fields.

##### when one column as primary key
```
CREATE TABLE Persons (
ID int NOT NULL PRIMARY KEY,
LastName varchar(255) NOT NULL,
FirstName varchar(255),
);
```
```
ALTER TABLE Persons
ADD PRIMARY KEY (ID);
ALTER TABLE Persons
DROP PRIMARY KEY;
```

##### when more column as primary key
```
CREATE TABLE Persons (
ID int NOT NULL,
LastName varchar(255) NOT NULL,
FirstName varchar(255),
CONSTRAINT PK_Person PRIMARY KEY (ID,LastName)
);
```

```
ALTER TABLE Persons
ADD CONSTRAINT PK_Person PRIMARY KEY (ID,LastName);
ALTER TABLE Persons
DROP CONSTRAINT PK_Person;
```

```
CREATE TABLE Persons (
ID int NOT NULL,
LastName varchar(255) NOT NULL,
FirstName varchar(255),
CONSTRAINT PK_Person PRIMARY KEY (ID,LastName)
);
```

* The main purpose of a primary key is to implement a relationship between two tables in a relational database; it's not called a relational database for nothing! More specifically, the primary key is the "target" which a foreign key can reference. You cannot declare a foreign key in table B to relate to table A unless the primary key in table A has been defined.
