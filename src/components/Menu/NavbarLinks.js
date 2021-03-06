import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import "../../Styles/fonts.css"

const NavItem = styled(Link)`
font-family: "Audiowide", cursive;
  text-decoration: none;
  color: black;
  display: inline-block;
  white-space: nowrap;
  margin: 0 1vw;
  transition: all 200ms ease-in;
  position: relative;
  font-size: 24px;
  @media (min-width: 768px) {
      color: white;
  }
  @media (min-width: 960px) {
      font-size: 30px;
  }
  @media (min-width: 850px) {
  }

  :after {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    width: 0%;
    content: ".";
    color: transparent;
    background: goldenrod;
    height: 1px;
    transition: all 0.4s ease-in;
  }

  :hover {
    color: goldenrod;
    ::after {
      width: 100%;
    }
  }

  @media (max-width: 768px) {
    padding: 20px 0;
    font-size: 1.5rem;
    z-index: 6;
  }
`
const NavbarLinks = () => {
  return (
    <>
      <NavItem to="/">Home</NavItem>
      <NavItem to="/portfolio/">Portfolio</NavItem>
      <NavItem to="/about/">About</NavItem>
      <NavItem to="/contact/">Contact</NavItem>
    </>
  )
}

export default NavbarLinks