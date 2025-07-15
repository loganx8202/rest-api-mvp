📦 RESTful User API with Node.js, Express & MVP Architecture
A simple RESTful API built using Node.js, Express, and MVP architecture for managing a list of users. It supports full CRUD operations with proper request validation, logging middleware, and error handling.

📁 Project Structure (MVP Pattern)
rest-api-mvp/
│
├── controllers/         # Presenter logic
│   └── userController.js
│
├── models/              # In-memory data
│   └── userModel.js
│
├── routes/              # Route declarations
│   └── userRoutes.js
│
├── middleware/          # Custom middleware
│   ├── logger.js
│   └── validateUser.js
│
├── app.js               # Entry point
├── package.json
└── README.md

🚀 Getting Started
1. Clone the Repository
      git clone https://github.com/loganx8202/rest-api-mvp
      cd rest-api-mvp
   
3. Install Dependencies
      npm install
4. Run the Server
      npm run start
      This will start the server at:
      http://localhost:3000
   
📌 Sample User Structure

{
  "id": "1",
  "firstName": "Anshika",
  "lastName": "Agarwal",
  "hobby": "Teaching"
}

📮 API Endpoints
      Method	Endpoint	Description
      GET	/users	Get all users
      GET	/users/:id	Get user by ID
      POST	/users	Add a new user
      PUT	/users/:id	Update an existing user
      DELETE	/users/:id	Delete a user by ID

🧪 How to Test (Thunder Client / Postman)
  ✅ 1. GET All Users
  URL: http://localhost:3000/users
  
  ✅ 2. POST New User
  URL: http://localhost:3000/users
  Body (JSON): {
      "id": "2",
      "firstName": "Neha",
      "lastName": "Singh",
      "hobby": "Reading"
    }
  ✅ 3. GET User by ID
  URL: http://localhost:3000/users/2
  
  ✅ 4. PUT Update User
  URL: http://localhost:3000/users/2
  Body (JSON): {
      "firstName": "Neha",
      "lastName": "Iyer",
      "hobby": "Music"
    }
  ✅ 5. DELETE User
    URL: http://localhost:3000/users/2
----------------------------------------------------------------------------------------------------------------
🧰 Features
✅ Clean MVP structure (Model-View-Presenter)

✅ Middleware for request logging

✅ Input validation for POST and PUT

✅ Proper status codes & error handling

✅ Nodemon for auto-reloading during development

------------------------------------------------------------------------------------------------------------------

🧑‍💻 Author
Neuton Mondal
📧 nm8202@gmail.com
📍 Mumbai, India

