# FarmSure – Contract Farming Platform (Frontend)

FarmSure is a React-based frontend application designed to facilitate **contract farming** by connecting **landowners** and **farmers** through a transparent and user-friendly digital platform. The application focuses on authentication flow, protected routing, and a scalable dashboard architecture that is fully ready for backend integration.

This project is developed as part of an academic / practical learning initiative and follows modern frontend best practices.

---

## 🚜 Problem Statement

In traditional contract farming systems, farmers and landowners face challenges such as lack of transparency, inefficient communication, and absence of a centralized platform to manage agreements. FarmSure aims to address these issues by providing a digital interface where:

* Farmers can discover available lands
* Landowners can find suitable farmers
* Both parties can initiate contract-based farming interactions

---

## ✨ Features

* OTP-based authentication flow
* Protected routing for secure access
* Interactive dashboard architecture
* Role-based dashboard views (Farmer / Landowner)
* Loading and empty-state handling
* Responsive UI using Bootstrap
* Modular and scalable component structure
* Backend-ready architecture (API integration pending)

---

## 🧱 Tech Stack

* **Frontend Framework:** React.js
* **Routing:** React Router DOM
* **UI Library:** React Bootstrap
* **State Management:** React Hooks
* **Build Tool:** Vite

---

## 🗂️ Project Structure

```
src/
│
├── components/        # Reusable UI components (Navbar, Footer, etc.)
├── pages/             # Page-level components (Landing, Login, OTP, Dashboard)
├── routes/            # Application routing and protected routes
├── assets/            # Images and static assets
├── App.jsx            # Root component
├── main.jsx           # Application entry point
```

---

## 🔐 Authentication Flow

1. User lands on the **Landing Page**
2. Navigates to **Login Page**
3. Receives and enters **OTP**
4. OTP is verified (simulated)
5. User is redirected to **Dashboard**
6. Dashboard route is protected from unauthorized access

---

## 📊 Dashboard Design

The dashboard is designed to support **two roles**:

* **Farmer View:** Displays available lands for contract farming
* **Landowner View:** Displays available farmers for leasing land

Currently, the dashboard handles:

* Loading state
* Empty state (no data available)

This ensures the UI remains stable until backend data is integrated.

---

## ⚙️ Installation & Setup

```bash
# Clone the repository
git clone https://github.com/your-username/farmsure-frontend.git

# Navigate to project directory
cd farmsure-frontend

# Install dependencies
npm install

# Start development server
npm run dev
```

---

## 🚀 Future Enhancements

* Backend integration (API & database)
* Real OTP service
* Contract creation and management
* User profiles and verification
* Search and filter functionality
* Notifications and status tracking

---

## 📘 Academic / Viva Explanation

FarmSure demonstrates a complete frontend workflow including authentication, protected routing, conditional rendering, and scalable UI architecture. The project is backend-ready and follows industry-standard React development practices, making it suitable for real-world extension.

---

## 👨‍💻 Author

**Nirmalkumar C**
Frontend Developer | React Enthusiast

---

## 📄 License

This project is developed for educational purposes.
