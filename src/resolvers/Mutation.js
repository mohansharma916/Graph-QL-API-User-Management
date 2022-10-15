const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { APP_SECRET, getUserId } = require('../utils')

// ****************************************************
// **************Sign up*****************************
// ************************************************
async function signup(parent, args, context, info) {
    const password = await bcrypt.hash(args.password, 10)
    const user = await context.prisma.user.create({ data: { ...args, password } })
    const token = jwt.sign({ userId: user.id }, APP_SECRET)
    return {
      token,
      user,
    }
  }

  // ****************************************************
// **************Login*****************************
// ************************************************
  async function login(parent, args, context, info) {
    const user = await context.prisma.user.findUnique({ where: { email: args.email } })
    if (!user) {
      throw new Error('No such user found')
    }
    const valid = await bcrypt.compare(args.password, user.password)
    if (!valid) {
      throw new Error('Invalid password')
    }
    const token = jwt.sign({ userId: user.id }, APP_SECRET)
    return {
      token,
      user,
    }
  }
  // ****************************************************
// **************POST*****************************
// ************************************************

// async function post(parent, args, context, info) {
//   const { userId } = context;

//   return await context.prisma.link.create({
//     data: {
//       url: args.url,
//       description: args.description,
//       postedBy: { connect: { id: userId } },
//     }
//   })
// }

//*************************************
// ************************Delete *************/   
async function deleteUser(parent,args,context,info) {
  const {userId}=context;
  if(!userId){
    throw new Error('deletion not possible')
  }
  else{
    return await context.prisma.user.delete({ 
        where: { id: parseInt(args.id)},
        
    }
    )}
  }
//******************************************
// ************************update user *************/   


async function updateUser(parent,args,context,info) {
  const {userId}=context;
  if(!userId){
    throw new Error('updation not possible')
  }
  else{
    return await context.prisma.user.update({where: { id: parseInt(args.id)},
        data: {
            name:args.name,
            email:args.email,
            password:await bcrypt.hash(args.password, 10)
         } 
         
    })}

  }




//   *****************************
// *************Exporting**********
  module.exports = {
    signup,
    login,
    deleteUser,
    updateUser
  }