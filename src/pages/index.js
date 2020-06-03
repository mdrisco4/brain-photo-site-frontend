import React from "react"
import styled from "styled-components"
import "../Styles/fonts.css"
// import { Link } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
// import SEO from "../components/seo"

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column-reverse;
  /* background-image: url('http://images.ctfassets.net/hkey7bq8d8xc/2d2siJGRM2EXx3MMe8N7bn/00f27a790b6ea402db28d6a05942bd27/DSCN0415.JPG'); */
  @media (min-width: 850px) {
  }
  @media (min-width: 930px) {
    flex-direction: row;
  }
  @media (min-width: 1200px) {
  }
`

const TextContainer = styled.div`
  padding-right: 2%;
  @media (min-width: 850px) {
  }
  @media (min-width: 930px) {
  }
  @media (min-width: 1200px) {
    width: 48%;
  }
`

const Name = styled.div`
  font-family: "Audiowide", cursive;
  width: 100%;
  font-size: 40px;
  padding-top: 12px;
  color: white;
  text-shadow: 2px 2px black;
  text-align: center;
  @media (min-width: 768px) {
    font-size: 48px;
  }
  @media (min-width: 930px) {
    font-size: 35px;
  }
  @media (min-width: 1200px) {
    font-size: 51px;
    text-align: right;
  }
`

const Title = styled.div`
  font-family: "Audiowide", cursive;
  padding-top: 25px;
  text-align: center;
  font-size: 36px;
  color: white;
  text-shadow: 2px 2px black;
  @media (min-width: 768px) {
    font-size: 42px;
  }
  @media (min-width: 930px) {
    font-size: 28px;
  }
  @media (min-width: 1200px) {
    text-align: right;
    font-size: 45px;
  }
`

const Intro = styled.div`
  font-family: "Audiowide", cursive;
  font-size: 24px;
  text-align: center;
  padding: 0 3%;
  color: white;
  text-shadow: 2px 2px black;
  @media (min-width: 768px) {
    font-size: 32px;
  }
  @media (min-width: 930px) {
    font-size: 20px;
  }
  @media (min-width: 1200px) {
    font-size: 24px;
    padding-left: 10%;
    text-align: right;
  }
`

const Headshot = styled.img`
  width: 90%;
  height: auto;
  border-radius: 45px;
  border: 4px solid black;
  margin: 0 5%;
  @media (min-width: 850px) {
  }
  @media (min-width: 930px) {
    width: 45%;
  }
  @media (min-width: 1400px) {
  }
`
const FrontPagePic = styled.div`
  background-image: url('http://images.ctfassets.net/hkey7bq8d8xc/G2LNMkaVlx8PzFI4pNiiO/abd3d55f88cd8ccb20135605c32582ff/DSC_0204.JPG');
  background-size: cover;
  padding-bottom: 400px;
`

const IndexPage = () => (
  <Layout>
    <FrontPagePic>
    <HomeContainer>
      <TextContainer>
        <Name>Brian Fragnoli</Name>
        <Title>Photographer</Title>
        <Intro>I am a freelance photographer and use a D3 500 Nikon.  Currently I am enrolled at the New York Institute of Photography earning my professional certifcation.  I specialize in landscape, still life and sports photography.</Intro>
      </TextContainer>
      <Headshot src="https://i.imgur.com/vOSBWlN.jpg" />
    </HomeContainer>
  </FrontPagePic>
  </Layout>
)

export default IndexPage
