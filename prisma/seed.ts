import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const ezra = await prisma.user.upsert({
    where: { id: 1 },
    update: {},
    create: {
      id: 1,
      name: 'Muhammad Ezra Rizkiatama Putra',
      nickname: 'Ezra',
      photo: '/src/assets/images/ezra.jpeg',
      short_bio: 'Book lover, coffee enthusiast, and adventure seeker.',
      description:
        'Lorem ipsum odor amet, consectetuer adipiscing elit. Semper pretium mattis dictumst risus, ex ornare.' +
        'Id sem varius mattis laoreet egestas enim ut. Tristique maximus senectus arcu inceptos semper interdum massa. ' +
        'Tristique ornare maecenas ante congue etiam. Eleifend in vehicula vehicula potenti rutrum lobortis aptent. ' +
        'Aenean donec vehicula tincidunt eget velit luctus curabitur lacus. Dapibus tempus nunc euismod platea erat. ' +
        'Sem senectus felis faucibus parturient dapibus aenean.' +
        '\n\n' +
        'Lorem hendrerit nisi porta mauris penatibus nec nullam sagittis ut. Praesent nunc quis at; nec elit dis potenti.' +
        'Diam vulputate blandit volutpat quis tempus. Cras aenean vehicula; mus laoreet amet orci. ' +
        ' Diam nulla torquent suscipit feugiat tellus, enim ante quis. ' +
        'Potenti consequat curabitur feugiat curae pellentesque sapien.' +
        'At nascetur semper inceptos commodo adipiscing phasellus hac.',
      instagram_link: 'https://instagram.com/ezrarizkiatama',
      facebook_link: 'https://facebook.com/erizkiatama',
      twitter_link: 'https://twitter.com/ezrarizkiatama',
    },
  });
  const salsa = await prisma.user.upsert({
    where: { id: 2 },
    update: {},
    create: {
      id: 2,
      name: 'Hefa Salsabila Iskandar',
      nickname: 'Salsa',
      photo: '/src/assets/images/salsa.jpeg',
      short_bio: 'Film buff, culinary explorer, and photography hobbyist.',
      description:
        'Lorem ipsum odor amet, consectetuer adipiscing elit. Semper pretium mattis dictumst risus, ex ornare.' +
        'Id sem varius mattis laoreet egestas enim ut. Tristique maximus senectus arcu inceptos semper interdum massa. ' +
        'Tristique ornare maecenas ante congue etiam. Eleifend in vehicula vehicula potenti rutrum lobortis aptent. ' +
        'Aenean donec vehicula tincidunt eget velit luctus curabitur lacus. Dapibus tempus nunc euismod platea erat. ' +
        'Sem senectus felis faucibus parturient dapibus aenean.' +
        '\n\n' +
        'Lorem hendrerit nisi porta mauris penatibus nec nullam sagittis ut. Praesent nunc quis at; nec elit dis potenti.' +
        'Diam vulputate blandit volutpat quis tempus. Cras aenean vehicula; mus laoreet amet orci. ' +
        ' Diam nulla torquent suscipit feugiat tellus, enim ante quis. ' +
        'Potenti consequat curabitur feugiat curae pellentesque sapien.' +
        'At nascetur semper inceptos commodo adipiscing phasellus hac.',
      instagram_link: 'https://instagram.com/hefasalsabila',
      facebook_link: 'https://facebook.com/hefa.salsabila',
      twitter_link: 'https://twitter.com/hefasalsabila',
    },
  });
  console.log({ ezra, salsa });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
