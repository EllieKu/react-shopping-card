import React from 'react'
import './Product.css'
import data from '../data/data.json'

const Card = ({ detail }) => {
  return (
    <article className="drink">
      <img src={detail.image} alt={detail.egName}/>
      {/* <img alt={detail.egName}/> */}
      <p>{detail.zhName} {detail.egName}</p>
      <p>${detail.price}</p>
      <button>add to cart</button>
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