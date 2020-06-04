import React from "react"
import styled from "styled-components"
import "../Styles/fonts.css"
// import { Link } from "gatsby"
import Layout from "../components/layout"

const ContactPrompt = styled.div`
font-family: 'Krona One', sans-serif;
  text-align: center;
  width: 80%;
  font-size: 56px;
  margin-left: auto;
  margin-right: auto;
`

const EmailLink = styled.a`
font-family: 'Krona One', sans-serif;
  color: black;
  text-decoration: none;
  display: block;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  font-size: 45px;
  margin-top: 24px;
  font-weight: bold;
  text-shadow: 2px 2px white;
  &:hover {
    color: white;
    text-shadow: 2px 2px black;
  }
`

const Info = styled.div`
font-family: 'Krona One', sans-serif;
  text-align: center;
  font-size: 45px;
  margin-top: 24px;
  font-weight: bold;
`

const About = () => (
  <Layout>
    <ContactPrompt>
      If you have any questions about any of my work and want to know more
      please contact me at:
    </ContactPrompt>
    <EmailLink href="mailto:beefrags1982@gmail.com" target="_blank">
      beefrags1982@gmail.com
    </EmailLink>
    <Info>(585) 267-9609</Info>
    <Info>Perinton, NY 14450</Info>
  </Layout>
)

export default About
