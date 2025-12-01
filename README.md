# T-Shirt Store Frontend (React + Vite)

Modern React frontend for a T-shirt e-commerce store built with Vite, React Router, Zustand, and Tailwind CSS.

## Features

- 🛍️ Product catalog with search and filtering
- 🛒 Shopping cart with persistent storage
- 📱 Responsive design
- 🎨 Modern UI with Tailwind CSS
- ⚡ Fast development with Vite
- 🔄 State management with Zustand
- 🎯 React Router for navigation

## Tech Stack

- **React 18** - UI library
- **Vite** - Build tool
- **React Router** - Routing
- **Zustand** - State management
- **Tailwind CSS** - Styling
- **Axios** - HTTP client
- **React Hot Toast** - Notifications
- **Lucide React** - Icons

## Setup

1. Install dependencies:
```bash
npm install
```

2. Create `.env` file:
```
VITE_API_URL=http://localhost:8000/api
```

3. Start development server:
```bash
npm run dev
```

4. Build for production:
```bash
npm run build
```

## Project Structure

```
src/
├── components/       # Reusable components
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   ├── ProductCard.jsx
│   └── Loading.jsx
├── pages/           # Page components
│   ├── Home.jsx
│   ├── Products.jsx
│   ├── ProductDetail.jsx
│   ├── Cart.jsx
│   ├── Checkout.jsx
│   └── OrderSuccess.jsx
├── store/           # Zustand stores
│   └── cartStore.js
├── lib/             # Utilities
│   └── api.js
├── App.jsx          # Main app component
├── main.jsx         # Entry point
└── index.css        # Global styles
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## API Integration

The frontend connects to the Django backend API. Make sure the backend is running on `http://localhost:8000` or update the `VITE_API_URL` in your `.env` file.

## Features Overview

### Home Page
- Hero section
- Featured products
- Key features showcase

### Products Page
- Product grid
- Search functionality
- Category filtering
- Responsive layout

### Product Detail
- Product images
- Size and color selection
- Quantity selector
- Add to cart functionality

### Shopping Cart
- View cart items
- Update quantities
- Remove items
- Order summary
- Persistent storage

### Checkout
- Customer information form
- Shipping address
- Order summary
- Order placement

### Order Success
- Order confirmation
- Order details
- Tracking information
