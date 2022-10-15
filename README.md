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
 
 ```
 
 dont forget to change your database details
 
 
 ```
 
 npx prisma migrate dev
 
 ```
 
 
 Start the server
 
 > npm start
 
 
 
 #API Opearations
 
 
 
 1. Cretae a User
 
 
<img width="1437" alt="Screenshot 2022-10-15 at 12 06 35 PM" src="https://user-images.githubusercontent.com/77909856/195973067-c60c364b-8e93-419c-8040-d52dd8681dfc.png">


2. Login User

<img width="1432" alt="Screenshot 2022-10-15 at 12 09 44 PM" src="https://user-images.githubusercontent.com/77909856/195973147-e6ccfcb8-beb6-4656-b7ce-e19a2b67b8ca.png">

copy the token code 
 
 
