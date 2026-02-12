# 🐾 API de Gestão de Pets - Growdev

## 💻 Sobre o Projeto

Esta API RESTful foi desenvolvida com o objetivo de gerenciar o cadastro de pets (CRUD), permitindo listar, adicionar, atualizar e remover registros.

O projeto foi criado como parte das atividades práticas do **Programa Veste Tech**, conduzido pela **Growdev**, visando consolidar os conhecimentos em desenvolvimento Backend com Node.js e arquitetura de software.

---

## 🔗 Links Úteis

Aqui estão os endereços para acessar a aplicação rodando em produção e sua documentação:

- **🔗 URL Base da API (Render):**

  > [https://api-pets-growdev.onrender.com](https://api-pets-growdev.onrender.com)

- **📄 Documentação Completa (Postman):**
  > [Clique aqui para acessar a Documentation](COLE_O_SEU_LINK_DO_POSTMAN_AQUI)

---

## 🛠 Tecnologias Utilizadas

O projeto foi desenvolvido utilizando as seguintes tecnologias:

- **[Node.js](https://nodejs.org/en/)**: Ambiente de execução JavaScript.
- **[Express](https://expressjs.com/)**: Framework para construção da API.
- **[UUID](https://www.npmjs.com/package/uuid)**: Para geração de identificadores únicos.
- **[Dotenv](https://www.npmjs.com/package/dotenv)**: Gerenciamento de variáveis de ambiente.
- **[Nodemon](https://nodemon.io/)**: Auxiliar de desenvolvimento (hot-reload).

---

## ⚙️ Funcionalidades

- [x] **Cadastro de Pets**: Adiciona um novo pet com nome, raça e idade.
- [x] **Listagem Geral**: Retorna todos os pets cadastrados.
- [x] **Busca por ID**: Retorna os detalhes de um pet específico.
- [x] **Atualização**: Permite alterar os dados de um pet existente.
- [x] **Remoção**: Deleta um pet do sistema.

---

## 🚀 Como Rodar o Projeto Localmente

Siga os passos abaixo para executar a API na sua máquina:

### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina o [Git](https://git-scm.com) e o [Node.js](https://nodejs.org/en/).

### Passo a passo

```bash
# 1. Clone o repositório
$ git clone [https://github.com/fabricio-milanio/api-pets-growdev.git](https://github.com/fabricio-milanio/api-pets-growdev.git)

# 2. Acesse a pasta do projeto no terminal/cmd
$ cd api-pets-growdev

# 3. Instale as dependências
$ npm install

# 4. Crie um arquivo .env na raiz do projeto e defina a porta (opcional)
# Exemplo: PORT=3000

# 5. Execute a aplicação em modo de desenvolvimento
$ npm run dev

# O servidor iniciará na porta:3000 - acesse http://localhost:3000/pets
```
