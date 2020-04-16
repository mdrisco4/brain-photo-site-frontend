import React from "react"
import styled from "styled-components"
// import { Link } from "gatsby"
// import PropTypes from "prop-types"

// import { library } from "@fortawesome/fontawesome-svg-core"
// import { fas } from "@fortawesome/free-solid-svg-icons"
// import { far } from "@fortawesome/free-regular-svg-icons"
// import { fab } from "@fortawesome/free-brands-svg-icons"
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

// library.add(fab, fas, far)

const Nav = styled.div`
  background: rgb(113, 84, 58);
  margin: 0;
  height: 100px;
`

const Header = () => (
  <Nav>
    {/* <FontAwesomeIcon icon={["fas", "camera-retro"]} size="3x" /> */}
    <div style={{
      display: "flex",
      padding: "15px",
      justifyContent: "space-between",
    }}>
      <a href="/"
    style={{
      color: "rgb(216, 100, 52)",
      fontSize: "60px",
      textDecoration: "none",
      textShadow: "2px 2px black"
    }}>Home
    </a>
      <a href="/"
    style={{
      color: "rgb(216, 100, 52)",
      fontSize: "60px",
      textDecoration: "none",
      textShadow: "2px 2px black"
    }}>Portfolio
    </a>
    <a href="/about/"
    style={{
      color: "rgb(216, 100, 52)",
      fontSize: "60px",
      textDecoration: "none",
      textShadow: "2px 2px black"
    }}>About
    </a>
    <a href="/"
    style={{
      color: "rgb(216, 100, 52)",
      fontSize: "60px",
      textDecoration: "none",
      textShadow: "2px 2px black"
    }}>Contact
    </a>
    </div>
  </Nav>
)

export default Header
