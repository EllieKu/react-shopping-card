import React from 'react'
import { AiOutlineClose } from "react-icons/ai";
import { useShoppingCart } from '../context/ShoppingCartContext'
import styled from 'styled-components';

const Article = styled.article`
  display: flex;
  align-items: flex-start;
  width: 100%;
  margin-bottom: 10px;
`

const Img = styled.img`
  width: 40%;
`

const Info = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  justify-content: space-between;
  margin: 0 5px;
`

const ItemTotal = styled.b`
  align-self: end;
`

const Card = ({detail}) => {
  const {
    image,
    egName,
    zhName,
    price,
    quantity
  } = detail

  const total = price * quantity

  return (
    <Article className="drink">
      <Img src={image} alt={egName}/>
      <Info>
        <p>{zhName}</p>
        <p>${price} x{quantity}</p>
      </Info>
      <ItemTotal>${total}</ItemTotal>
    </Article>
  )
}

const List = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  left: 0;
  top: 0;
  background-color: rgb(0, 0, 0, 0.3);
  transform: ${props => (props.toggle ? "translateX(0)" : "translateX(100%)")};
  display: ${props => (props.toggle ? "unset" : "none")};
  transition: ${props => (props.toggle ? " .3s" : ".01s")};
  transition-delay: .3s;
`

const Content = styled.div`
  height: 100%;
  width: 70%;
  padding: 20px;
  background-color: #fff;
  float: right;
  transition: .3s;
  transform: ${props => (props.toggle ? "translateX(0)" : "translateX(100%)")};
`

const Head = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 24px;
  margin-bottom: 20px;
`

const Foot = styled.div`
  width: 100%;
  padding-top: 10px;
  border-top: 2px solid #000;
  text-align: right;
  font-size: 26px;
`

const StyledAiOutlineClose = styled(AiOutlineClose)`
  cursor: pointer;
`

export default function CartList() {
  const {
    switchCartVisible,
    cartVisible,
    cartItems
  } = useShoppingCart()

  const total = cartItems.reduce((prev, curr) => prev + curr.quantity * curr.price, 0)
  return (
    <List toggle={cartVisible}>
      <Content toggle={cartVisible}>
        <Head>
          <p>Cart List</p>
          <StyledAiOutlineClose onClick={() => switchCartVisible(false)}/>
        </Head>
        <div className='body'>
          { 
            cartItems.map(item => <Card detail={item} key={item.id} />)
          }
        </div> 
        <Foot>
          {
            cartItems.length > 0 ? <b>Total: ${total}</b> : null
          }
        </Foot>  
      </Content>
    </List>
  )
}
