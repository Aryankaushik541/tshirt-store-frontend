import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { CheckCircle } from 'lucide-react'
import { orderAPI } from '../lib/api'
import Loading from '../components/Loading'

export default function OrderSuccess() {
  const { orderNumber } = useParams()
  const [order, setOrder] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    loadOrder()
  }, [orderNumber])

  const loadOrder = async () => {
    try {
      const response = await orderAPI.track(orderNumber)
      setOrder(response.data)
    } catch (error) {
      console.error('Error loading order:', error)
    } finally {
      setLoading(false)
    }
  }

  if (loading) return <Loading />

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-8">
        <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-4" />
        <h1 className="text-4xl font-bold mb-2">Order Confirmed!</h1>
        <p className="text-gray-600">Thank you for your purchase</p>
      </div>

      {order && (
        <div className="card p-6 mb-8">
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Order Details</h2>
            <p className="text-gray-600">Order Number: <span className="font-semibold">{order.order_number}</span></p>
            <p className="text-gray-600">Email: {order.email}</p>
          </div>

          <div className="mb-6">
            <h3 className="font-semibold mb-2">Shipping Address</h3>
            <p className="text-gray-600">
              {order.first_name} {order.last_name}<br />
              {order.address}<br />
              {order.city}, {order.state} {order.zip_code}<br />
              {order.country}
            </p>
          </div>

          <div className="mb-6">
            <h3 className="font-semibold mb-2">Order Items</h3>
            <div className="space-y-2">
              {order.items?.map((item, index) => (
                <div key={index} className="flex justify-between text-sm">
                  <span>
                    {item.product.name} ({item.size}, {item.color}) x{item.quantity}
                  </span>
                  <span>${(parseFloat(item.price) * item.quantity).toFixed(2)}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="border-t pt-4">
            <div className="flex justify-between text-lg font-bold">
              <span>Total</span>
              <span className="text-primary">${parseFloat(order.total_amount).toFixed(2)}</span>
            </div>
          </div>
        </div>
      )}

      <div className="text-center space-x-4">
        <Link to="/products" className="btn-primary inline-block">
          Continue Shopping
        </Link>
      </div>
    </div>
  )
}
