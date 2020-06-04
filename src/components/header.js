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
    margin-right: 6%;
  }
  @media (min-width: 830px) {
    margin-right: 9%;
  }
  @media (min-width: 960px) {
    margin-right: 9%;
  }
  @media (min-width: 1050px) {
    margin-right: 14%;
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
      <IconLink href="/">
        <FontAwesomeIcon icon={["fas", "camera-retro"]} size="1x" />
      </IconLink>
      <Navbar/>
    </div>
  </Nav>
)

export default Header
