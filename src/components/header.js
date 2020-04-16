// import { Link } from "gatsby"
// import PropTypes from "prop-types"
import React from "react"

import { library } from "@fortawesome/fontawesome-svg-core"
import { fas } from "@fortawesome/free-solid-svg-icons"
import { far } from "@fortawesome/free-regular-svg-icons"
import { fab } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

library.add(fab, fas, far)

const Nav = styled.div`
  background: rgb(113, 84, 58);
  /* border-top: 24px solid black;
  border-bottom: 24px solid black; */
  margin: 0;
`

const Header = ({ siteTitle }) => (
  <Nav>
    <FontAwesomeIcon icon={["fas", "camera-retro"]} size="3x" />
    <div>efhasdif</div>
  </Nav>
)

export default Header
