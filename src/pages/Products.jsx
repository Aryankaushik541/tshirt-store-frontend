import { useEffect, useState } from 'react'
import { productAPI } from '../lib/api'
import ProductCard from '../components/ProductCard'
import Loading from '../components/Loading'

export default function Products() {
  const [products, setProducts] = useState([])
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(true)
  const [selectedCategory, setSelectedCategory] = useState('')
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    loadProducts()
    loadCategories()
  }, [selectedCategory, searchTerm])

  const loadProducts = async () => {
    try {
      setLoading(true)
      const params = {}
      if (selectedCategory) params.category = selectedCategory
      if (searchTerm) params.search = searchTerm
      
      const response = await productAPI.getAll(params)
      setProducts(response.data.results || response.data)
    } catch (error) {
      console.error('Error loading products:', error)
    } finally {
      setLoading(false)
    }
  }

  const loadCategories = async () => {
    try {
      const response = await productAPI.getCategories()
      setCategories(response.data)
    } catch (error) {
      console.error('Error loading categories:', error)
    }
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-4xl font-bold mb-8">Our Products</h1>

      {/* Filters */}
      <div className="mb-8 flex flex-col md:flex-row gap-4">
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="input-field flex-1"
        />
        
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="input-field md:w-64"
        >
          <option value="">All Categories</option>
          {categories.map(category => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>
      </div>

      {/* Products Grid */}
      {loading ? (
        <Loading />
      ) : products.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-gray-600 text-lg">No products found</p>
        </div>
      )}
    </div>
  )
}
