import React from 'react'
import './Product.css'
import data from '../data/data.json'
import { useShoppingCart } from '../context/ShoppingCartContext'


const Card = ({ detail }) => {
  const {
    id,
    image,
    egName,
    zhName,
    price
  } = detail
  const {
    getItemQuantity,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
  } = useShoppingCart()

  const amount = getItemQuantity(id)
  return (
    <article className="drink">
      <img src={image} alt={egName}/>
      <p>{zhName} {egName}</p>
      <p>${price}</p>
      <div className='card-footer'>
        {
          amount === 0 ? 
          (
            <button onClick={() => increaseQuantity(id)}>Add To Cart</button>
          ) : 
          (
            <>
              <button onClick={() => decreaseQuantity(id)}>-</button>
              <button>{amount}</button>
              <button onClick={() => increaseQuantity(id)}>+</button>
              <button onClick={() => removeFromCart(id)}>remove</button>
            </>
          )
        }
      </div>
    </article>
  )
}

const DrinkList = () => {
  return (
    <>
      <h1>All Product</h1>
      <div className='drink-list'>
        {
          data.drinks.map((item, index) => <Card detail={item} key={index}/>)
        }
      </div>
    </>
  )
}

export default DrinkList