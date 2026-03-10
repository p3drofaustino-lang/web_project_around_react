# Around the U.S. — React Version

## Description

This project is a React version of the **Around the U.S.** web application.
It allows users to view, like, delete, and create location cards, as well as edit their profile and avatar.

The application communicates with a backend API to store and retrieve user data and cards. React state, hooks, and Context API are used to manage application state and share user data across components.

This project was developed as part of the **TripleTen Web Development Program**.

---

## Technologies Used

* React
* JavaScript (ES6+)
* Vite
* CSS (BEM methodology)
* REST API
* React Hooks

  * useState
  * useEffect
  * useContext
  * useRef
* Context API

---

## Features

### User Profile

* View user profile information
* Edit profile name and description
* Update user avatar

### Cards

* Display cards retrieved from the API
* Add new cards
* Delete cards
* Like and unlike cards

### Popups

* Image preview popup
* Edit profile popup
* Edit avatar popup
* Add new card popup

### State Management

* User data is shared using **React Context**
* Cards are managed in the root component and passed down via props

---

## Project Structure

src/

```
components/
Card/
EditAvatar/
EditProfile/
Footer/
Header/
ImagePopup/
Main/
NewCard/
Popup/

contexts/
CurrentUserContext.js

utils/
api.js
```

---

## API

The application communicates with the TripleTen Around API.

Example endpoints used:

* GET /users/me
* PATCH /users/me
* PATCH /users/me/avatar
* GET /cards
* POST /cards
* DELETE /cards/:id
* PUT /cards/:id/likes
* DELETE /cards/:id/likes

---

## Running the Project

Clone the repository:

```
git clone <repository-url>
```

Install dependencies:

```
npm install
```

Start the development server:

```
npm run dev
```

Open in browser:

```
http://localhost:5173
```

---

## Future Improvements

Possible improvements for the project include:

* Form validation
* Loading indicators for API requests
* Confirmation popup before deleting cards
* Error handling for failed requests
* Code optimization and component reuse

---

## Author

Pedro Faustino
TripleTen Web Development Student
