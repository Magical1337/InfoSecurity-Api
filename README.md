## 🚀 Node.js REST API with JWT Authentication & MySQL  

This is a **secure REST API** built with **Node.js, Express, Sequelize, and MySQL**, featuring **JWT authentication** and **bcrypt password hashing**. The API allows user registration, login, and access to protected routes.

### 🔥 Features  
✅ **User Authentication** (Register & Login)  
✅ **JWT-based Authorization**  
✅ **Password Hashing with bcrypt.js**  
✅ **MySQL Database with Sequelize ORM**  
✅ **Middleware for Protected Routes**  

### 📂 Project Structure  
```
📦 rest-api  
 ┣ 📂 config  
 ┃ ┗ 📜 db.js            # Database connection  
 ┣ 📂 models  
 ┃ ┗ 📜 User.js          # User model  
 ┣ 📂 routes  
 ┃ ┗ 📜 auth.js          # Authentication routes  
 ┣ 📜 .env               # Environment variables  
 ┣ 📜 server.js          # Entry point  
 ┗ 📜 package.json       # Dependencies  
```

### 🔧 Installation & Setup  
1️⃣ Clone the repo:  
   ```sh
   git clone https://github.com/your-username/rest-api-jwt.git  
   cd rest-api-jwt  
   ```

2️⃣ Install dependencies:  
   ```sh
   npm install  
   ```

3️⃣ Configure `.env`:  
   ```env
   DB_NAME=your_database  
   DB_USER=your_user  
   DB_PASS=your_password  
   DB_HOST=localhost  
   JWT_SECRET=your_secret_key  
   ```

4️⃣ Start the server:  
   ```sh
   node server.js  
   ```

### 🔑 API Endpoints  
| Method | Endpoint          | Description        | Authentication |
|--------|------------------|--------------------|---------------|
| POST   | `/auth/register` | Register a user   | ❌ No         |
| POST   | `/auth/login`    | Login & get token | ❌ No         |
| GET    | `/protected`     | Test protected route | ✅ Yes (JWT) |

### 📌 Usage  
1️⃣ **Register a user:**  
   ```json
   POST /auth/register  
   { "username": "test", "email": "test@example.com", "password": "123456" }
   ```
   
2️⃣ **Login to get JWT:**  
   ```json
   POST /auth/login  
   { "email": "test@example.com", "password": "123456" }
   ```

3️⃣ **Access a protected route:**  
   ```sh
   GET /protected  
   Authorization: Bearer your_jwt_token  
   ```
