# 🎓 Gestão Acadêmica - Backend

Este é o backend da aplicação **Gestão Acadêmica**, uma API construída com **NestJS**, **Prisma** e **SQLite** para gerenciar estudantes, matérias e provas.

---

## ⚙️ Tecnologias Utilizadas
- **NestJS** - Framework Node.js para construção de APIs escaláveis.
- **Prisma ORM** - Manipulação do banco de dados SQLite.
- **SQLite** - Banco de dados leve e embutido.
- **TypeScript** - Tipagem estática e melhor estruturação do código.
- **class-validator** e **class-transformer** - Validação e conversão de dados.

---

## 🚀 Como Rodar o Projeto

### **1️⃣ Clonar o Repositório**
```sh
git clone https://github.com/seu-repositorio.git
cd seu-repositorio
```

### **2️⃣ Instalar Dependências**
```sh
npm install
```

### **3️⃣ Configurar o Banco de Dados**
Criar um arquivo **.env** na raiz do projeto e adicionar:
```env
DATABASE_URL="file:./dev.db"
```
Rodar as migrations:
```sh
npx prisma migrate dev --name init
```

### **4️⃣ Rodar o Servidor**
```sh
npm run start:dev
```
A API estará disponível em **http://localhost:3000**

---

## 📜 Estrutura das Entidades
### **Student (Estudantes)**
```json
{
  "id": 1,
  "name": "Fulano de Tal",
  "document": "12345678900",
  "age": 18,
  "gender": "Masculino",
  "turn": "Manhã",
  "grade": 10
}
```
### **Subject (Matérias)**
```json
{
  "id": 1,
  "name": "Matemática"
}
```
### **Exam (Provas)**
```json
{
  "id": 1,
  "score": 9.0,
  "studentId": 1,
  "subjectId": 1
}
```

---

## 🛠️ Rotas da API

### **📌 Students**
- **Criar estudante:** `POST /students`
- **Listar estudantes:** `GET /students`
- **Buscar estudante por ID:** `GET /students/:id`
- **Atualizar estudante:** `PUT /students/:id`
- **Deletar estudante:** `DELETE /students/:id`

### **📌 Subjects**
- **Criar matéria:** `POST /subjects`
- **Listar matérias:** `GET /subjects`
- **Buscar matéria por ID:** `GET /subjects/:id`
- **Atualizar matéria:** `PUT /subjects/:id`
- **Deletar matéria:** `DELETE /subjects/:id`

### **📌 Exams**
- **Criar prova:** `POST /exams`
- **Listar provas:** `GET /exams`
- **Buscar prova por ID:** `GET /exams/:id`
- **Atualizar prova:** `PUT /exams/:id`
- **Deletar prova:** `DELETE /exams/:id`

---

## 📝 **Autor**
Desenvolvido por **Mateus Vinícius da Silva**  
📧 Entre em contato: **mateusviniciusdasilva@outlook.com**  
🔗 [LinkedIn](https://www.linkedin.com/in/mateus-vin%C3%ADcius-da-silva-8156301a5/)

