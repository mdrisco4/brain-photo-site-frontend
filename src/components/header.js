import React from "react"
import styled from "styled-components"
// import Burger from "../Hamburger/Hamburger"
// import { Link } from "gatsby"
// import PropTypes from "prop-types"

import { library } from "@fortawesome/fontawesome-svg-core"
import { fas } from "@fortawesome/free-solid-svg-icons"
import { far } from "@fortawesome/free-regular-svg-icons"
import { fab } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

library.add(fab, fas, far)

const Nav = styled.div`
  background: rgb(113, 84, 58);
  margin: 0;
  height: 140px;
`

const IconLink = styled.a`
  color: rgb(216, 100, 52);
  font-size: 60px;
  text-decoration: "none";
  filter: drop-shadow(2px 2px black);
`

const Header = () => (
  <Nav>
    <div
      style={{
        display: "flex",
        padding: "15px",
        paddingLeft: "50px",
        paddingRight: "50px",
        justifyContent: "space-between",
      }}
    >
      {/* <FontAwesomeIcon icon={["fas", "camera-retro"]} size="3x" />
    <FontAwesomeIcon icon={["fas", "bars"]} size="3x" /> */}

      <IconLink>
        <FontAwesomeIcon icon={["fas", "camera-retro"]} size="2x" />
      </IconLink>
      <a
        href="/portfolio/"
        style={{
          color: "rgb(216, 100, 52)",
          fontSize: "60px",
          textDecoration: "none",
          textShadow: "2px 2px black",
          paddingTop: "28px",
        }}
      >
        Portfolio
      </a>
      <a
        href="/about/"
        style={{
          color: "rgb(216, 100, 52)",
          fontSize: "60px",
          textDecoration: "none",
          textShadow: "2px 2px black",
          paddingTop: "28px",
        }}
      >
        About
      </a>
      <a
        href="/contact"
        style={{
          color: "rgb(216, 100, 52)",
          fontSize: "60px",
          textDecoration: "none",
          textShadow: "2px 2px black",
          paddingTop: "28px",
        }}
      >
        Contact
      </a>
    </div>
  </Nav>
)

export default Header
