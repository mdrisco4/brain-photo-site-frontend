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

const IndexPage = () => (
  <Layout>
    <HomeContainer>
      <TextContainer>
        <Name
        >
          Brian Fragnoli
        </Name>
        <div
          style={{
            fontSize: "45px",
            textAlign: "right",
            paddingTop: "25px",
          }}
        >
          Freelance Photographer
        </div>
        <div
          style={{
            textAlign: "right",
            fontSize: "24px",
          }}
        >
          I am a freelance photographer currently working on my certification
          using a `equipment`. I specialize in still life and sports photography
          and would like to kickstart a career in sideline sports images. Don't
          worry I summitted that climb.
        </div>
      </TextContainer>
      <img
        src="https://i.imgur.com/w0PoPDx.png"
        style={{
          width: "40%",
          borderRadius: "45px",
          border: "4px solid black",
        }}
      />
    </HomeContainer>
  </Layout>
)

export default IndexPage
