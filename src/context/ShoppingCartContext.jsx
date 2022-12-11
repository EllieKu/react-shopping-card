import React, { createContext, useContext, useState } from 'react'

const ShoppingCartContext = createContext({})

const useShoppingCart = () => {
  return useContext(ShoppingCartContext)
}

const ShoppingCartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([])

  function getItemQuantity(id) {
    return cartItems.find(item => item.id === id)?.quantity || 0
  }

  function increaseQuantity(id) {
    setCartItems(currentItems => {
      if (currentItems.find(item => item.id === id) == null) {
        return [...currentItems, {id, quantity: 1}]
      }
      return currentItems.map(item => {
        if (item.id === id) {
          return {...item, quantity: (item.quantity + 1)}
        }
        return item
      })
    })
  }

  function decreaseQuantity(id) {
    setCartItems(currentItems => {
      if (currentItems.find(item => item.id === id)?.quantity === 1) {
        return currentItems.filter(item => item.id !== id)
      } else {
        return currentItems.map(item => {
          if (item.id === id) {
            return {...item, quantity: (item.quantity - 1)}
          }
          return item
        })
      }
    })
  }

  function removeFromCart(id) {
    setCartItems(currentItems => {
      return currentItems.filter(item => item.id !== id)
    })
  }

  const cartQuantity = cartItems.reduce((prev, curr) => prev + curr.quantity, 0)

  return (
    <ShoppingCartContext.Provider value={{
      getItemQuantity,
      increaseQuantity,
      decreaseQuantity,
      removeFromCart,
      cartQuantity,
      cartItems
    }}>
      {children}
    </ShoppingCartContext.Provider>
  ) 
}

export { useShoppingCart, ShoppingCartProvider }