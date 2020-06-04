import React from "react"
import styled from "styled-components"
// import { Link } from "gatsby"
import Layout from "../components/layout"

const Section = styled.div`
  text-align: center;
  font-size: 32px;
  padding-top: 10%;
  font-family: cursive;
  font-weight: bold;
  text-shadow: 1px 1px white;
  text-decoration: underline;
  @media (min-width: 480px) {
    font-size: 36px;
  }
  @media (min-width: 585px) {
    font-size: 42px;
  }
  @media (min-width: 768px) {
    font-size: 48px;
  }
  @media (min-width: 950px) {
    font-size: 54px;
  }
  @media (min-width: 1200px) {
    font-size: 60px;
  }
`

const SectionInfo = styled.div`
  text-align: center;
  font-size: 24px;
  margin-top: 20px;
  font-family: cursive;
  font-weight: bold;
  width: 70%;
  margin: 0 15%;
  text-shadow: 1px 1px white;
  max-width: 1200px;
  margin-right: auto;
  margin-left: auto;
  @media (min-width: 480px) {
  }
  font-size: 27px;
  @media (min-width: 585px) {
    font-size: 34px;
  }
  @media (min-width: 768px) {
    font-size: 40px;
  }
  @media (min-width: 950px) {
    font-size: 45px;
  }
  @media (min-width: 1200px) {
    font-size: 52px;
  }
`

const AboutPagePic = styled.div`
  background-image: url("http://images.ctfassets.net/hkey7bq8d8xc/j9OtMb9mMxOAv3izjnGTL/1ce54aa61bdd0abc81129f9c6ce4beb1/DSCN1173.jpg");
  background-size: cover;
  padding-bottom: 900px;
`

const About = () => (
  <Layout>
    <AboutPagePic>
      <Section>About Me</Section>
      <SectionInfo>
        Born in Texas, I have lived in the greater Rochester area for the past
        25 years. I try to reamin active in the community and currently reside
        in Fairport. I am actively seeking freelance work and permanent
        postions.
      </SectionInfo>
      <Section>Hobbies and Interests</Section>
      <SectionInfo>
        I am an avid outdoorsman, enjoy camping and regularly travel to the
        Adirondacks to hike, climb and camp on mountains throughout ther region.
        I also enjoy attending live concerts and festtivals whenever possible to
        gain new experiences and meet people.
      </SectionInfo>
    </AboutPagePic>
  </Layout>
)

export default About
