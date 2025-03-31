# Full-Stack React Auth Template  

This repository contains both the **client** and **server** code for a full-stack authentication system using **React, Tailwind, ShadCN UI, Node.js, Express, and Prisma**.  

## 📂 Project Structure  

```
root/
│── frontend/     # React frontend with Tailwind & ShadCN UI
│── server/       # Express backend with Prisma & JWT authentication
│── README.md     # This file (root README)
```

Each subdirectory contains its own **README.md** file with detailed setup instructions.  

---

## 🚀 Installation  

### 1️⃣ Clone the repository  
```sh
git clone <repo-url>
cd <repo-folder>
```

### 2️⃣ Setup the backend (server)  
```sh
cd server
```
Follow the setup instructions in the **[server/README.md](server/README.md)**.

### 3️⃣ Setup the frontend  
```sh
cd ../client
```
Follow the setup instructions in the **[frontend/README.md](frontend/README.md)**.

---

## 🏃 Running the Project  

1. Start the backend:  
   ```sh
   cd server
   nodemon server.js
   ```

2. Start the frontend:  
   ```sh
   cd ../client
   npm run dev
   ```

---

## 📌 Notes  
- Ensure the **backend** is running before starting the frontend.  
- Update `.env` file in your server according to your setup.  

Happy coding! 🚀  
