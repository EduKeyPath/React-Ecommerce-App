# React E-Commerce App (React v17.0.2 + Redux + Bootstrap + Stripe)

This is a fully functional **React e-commerce application** built using **React v17.0.2**, **Bootstrap**, and **Stripe payment integration**.  
It includes login, cart functionality, product zoom and navigation, and checkout — all powered by a static `data.json` file.

---

## Features

### Authentication
- **Login Page** – Simple login (no backend, just mock authentication)
- **Protected Routes** – Only accessible after login

### Product Features
- **Product Listing Page** – Displays products from `data.json`
- **Product Details Page**
  - Image zoom on hover
  - Next/Previous product navigation
  - "Add to Cart" functionality
  - "Similar Products" section at the bottom

### Cart Functionality
- View products added to cart
- Update quantity
- Remove items
- Cart total calculation

### Checkout & Payment
- **Stripe payment integration**
- Mock order summary
- **Success Page** shown after payment

### UI Design
- All pages styled using **Bootstrap**
- Additional custom CSS for specific components

---


## Getting Started

### 1. Clone the Repository
`bash`
git `clone path`
cd `project_folder_name`

## Install Dependencies
`npm install`

## Start the Development Server
`npm start`

Visit: http://localhost:3000


---

## Stripe Setup
- Stripe integrated via @stripe/react-stripe-js and @stripe/stripe-js
- You must replace the Stripe publishable key in the code with your own.

## Notes
- No database or backend — all product data is loaded from data.json
- Login is just mock logic for demo purposes (no real auth)

## Contributions
This project is for educational/demo purposes.
Thanks for checking it out!



