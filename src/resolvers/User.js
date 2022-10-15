function links(parent, args, context) {
    return context.prisma.user.findUnique({ where: { id: parent.id } }).links()
  }

  // function ids(parent, args, context) {
  //   return context.prisma.user.findUnique({ where: { id: parent.id } }).id()
  // }
  
  
  module.exports = {
    links,
  }