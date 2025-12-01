# Quick Start Guide - T-Shirt Store

Get your T-shirt e-commerce store running in 5 minutes!

## Prerequisites

- Python 3.8+ installed
- Node.js 16+ installed
- Git installed

## Step 1: Clone Both Repositories

```bash
# Clone backend
git clone https://github.com/Aryankaushik541/tshirt-store-backend.git

# Clone frontend
git clone https://github.com/Aryankaushik541/tshirt-store-frontend.git
```

## Step 2: Setup Backend (Terminal 1)

```bash
cd tshirt-store-backend

# Create and activate virtual environment
python -m venv venv

# On Windows:
venv\Scripts\activate
# On macOS/Linux:
source venv/bin/activate

# Install dependencies
pip install -r requirements.txt

# Setup database
python manage.py migrate

# Create admin user (follow prompts)
python manage.py createsuperuser

# Start backend server
python manage.py runserver
```

Backend will run at: **http://localhost:8000**

## Step 3: Setup Frontend (Terminal 2)

```bash
cd tshirt-store-frontend

# Install dependencies
npm install

# Create environment file
echo "VITE_API_URL=http://localhost:8000/api" > .env

# Start frontend server
npm run dev
```

Frontend will run at: **http://localhost:3000**

## Step 4: Add Sample Data

1. Open browser and go to: **http://localhost:8000/admin**
2. Login with your superuser credentials
3. Add some categories (e.g., Casual, Sports, Formal)
4. Add some products with:
   - Name and description
   - Price
   - Category
   - Available sizes: ["S", "M", "L", "XL"]
   - Colors: ["white", "black", "blue"]
   - Stock quantity
   - Mark some as "Featured"

## Step 5: Test the Application

1. Open **http://localhost:3000** in your browser
2. Browse products on the home page
3. Click on a product to view details
4. Select size and color
5. Add to cart
6. Go to cart and proceed to checkout
7. Fill in the form and place order
8. View order confirmation

## 🎉 You're Done!

Your T-shirt store is now running locally!

## Next Steps

### Customize Your Store

1. **Change Colors**: Edit `tailwind.config.js` in frontend
2. **Add Logo**: Replace logo in `Navbar.jsx`
3. **Update Content**: Modify text in `Home.jsx` and `Footer.jsx`
4. **Add Products**: Use Django admin to add more products

### Deploy to Production

**Backend Options:**
- Railway: `railway up`
- Heroku: `git push heroku main`

**Frontend Options:**
- Vercel: `vercel deploy`
- Netlify: Drag and drop `dist` folder

## Common Issues

### Backend won't start
```bash
# Check if port 8000 is in use
python manage.py runserver 8001
```

### Frontend won't start
```bash
# Clear cache and reinstall
rm -rf node_modules
npm install
```

### Can't connect to API
- Ensure backend is running on port 8000
- Check `.env` file has correct API URL
- Check browser console for CORS errors

## Useful Commands

### Backend
```bash
# Create new migrations
python manage.py makemigrations

# Apply migrations
python manage.py migrate

# Create superuser
python manage.py createsuperuser

# Run tests
python manage.py test
```

### Frontend
```bash
# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linter
npm run lint
```

## Project Structure

```
tshirt-store/
├── tshirt-store-backend/     # Django backend
│   ├── products/             # Products app
│   ├── orders/               # Orders app
│   ├── tshirt_store/         # Project settings
│   └── manage.py
│
└── tshirt-store-frontend/    # React frontend
    ├── src/
    │   ├── components/       # UI components
    │   ├── pages/            # Page components
    │   ├── store/            # State management
    │   └── lib/              # Utilities
    └── package.json
```

## Support

- **Backend Issues**: Check `tshirt-store-backend/SETUP.md`
- **Frontend Issues**: Check `tshirt-store-frontend/SETUP.md`
- **General Info**: Check `PROJECT_OVERVIEW.md`

## Resources

- Django Docs: https://docs.djangoproject.com/
- React Docs: https://react.dev/
- Tailwind CSS: https://tailwindcss.com/
- Vite: https://vitejs.dev/

Happy coding! 🚀
