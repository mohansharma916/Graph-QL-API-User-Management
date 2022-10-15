# Graph-QL-API-User-Management


How to use it 



Clone the Repository
```
> git clone https://github.com/mohansharma916/Graph-QL-API-User-Management.git

```

install the dependencies

```
npm install

```

link your database to the Node.js app


Go to prisma/prisma.schema

```
datasource db {

  provider = "mysql"
  url      = env("DATABASE_URL")
}

check the DATABASE_URL in .env file




````
 .env File
 
 
 ```
 
 DATABASE_URL="mysql://root:Mohan@1207@localhost:3306/db_test?schema=public"
 
 dont forget to change your database details
 
 
 ```
 
 npx prisma migrate dev
 
 ```
 
 
 Start the server
 
 > npm start
 
 
 
 #API Opearations
 
 
 
 1. Cretae a User
 <img width="1440" alt="Screenshot 2022-10-15 at 12 02 42 PM" src="https://user-images.githubusercontent.com/77909856/195972961-f40ac121-2bcf-418c-a1df-13ee18f36a97.png">
 
 
 
 
