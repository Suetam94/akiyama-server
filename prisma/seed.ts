import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Populando o banco de dados...');

  await prisma.subject.createMany({
    data: [
      { name: 'Matemática' },
      { name: 'Português' },
      { name: 'História' },
      { name: 'Geografia' },
      { name: 'Ciências' },
      { name: 'Física' },
      { name: 'Química' },
      { name: 'Biologia' },
      { name: 'Inglês' },
      { name: 'Educação Física' },
    ],
  });

  console.log('📚 Matérias criadas!');

  await prisma.student.createMany({
    data: [
      {
        name: 'Lucas Oliveira',
        document: '11111111111',
        age: 15,
        gender: 'Masculino',
        turn: 'Manhã',
        grade: 9,
      },
      {
        name: 'Ana Souza',
        document: '22222222222',
        age: 16,
        gender: 'Feminino',
        turn: 'Tarde',
        grade: 10,
      },
      {
        name: 'João Santos',
        document: '33333333333',
        age: 14,
        gender: 'Masculino',
        turn: 'Manhã',
        grade: 8,
      },
      {
        name: 'Mariana Lima',
        document: '44444444444',
        age: 17,
        gender: 'Feminino',
        turn: 'Noite',
        grade: 11,
      },
      {
        name: 'Pedro Ferreira',
        document: '55555555555',
        age: 18,
        gender: 'Masculino',
        turn: 'Tarde',
        grade: 12,
      },
    ],
  });

  console.log('👨‍🎓 Estudantes criados!');

  const studentList = await prisma.student.findMany();
  const subjectList = await prisma.subject.findMany();

  for (const student of studentList) {
    for (const subject of subjectList.slice(0, 3)) {
      await prisma.exam.create({
        data: {
          score: Math.random() * 10,
          studentId: student.id,
          subjectId: subject.id,
        },
      });
    }
  }

  console.log('📝 Provas criadas!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => {
    void prisma.$disconnect();
  });
