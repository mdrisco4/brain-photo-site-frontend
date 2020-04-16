import React from "react"
import styled from "styled-components"

// import { Link } from "gatsby"

import Layout from "../components/layout"
// import SEO from "../components/seo"

const EmailLink = styled.a`
  color: black;
  text-decoration: none;
  display: block;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  font-size: 45px;
  margin-top: 24px;
  font-weight: bold;
  text-shadow: 2px 2px rgb(216, 100, 52);
  &:hover {
    color: rgb(216, 100, 52);
    text-shadow: 2px 2px black;
  }
`

const About = () => (
  <Layout>
    <div
      style={{
        textAlign: "center",
        width: "80%",
        fontSize: "56px",
        marginLeft: "auto",
        marginRight: "auto",
      }}
    >
      If you have any questions anout any of my work or would like to work with
      me please contact me at:
    </div>
    <EmailLink href="mailto:beefrags1982@gmail.com" target="_blank">
      beefrags1982@gmail.com
    </EmailLink>
    <div
      style={{
        //   display: "inline-block",
        textAlign: "center",
        fontSize: "45px",
        marginTop: "24px",
        // marginLeft: "auto",
        // marginRight: "auto",
        fontWeight: "bold",
        textShadow: "1px 1px rgb(216, 100, 52)",
      }}
    >
      (585) 267-9609
    </div>
    <div
      style={{
        textAlign: "center",
        fontSize: "45px",
        marginTop: "24px",
        fontWeight: "bold",
        textShadow: "1px 1px rgb(216, 100, 52)",
      }}
    >
      Perinton, NY 14450
    </div>
  </Layout>
)

export default About
