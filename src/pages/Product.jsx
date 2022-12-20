import React from 'react'
import styled from 'styled-components';
import data from '../data/data.json'
import { useShoppingCart } from '../context/ShoppingCartContext'

const Item = styled.article`
  display: flex;
  flex-direction: column;
  padding: 10px;
  width: 200px;
  height: 330px;
  margin: 10px;

  &:hover {
    box-shadow: 0 0 16px rgb(0 0 0 / 30%)
  }
`

const ItemBody = styled.div`
  flex-grow: 1;
`

const Img = styled.img`
  width: 100%;
  aspect-ratio: 5/4;
  background-color: rgb(0 0 0 / 30%);
`

const Button = styled.button`
  width: 100%;
  height: 40px;
  margin: 16px 0;
  color: #fff;
  background-color: var(--primary-color);
  transition: .3s;

  &:hover {
    background-color: var(--second-color);
  }
`

const ButtonSmall = styled(Button)`
  width: 30px;
  height: 30px;
  margin: unset;
`

const ItemFoot = styled.div`
  width: 80%;
  margin: auto;
  display: grid;
  grid-template-columns: 30px 1fr 30px;
  grid-row-gap: 4px;
  text-align: center;
`

const ButtonRemove = styled(Button)`
  height: 26px;
  grid-column-start: 1;
  grid-column-end: 4;
  background-color: #ff0000;
  margin: unset;

  &:hover {
    background-color: #dc3535;
  }
`

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
    <Item>
      <Img src={image} alt={egName}/>
      <ItemBody>
        <p>{zhName} {egName}</p>
        <p>${price}</p>
      </ItemBody>
      {
        amount === 0 ? 
        (
          <Button onClick={() => increaseQuantity(id)}>Add To Cart</Button>
        ) : 
        (
          <ItemFoot>
            <ButtonSmall onClick={() => decreaseQuantity(id)}>-</ButtonSmall>
            <span>{amount}</span>
            <ButtonSmall onClick={() => increaseQuantity(id)}>+</ButtonSmall>
            <ButtonRemove onClick={() => removeFromCart(id)}>Remove</ButtonRemove>
          </ItemFoot>
        )
      }
    </Item>
  )
}

const List = styled.div`
  display: flex;
  flex-wrap: wrap;
`

export default function Product() {
  return (
    <>
      <List>
        {
          data.drinks.map((item, index) => <Card detail={item} key={index}/>)
        }
      </List>
    </>
  )
}
