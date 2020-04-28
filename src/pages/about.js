import React from "react"
import styled from "styled-components"
// import { Link } from "gatsby"

import Layout from "../components/layout"
// import SEO from "../components/seo"

const Section = styled.div`
  text-align: center;
  font-size: 52px;
  margin-top: 20px;
`

const SectionInfo = styled.div`
  text-align: center;
  font-size: 36px;
  margin-top: 20px;
`

const About = () => (
  <Layout>
    <Section>About Me</Section>
    <SectionInfo>A whole buncha stuff and some back story</SectionInfo>
    <Section>Hobbies and Interests</Section>
    <SectionInfo>Climbing mountains, camping, etc.</SectionInfo>
  </Layout>
)

export default About
