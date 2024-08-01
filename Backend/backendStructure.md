/backend
├── /config
│   └── db.js
├── /controllers
│   └── userController.js
├── /models
│   └── userModel.js
├── /routes
│   └── userRoutes.js
├── /middleware
│   └── authMiddleware.js
├── /utils
│   └── errorHandler.js
├── .env
├── .gitignore
├── package.json
├── server.js


{
  "name": "backend",
  "version": "1.0.0",
  "main": "server.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node server.js",
    "server": "nodemon server.js"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "description": "",
  
  "dependencies": {
    "bcryptjs": "^2.4.3",
    "dotenv": "^16.4.5",
    "express": "^4.19.2",
    "express-async-handler": "^1.2.0",
    "jsonwebtoken": "^9.0.2",
    "mongoose": "^8.5.1"
  },
  "devDependencies": {
    "nodemon": "^3.1.4"
  }
}
