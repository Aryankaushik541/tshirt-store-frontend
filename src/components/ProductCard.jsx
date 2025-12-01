import { Link } from 'react-router-dom'

export default function ProductCard({ product }) {
  return (
    <Link to={`/products/${product.slug}`} className="card group">
      <div className="aspect-square overflow-hidden bg-gray-100">
        {product.image ? (
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-400">
            No Image
          </div>
        )}
      </div>
      
      <div className="p-4">
        <h3 className="font-semibold text-lg mb-1 group-hover:text-primary transition">
          {product.name}
        </h3>
        <p className="text-gray-600 text-sm mb-2">{product.category}</p>
        <div className="flex items-center justify-between">
          <span className="text-xl font-bold text-primary">
            ${parseFloat(product.price).toFixed(2)}
          </span>
          {product.stock > 0 ? (
            <span className="text-sm text-green-600">In Stock</span>
          ) : (
            <span className="text-sm text-red-600">Out of Stock</span>
          )}
        </div>
      </div>
    </Link>
  )
}
