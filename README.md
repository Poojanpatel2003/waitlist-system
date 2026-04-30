# 🚀 Waitlist System with Email Notification

## 📌 Overview
This project is a full-stack Waitlist System built using the MERN stack.  
Users can submit their details and receive a confirmation email upon successful registration.

---

## 🛠 Tech Stack

### Frontend
- React.js
- Tailwind CSS
- Axios
- React Hot Toast

### Backend
- Node.js
- Express.js
- MongoDB (Mongoose)
- Nodemailer
- Express Rate Limit

---

## ✨ Features

- User waitlist form (Name, Email, Phone, Message)
- Form validation (required fields + email format)
- Duplicate email prevention
- MongoDB data storage
- Email confirmation using Nodemailer
- Rate limiting for security
- Responsive and modern UI
- Toast notifications for better UX

---


---

⚙️ Setup Instructions

1. Clone the repository

git clone https://github.com/Poojanpatel2003/waitlist-system.git
cd waitlist-system

2. Backend Setup
    cd backend
    npm install

Create .env file:
    PORT=5000
    MONGO_URI=your_mongodb_uri
    EMAIL_USER=your_email
    EMAIL_PASS=your_app_password(not normal password)

Run backend:
    npm run dev

3. Frontend Setup
    cd frontend
    npm install
    npm run dev

🔒 Security Features
    Rate limiting (prevents spam requests)
    Environment variables for sensitive data
    Duplicate email validation

👨‍💻 Author
    Poojan Patel