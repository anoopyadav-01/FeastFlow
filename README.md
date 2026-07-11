# 🍔 FeastFlow -->>Food Delivery Web Application

A full-stack Food Delivery platform built using React, Node.js, Express, and MongoDB. The application allows customers to browse food items, add products to their cart, place orders, make payments, and track order history. It also includes a dedicated admin panel for managing food items and customer orders.

---

## 🚀 Features

### Customer Features

* User Registration & Login
* JWT Authentication
* Browse Food Menu
* Search Food Items
* Add/Remove Items from Cart
* Place Orders
* Secure Online Payment using Stripe
* View Order History
* Responsive User Interface

### Admin Features

* Add New Food Items
* Upload Food Images
* View All Food Items
* Delete Food Items
* Manage Customer Orders
* Update Order Status

---

## 🛠️ Tech Stack

### Frontend

* React.js
* React Router DOM
* Axios
* CSS

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT Authentication
* Bcrypt
* Multer
* Stripe Payment Gateway

---

## 📂 Project Structure

```text
myreactproject_01/
│
├── frontend/                 # Customer Frontend
├── admin/                 # Admin Dashboard
├── backend/               # Express Backend API
│
├── uploads/               # Uploaded Food Images
└── README.md
```

---

## ⚙️ Installation

### 1. Clone the Repository

```bash
git clone https://github.com/anoopyadav-01/FeastFlow.git

```

### 2. Install Dependencies

npm install

---

## 🔑 Environment Variables

Create a `.env` file inside the `backend` folder.

```env
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
STRIPE_SECRET_KEY=your_stripe_secret_key
```

---

## ▶️ Running the Application

### Start Backend Server

```bash
cd backend
npm run server
```

Server runs on:

```text
http://localhost:4000
```

### Start Frontend

```bash
cd frontend
npm start
```

Frontend runs on:

```text
http://localhost:3000
```

### Start Admin Dashboard

```bash
cd admin
npm run dev
```

Admin panel runs on:

```text
http://localhost:5173
```



## 🔒 Security Features

* Password Hashing using Bcrypt
* JWT-based Authentication
* Protected Routes
* Secure Payment Processing with Stripe

---

---

## 👨‍💻 Author

Developed as a Full Stack MERN Food Delivery Application project using React, Node.js, Express, MongoDB, and Stripe.
