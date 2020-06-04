import React from "react"
import styled from "styled-components"
import "../Styles/fonts.css"
// import { Link } from "gatsby"
import Layout from "../components/layout"

const ContactPrompt = styled.div`
font-family: 'Krona One', sans-serif;
  text-align: center;
  width: 80%;
  font-size: 24px;
  margin-left: auto;
  margin-right: auto;
  padding-top: 5%;
  max-width: 1200px;
  @media (min-width: 575px) {
    font-size: 32px;
  }
  @media (min-width: 768px) {
    font-size: 39px;
  }
  @media (min-width: 950px) {
    font-size: 45px;
  }
  @media (min-width: 1200px) {
    font-size: 52px;
  }
`

const EmailLink = styled.a`
font-family: 'Krona One', sans-serif;
  color: black;
  text-decoration: none;
  display: block;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  font-size: 20px;
  margin-top: 24px;
  font-weight: bold;
  text-shadow: 2px 2px white;
  &:hover {
    color: white;
    text-shadow: 2px 2px black;
  }
  @media (min-width: 540px) {
    font-size: 27px;
  }
  @media (min-width: 585px) {
    font-size: 32px;
  }
  @media (min-width: 768px) {
    font-size: 39px;
  }
  @media (min-width: 950px) {
    font-size: 45px;
  }
  @media (min-width: 1200px) {
    font-size: 52px;
  }
`

const Info = styled.div`
font-family: 'Krona One', sans-serif;
  text-align: center;
  font-size: 24px;
  margin-top: 24px;
  font-weight: bold;
  @media (min-width: 575px) {
    font-size: 32px;
  }
  @media (min-width: 768px) {
    font-size: 39px;
  }
  @media (min-width: 950px) {
    font-size: 45px;
  }
  @media (min-width: 1200px) {
    font-size: 52px;
  }
`

const ContactPagePic = styled.div`
  background-image: url('http://images.ctfassets.net/hkey7bq8d8xc/2d2siJGRM2EXx3MMe8N7bn/00f27a790b6ea402db28d6a05942bd27/DSCN0415.JPG');
  background-size: cover;
  padding-bottom: 400px;
`

const About = () => (
  <Layout>
    <ContactPagePic>
    <ContactPrompt>
      If you have any questions about any of my work and want to know more
      please contact me at:
    </ContactPrompt>
    <EmailLink href="mailto:beefrags1982@gmail.com" target="_blank">
      beefrags1982@gmail.com
    </EmailLink>
    <Info>(585) 267-9609</Info>
    <Info>Perinton, NY 14450</Info>
    </ContactPagePic>
  </Layout>
)

export default About
