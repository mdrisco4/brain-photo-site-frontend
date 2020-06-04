import React from "react"
import styled from "styled-components"
// import { Link } from "gatsby"
import Layout from "../components/layout"


const Section = styled.div`
  text-align: center;
  font-size: 52px;
  padding-top: 10%;
  font-family: cursive;
  font-weight: bold;
  text-shadow: 1px 1px white;
`

const SectionInfo = styled.div`
  text-align: center;
  font-size: 36px;
  margin-top: 20px;
  font-family: cursive;
  font-weight: bold;
  width: 70%;
  margin: 0 15%;
  text-shadow: 1px 1px white;
`

const AboutPagePic = styled.div`
  background-image: url('http://images.ctfassets.net/hkey7bq8d8xc/j9OtMb9mMxOAv3izjnGTL/1ce54aa61bdd0abc81129f9c6ce4beb1/DSCN1173.jpg');
  background-size: cover;
  padding-bottom: 900px;
`

const About = () => (
  <Layout>
    <AboutPagePic>
    <Section>About Me</Section>
    <SectionInfo>Born in Texas, I have lived in the greater Rochester area for the past 25 years.  I try to reamin active in the community and currently reside in Fairport.</SectionInfo>
    <Section>Hobbies and Interests</Section>
    <SectionInfo>Climbing mountains, camping, etc.</SectionInfo>
    </AboutPagePic>
  </Layout>
)

export default About
