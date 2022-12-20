import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../images/logo.jpeg'
import { BsFillCartFill } from 'react-icons/bs'
import { useShoppingCart } from '../context/ShoppingCartContext'
import styled from 'styled-components'

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 84px;
  margin-bottom: 4px;
  padding: 10px 20px;
  background-color: #fff;
  box-shadow: 0 0 8px rgb(0 0 0 / 50%);
`

const StyledLogoLink = styled(Link)`
  height: 100%;
`

const Img = styled.img`
  height: 100%;
`

const LinkContainer = styled.div`
  flex-grow: 1;
`

const StyledLink = styled(Link)`
  text-decoration: none;
  margin: 0 10px;
  font-size: 1.2rem;
`

const IconCart = styled.div`
  position: relative;
  width: 40px;
  height: 40px;
  padding: 6px;
  border-radius: 20px;
  cursor: pointer;
  transition: all;
  transition-duration: 0.5s;
  color: var(--primary-color);
  font-size: 26px;
`

const StyledBsFillCartFill = styled(BsFillCartFill)`
  color: var(--primary-color);
`

const Span = styled.span`
  position: absolute;
  bottom: 0;
  right: 0;
  display: block;
  width: 20px;
  height: 20px;
  line-height: 20px;
  border-radius: 10px;
  font-size: 0.9rem;
  font-weight: 600;
  text-align: center;
  color: #fff;
  background-color: #ff0000;
`

export default function Navbar() {
  const {
    cartQuantity,
    switchCartVisible
  } = useShoppingCart()

  return (
    <Nav>
      <StyledLogoLink to="/">
        <Img src={logo} alt="logo.jpeg" />
      </StyledLogoLink>
      <LinkContainer>
        <StyledLink to="/about">
          About
        </StyledLink>
        <StyledLink to="/product">
          Product
        </StyledLink>
      </LinkContainer>
      <IconCart onClick={() => switchCartVisible(true)}>
        <StyledBsFillCartFill />
        <Span>{cartQuantity}</Span>
      </IconCart>
    </Nav>
  )
}
