import React from "react"
import styled from "styled-components"
import Burger from "./Menu/Navbar.js"
// import { Link } from "gatsby"
// import PropTypes from "prop-types"

import { library } from "@fortawesome/fontawesome-svg-core"
import { fas } from "@fortawesome/free-solid-svg-icons"
import { far } from "@fortawesome/free-regular-svg-icons"
import { fab } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Navbar from "./Menu/Navbar.js"

library.add(fab, fas, far)

const Nav = styled.div`
  /* background: rgb(113, 84, 58); */
  background: black;
  margin: 0;
  height: 110px;
`

const IconLink = styled.a`
  color: white;
  font-size: 60px;
  padding-top: 10px;
  padding-left: 2%;
  text-decoration: "none";
  @media (min-width: 768px) {
    margin-right: 0;
  }
  @media (min-width: 930px) {
    margin-right: 7%;
  }
  @media (min-width: 1200px) {
    margin-right: 20%;
  }
  &:hover {
    color: goldenrod;
  }
`

const HeaderLink = styled.a`
  color: rgb(216, 100, 52);
  font-size: 36px;
  text-decoration: none;
  text-shadow: 2px 2px black;
  padding-top: 15px;
  font-weight: bold;
  &:hover {
    color: black;
    text-shadow: 2px 2px rgb(216, 100, 52);
  }
`

const Header = () => (
  <Nav>
    <div
      style={{
        display: "flex",
        padding: "15px",
        paddingLeft: "5%",
        paddingRight: "5%",
        justifyContent: "space-between",
      }}
    >
      {/* <FontAwesomeIcon icon={["fas", "camera-retro"]} size="3x" />
    <FontAwesomeIcon icon={["fas", "bars"]} size="3x" /> */}

      <IconLink href="/">
        <FontAwesomeIcon icon={["fas", "camera-retro"]} size="1x" />
      </IconLink>
      {/* <IconLink> */}
      {/* <FontAwesomeIcon icon={["fas", "bars"]} size="3x" /> */}
      {/* <i class="fas fa-bars"></i> */}
      {/* </IconLink> */}
      {/* <Burger/> */}
      <Navbar/>
      {/* <HeaderLink href="/portfolio/">Portfolio</HeaderLink>
      <HeaderLink href="/about/">About</HeaderLink>
      <HeaderLink href="/contact/">Contact</HeaderLink> */}
    </div>
  </Nav>
)

export default Header
