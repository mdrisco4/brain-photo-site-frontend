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
  background: rgb(113, 84, 58);
  margin: 0;
  height: 110px;
`

const IconLink = styled.a`
  color: rgb(216, 100, 52);
  font-size: 60px;
  margin-right: 39%;
  text-decoration: "none";
  filter: drop-shadow(2px 2px black);
  &:hover {
    color: black;
    filter: drop-shadow(2px 2px rgb(216, 100, 52));
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
