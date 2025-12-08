🌿 Amrutam Consumer Portal – Frontend Assignment

This project is developed as part of the Front-End Developer Assignment for Amrutam.
It replicates a real e-commerce flow using React.js with clean UI, responsive design, and a component-driven architecture.

📌 Project Overview

The goal of this assignment is to implement 10 functional pages from the Amrutam consumer portal using React, based on the provided Figma design system. This front-end simulates a natural shopping experience including product browsing, authentication, cart management, and checkout.

No backend is used; all functionality is implemented using React Router, Context API, and static data.

🧩 Pages Implemented (10 Total)
Page	Description
Home	Brand-themed landing page with hero & sections
Products	Grid of all available products
Product Details	Detailed view using dynamic routes
Cart	Add/remove items, update quantity
Checkout	Login required, single address flow
Login	User authentication (context-based)
Signup	Create account simulation
Profile	User details + stored address
Orders	Display previous orders
Order Details	Detailed summary of a selected order
⚙️ Core Features
🛒 Cart Functionality

Add to cart

Remove item

Update quantity

Total price auto-calculation

🔐 Authentication (Frontend Simulation)

Login required for checkout

User stored in AuthContext

Only one saved address per user

🎨 UI/UX

Clean Ayurvedic-themed design

Reusable button, card, and layout components

Fully responsive using Flexbox + Grid

Images managed through local assets

🧭 Routing

Clean, structured routing using React Router

Dynamic product pages (/products/:id)

🛠️ Tech Stack
Category	Technology
Frontend Framework	React.js (Vite)
Routing	React Router DOM
State Management	Context API
Styling	Custom CSS (responsive)
Data	Local JS files (products, orders)
Tools	JSX, ES Modules, Vite Dev Server
📁 Project Structure
src/
  assets/images/       → Product images
  components/          → Navbar, Footer, Layout, ProductCard
  context/             → AuthContext, CartContext
  pages/               → All 10 assignment screens
  data/                → Static products & orders
  App.jsx              → Main routing
  main.jsx             → Providers + App mount
  index.css            → Global styling system

🧠 Development Approach & Thought Process

Divided UI into reusable components for maintainability

Used Context API instead of Redux to keep the project lightweight

Designed a natural consumer flow:
Home → Products → Product Details → Cart → Login → Checkout → Orders

Created a consistent design system using CSS variables for spacing, colors, and typography

Ensured responsive UI across mobile, tablet, and desktop

Used semantic HTML for accessibility and SEO

🔍 Key Decisions & Why They Were Made
✔ Context API over Redux

Simpler, more efficient for small to medium projects.

✔ One saved address per user

Matches typical checkout flows and simplifies UI.

✔ React Router for navigation

Clean separation of pages and dynamic routes.

✔ Component-driven design

Ensures readability and scalability for real-world growth.

🚀 How to Run the Project Locally
1️⃣ Clone the repository
git clone https://github.com/vk57434/amrutam-frontend.git
cd amrutam-frontend

2️⃣ Install dependencies
npm install

3️⃣ Start development server
npm run dev

4️⃣ Build for production
npm run build


🙏 Conclusion

This assignment demonstrates full capability in building a modern, responsive, and user-focused React application with clean architecture and intuitive workflows.

Thank you for reviewing this project.
