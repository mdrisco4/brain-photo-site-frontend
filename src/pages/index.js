import React from "react"
import styled from "styled-components"
// import { Link } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
// import SEO from "../components/seo"

const HomeContainer = styled.div`
  display: flex;
`

const TextContainer = styled.div`
  width: 48%;
  padding-right: 2%;
`

const Name = styled.div`
  width: 100%;
  font-size: 60px;
  padding-top: 12px;
  text-align: right;
  color: black;
`

const Title = styled.div`
  font-size: 45px;
  text-align: right;
  padding-top: 25px;
`

const Intro = styled.div`
  text-align: right;
  font-size: 24px;
`

const Headshot = styled.img`
  width: 40%;
  border-radius: 45px;
  border: 4px solid black;
`

const IndexPage = () => (
  <Layout>
    <HomeContainer>
      <TextContainer>
        <Name>Brian Fragnoli</Name>
        <Title>Freelance Photographer</Title>
        <Intro>
          I am a freelance photographer currently working on my certification
          using a `equipment`. I specialize in still life and sports photography
          and would like to kickstart a career in sideline sports images. Don't
          worry I summitted that climb.
        </Intro>
      </TextContainer>
      <Headshot src="https://i.imgur.com/vOSBWlN.jpg" />
    </HomeContainer>
  </Layout>
)

export default IndexPage
