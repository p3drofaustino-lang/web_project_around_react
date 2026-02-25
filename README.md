# Around The U.S. — React Version

A React-based refactor of the original Around The U.S. project.  
This project was developed as part of the TripleTen Web Development program.

## 📖 Overview

This application recreates the Around The U.S. interface using React functional components and hooks.  
The project focuses on component structure, state management, and reusable pop-up architecture.

The application renders:

- User profile section
- List of image cards (mock data)
- Multiple pop-ups (Edit Profile, Edit Avatar, New Card, Image Preview, Remove Card)

## 🚀 Technologies Used

- React (Functional Components)
- Vite
- JavaScript (ES6+)
- CSS (BEM methodology)
- JSX

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