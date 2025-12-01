import { create } from 'zustand'
import { persist } from 'zustand/middleware'

const useCartStore = create(
  persist(
    (set, get) => ({
      items: [],
      
      addItem: (product, size, color, quantity = 1) => {
        const items = get().items
        const existingItemIndex = items.findIndex(
          item => item.product.id === product.id && item.size === size && item.color === color
        )

        if (existingItemIndex > -1) {
          const newItems = [...items]
          newItems[existingItemIndex].quantity += quantity
          set({ items: newItems })
        } else {
          set({ items: [...items, { product, size, color, quantity }] })
        }
      },

      removeItem: (productId, size, color) => {
        set({
          items: get().items.filter(
            item => !(item.product.id === productId && item.size === size && item.color === color)
          )
        })
      },

      updateQuantity: (productId, size, color, quantity) => {
        const items = get().items
        const itemIndex = items.findIndex(
          item => item.product.id === productId && item.size === size && item.color === color
        )

        if (itemIndex > -1) {
          const newItems = [...items]
          newItems[itemIndex].quantity = quantity
          set({ items: newItems })
        }
      },

      clearCart: () => set({ items: [] }),

      getTotal: () => {
        return get().items.reduce((total, item) => {
          return total + (parseFloat(item.product.price) * item.quantity)
        }, 0)
      },

      getItemCount: () => {
        return get().items.reduce((count, item) => count + item.quantity, 0)
      }
    }),
    {
      name: 'cart-storage',
    }
  )
)

export default useCartStore
