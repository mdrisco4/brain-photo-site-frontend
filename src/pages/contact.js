import React from "react"
import styled from "styled-components"

// import { Link } from "gatsby"

import Layout from "../components/layout"
// import SEO from "../components/seo"

const ContactPrompt = styled.div`
  text-align: center;
  width: 80%;
  font-size: 56px;
  margin-left: auto;
  margin-right: auto;
`

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

const Info = styled.div`
  text-align: center;
  font-size: 45px;
  margin-top: 24px;
  font-weight: bold;
  text-shadow: 1px 1px rgb(216, 100, 52);
`

const About = () => (
  <Layout>
    <ContactPrompt>
      If you have any questions anout any of my work or would like to work with
      me please contact me at:
    </ContactPrompt>
    <EmailLink href="mailto:beefrags1982@gmail.com" target="_blank">
      beefrags1982@gmail.com
    </EmailLink>
    <Info>(585) 267-9609</Info>
    <Info>Perinton, NY 14450</Info>
  </Layout>
)

export default About
