# Product Store – PERN Stack Application

A full-stack product management application built using PostgreSQL (NeonDB), Express.js, React.js, and Node.js.
It enables users to efficiently create, update, delete, and view products through secure, well-structured APIs. 
The project includes optimized production builds and is designed for seamless deployment in modern cloud environments.


## ⭐ Features

🛠 Full CRUD functionality for managing products

🗄 RESTful API built using Express.js

🎨 Modern frontend built with React + Vite, styled using Tailwind CSS & DaisyUI

🛡 Enhanced security with Helmet, CORS, and environment variable handling

💾 PostgreSQL (NeonDB) used as a cloud-hosted relational database

📦 Smooth production and development mode configuration for deployment-ready builds


## 📸 Screenshots

### 🏠 Home Page
<img src="https://raw.githubusercontent.com/Aniketpalve02/PERN-Product-Store/refs/heads/main/ScreenShots/Product-Store-Home.png" width="700"/>

### ➕ Add New Product
<img src="https://raw.githubusercontent.com/Aniketpalve02/PERN-Product-Store/refs/heads/main/ScreenShots/Add-New-Product.png" width="700"/>

### ✏️ Update Product
<img src="https://raw.githubusercontent.com/Aniketpalve02/PERN-Product-Store/refs/heads/main/ScreenShots/Update-Products.png" width="700"/>

### 🎨 Change Theme
<img src="http://raw.githubusercontent.com/Aniketpalve02/PERN-Product-Store/refs/heads/main/ScreenShots/Change-Theme.png" width="700"/>



## Demo

https://pern-product-store-j87z.onrender.com/


## Tech Stack

### 🎨 Frontend

| Technology                                                                                         | Description                         |
| -------------------------------------------------------------------------------------------------- | ----------------------------------- |
| ![React](https://img.shields.io/badge/React-20232A?logo=react\&logoColor=61DAFB)                   | Component-based UI development      |
| ![Vite](https://img.shields.io/badge/Vite-646CFF?logo=vite\&logoColor=white)                       | Lightning-fast build tool           |
| ![Axios](https://img.shields.io/badge/Axios-5A29E4?logo=axios\&logoColor=white)                    | HTTP client for API communication   |
| ![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-06B6D4?logo=tailwindcss\&logoColor=white) | Utility-first responsive styling    |
| ![DaisyUI](https://img.shields.io/badge/DaisyUI-5A0EF5?logo=daisyui\&logoColor=white)              | Tailwind-based UI component library |

### ⚙️ Backend

| Technology                                                                                     | Description                          |
| ---------------------------------------------------------------------------------------------- | ------------------------------------ |
| ![Node.js](https://img.shields.io/badge/Node.js-339933?logo=node.js\&logoColor=white)          | JavaScript runtime for backend logic |
| ![Express](https://img.shields.io/badge/Express.js-000000?logo=express\&logoColor=white)       | Fast and minimalist web framework    |
| ![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?logo=postgresql\&logoColor=white) | Relational database (NeonDB Cloud)   |
| ![Helmet](https://img.shields.io/badge/Helmet.js-000000?logo=helmet\&logoColor=white)          | Security middleware                  |
| ![CORS](https://img.shields.io/badge/CORS-FF8800?logoColor=white)                              | Cross-origin resource sharing        |
| ![Morgan](https://img.shields.io/badge/Morgan-00A86B?logoColor=white)                          | HTTP request logger                  |


## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

```bash
PORT=3000
PGHOST=your_neondb_host
PGDATABASE=your_database
PGUSER=your_user
PGPASSWORD=your_password
ARCJET_KEY=your_arcjet_key
NODE_ENV=production
```


## Installation

Install project with npm

```bash
  npm install
  npm run dev
```
Run the frontend

```bash
  cd frontend
  npm install
  npm run dev
```
    
