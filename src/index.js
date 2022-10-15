const { ApolloServer } = require('apollo-server');
const fs = require('fs');
const path = require('path');
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()
const { getUserId } = require('./utils');
const Query = require('./resolvers/Query')
const Mutation = require('./resolvers/Mutation')
const User = require('./resolvers/User')
const Link = require('./resolvers/Link')


// ****************************************************
// **************Links*****************************
// ************************************************
let links = [{
    id: 'link-0',
    url: 'mohan.ssharma2017@gmail.com',
    description: 'Project for Bird Soft'
  }]

// ****************************************************
// **************Resolvers*****************************
// ************************************************
const resolvers = {
    Query,
    Mutation,
    User,
    Link
  }

// ****************************************************
// **************Server*****************************
// ************************************************
const server = new ApolloServer({
    typeDefs: fs.readFileSync(
        path.join(__dirname, 'schema.graphql'),
        'utf8'
      ),
  resolvers,
  context: ({ req }) => {
    return {
      ...req,
      prisma,
      userId:
        req && req.headers.authorization
          ? getUserId(req)
          : null
    };
  }
})

server
  .listen()
  .then(({ url }) =>
    console.log(`Server is running on ${url}`)
  );