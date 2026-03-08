# Around the U.S. (React + API Integration)
Este é um projeto interativo onde os utilizadores podem partilhar fotografias de lugares, curtir as fotos de outros utilizadores e gerir o seu próprio perfil. O projeto foi construído utilizando React e consome uma API externa para persistência de dados.

🚀 Funcionalidades Implementadas

1. Gestão de Perfil e Avatar
Edição de Perfil: Os utilizadores podem atualizar o seu nome e biografia. As alterações são enviadas para a API através de um pedido PATCH.

Atualização de Avatar: Funcionalidade de alteração de imagem de perfil com validação de URL.

2. Gestão de Cartões (Cards)
Listagem Dinâmica: Os cartões são carregados da API e renderizados dinamicamente na página.

Adicionar Lugares: Formulário para adicionar novos cartões com título e link de imagem.

Eliminar com Confirmação: Proteção que abre um popup de confirmação antes de apagar permanentemente um cartão do servidor.

Visualização de Imagem: Popup que expande a imagem do cartão para visualização em ecrã inteiro.

3. Sistema de Interação (Likes)
Contador de Curtidas: Exibe em tempo real o número total de curtidas que cada foto recebeu da comunidade.

Lógica de Estado: O ícone de coração reflete se o utilizador atual já curtiu o cartão, alternando entre os estados ativo/inativo através de pedidos PUT e DELETE à API.

🛠️ Tecnologias Utilizadas
React.js: Biblioteca principal para construção da interface.

Context API: Utilizada para gerir globalmente os dados do utilizador (CurrentUserContext).

CSS Dinâmico: Gestão de estados de visibilidade (popups e botões) através de classes CSS condicionais.

REST API: Integração completa com serviços de backend para operações CRUD.

## 🧱 Project Structure


src/
components/
App/
Header/
Main/
Footer/
Card/
Popup/
NewCard/
EditProfile/
EditAvatar/
ImagePopup/
RemoveCard/
blocks/
images/
index.css
main.jsx


## ⚙️ Installation & Setup

1. Clone the repository:

git clone <repository-url>


2. Navigate into the project directory:

cd web_project_around_react


3. Install dependencies:

npm install


4. Start development server:

npm run dev


The application will open automatically in your browser (default port: 3000).

## 🧠 Features Implemented

- JSX markup conversion from static HTML
- Component-based architecture
- Reusable `Popup` component
- State management using `useState`
- Conditional rendering for pop-ups
- Image preview modal
- Mock card data rendering via `.map()`

## 🗂 Mock Data

Cards are currently rendered using static mock data.  
API integration will be implemented in a future sprint.

## 🎯 Learning Objectives

This project demonstrates:

- Converting HTML to JSX
- Component decomposition
- State lifting
- Passing props between components
- Conditional rendering
- Reusable component patterns
- Clean project structure

## 📌 Future Improvements

- Form validation using controlled components
- API integration
- Like / remove card logic
- Full state management for user data

---

## 👤 Author

Pedro Faustino  
Community Pharmacist transitioning into Web Development  
TripleTen Web Development Program