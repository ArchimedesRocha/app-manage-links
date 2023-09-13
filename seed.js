const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function seedDatabase() {
  try {
    // Inserir 5 links fictícios
    const links = [
      { title: 'Link 1', url: 'https://www.example.com/link1' },
      { title: 'Link 2', url: 'https://www.example.com/link2' },
      { title: 'Link 3', url: 'https://www.example.com/link3' },
      { title: 'Link 4', url: 'https://www.example.com/link4' },
      { title: 'Link 5', url: 'https://www.example.com/link5' },
    ];

    for (const link of links) {
      await prisma.link.create({
        data: link,
      });
    }

    console.log('Dados fictícios inseridos com sucesso!');
  } catch (error) {
    console.error('Erro ao inserir dados fictícios:', error);
  } finally {
    await prisma.$disconnect();
  }
}

seedDatabase();
