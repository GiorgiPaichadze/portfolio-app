const { PrismaClient } = require('@prisma/client');
const { hash } = require('bcrypt');

// const userData = {
//   username: 'example',
//   email: 'example@gmail.com',
//   password: 'example123',
// };

const prisma = new PrismaClient();

const seedUser = async () => {
  const { email, username, password } = userData;
  const hashedPassword = await hash(password, 10);

  await prisma.user.create({
    data: {
      email,
      username,
      password: hashedPassword,
    },
  });
};

seedUser()
  .catch((error) => {
    throw error;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
