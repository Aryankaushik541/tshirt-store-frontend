# T-Shirt Store Frontend Setup Guide

## Prerequisites

- Node.js 16 or higher
- npm or yarn package manager

## Installation Steps

### 1. Clone the Repository

```bash
git clone https://github.com/Aryankaushik541/tshirt-store-frontend.git
cd tshirt-store-frontend
```

### 2. Install Dependencies

```bash
npm install
# or
yarn install
```

### 3. Environment Configuration

Create a `.env` file in the root directory:

```env
VITE_API_URL=http://localhost:8000/api
```

For production:
```env
VITE_API_URL=https://your-api-domain.com/api
```

### 4. Run Development Server

```bash
npm run dev
# or
yarn dev
```

The application will be available at `http://localhost:3000`

### 5. Build for Production

```bash
npm run build
# or
yarn build
```

The production build will be in the `dist` folder.

### 6. Preview Production Build

```bash
npm run preview
# or
yarn preview
```

## Project Structure

```
tshirt-store-frontend/
├── public/              # Static assets
├── src/
│   ├── components/      # Reusable components
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── ProductCard.jsx
│   │   └── Loading.jsx
│   ├── pages/          # Page components
│   │   ├── Home.jsx
│   │   ├── Products.jsx
│   │   ├── ProductDetail.jsx
│   │   ├── Cart.jsx
│   │   ├── Checkout.jsx
│   │   └── OrderSuccess.jsx
│   ├── store/          # State management
│   │   └── cartStore.js
│   ├── lib/            # Utilities
│   │   └── api.js
│   ├── App.jsx         # Main app component
│   ├── main.jsx        # Entry point
│   └── index.css       # Global styles
├── index.html
├── package.json
├── vite.config.js
└── tailwind.config.js
```

## Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint for code quality

## Features

### 🏠 Home Page
- Hero section with call-to-action
- Featured products showcase
- Key features display

### 🛍️ Products Page
- Product grid layout
- Search functionality
- Category filtering
- Responsive design

### 📦 Product Detail
- High-quality product images
- Size and color selection
- Quantity selector
- Stock availability
- Add to cart functionality

### 🛒 Shopping Cart
- View all cart items
- Update quantities
- Remove items
- Order summary
- Persistent storage (localStorage)

### 💳 Checkout
- Customer information form
- Shipping address
- Order summary
- Form validation

### ✅ Order Success
- Order confirmation
- Order details display
- Order tracking information

## Customization

### Styling

The project uses Tailwind CSS. Customize colors in `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      primary: '#2563eb',  // Change primary color
      secondary: '#64748b', // Change secondary color
    }
  },
}
```

### API Configuration

Update API endpoints in `src/lib/api.js`:

```javascript
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000/api'
```

## Troubleshooting

### Port Already in Use

Change the port in `vite.config.js`:

```javascript
server: {
  port: 3001, // Change to desired port
}
```

### API Connection Issues

1. Ensure backend is running
2. Check CORS settings in backend
3. Verify API_URL in `.env` file
4. Check browser console for errors

### Build Errors

```bash
# Clear node_modules and reinstall
rm -rf node_modules
npm install

# Clear cache
npm cache clean --force
```

## Deployment

### Vercel

```bash
npm install -g vercel
vercel
```

### Netlify

```bash
npm run build
# Upload dist folder to Netlify
```

### Manual Deployment

1. Build the project: `npm run build`
2. Upload `dist` folder to your hosting
3. Configure environment variables
4. Set up redirects for SPA routing

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance Tips

1. Enable lazy loading for images
2. Use code splitting for routes
3. Optimize images before upload
4. Enable gzip compression on server
5. Use CDN for static assets

## Contributing

1. Fork the repository
2. Create feature branch
3. Commit changes
4. Push to branch
5. Create Pull Request
