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


<img width="1417" alt="Screenshot 2022-10-15 at 12 10 46 PM" src="https://user-images.githubusercontent.com/77909856/200296327-ce2590d4-5a63-4c7a-af11-def08ee4d4b8.png">



copy the token code 
 
3.User Can Update his profile details

provide the Token in bottom area as shown

<img width="1436" alt="Screenshot 2022-10-15 at 12 18 48 PM" src="https://user-images.githubusercontent.com/77909856/195973446-83704335-1646-466d-9656-bf64a42dc2e9.png">


4. Delete A user 

<img width="1438" alt="Screenshot 2022-10-15 at 12 20 58 PM" src="https://user-images.githubusercontent.com/77909856/200296193-0d502550-481d-4eff-ac72-44232a9da347.png">





 
