import React, { Component } from "react"
import styled from "styled-components"
import "../Styles/fonts.css"
// import { graphql } from "gatsby"
// import { Link } from "gatsby"

import Layout from "../components/layout"

// export const ImageQuery = graphql`
//   query MyQuery {
//     allContentfulAsset {
//       nodes {
//         title
//         description
//         fluid {
//           src
//         }
//       }
//     }
//   }
// `

const Prompt = styled.div`
  text-align: center;
  font-size: 36px;
  font-weight: bold;
  text-decoration: underline;
  text-shadow: 1px 1px rgb(216, 100, 52);
`

const PhotoGrid = styled.div`
  display: grid;
  @media (min-width: 575px) {
    grid-template-columns: 1fr 1fr;
    margin-bottom: 80px;
}
@media (min-width: 900px) {
    grid-template-columns: 1fr 1fr 1fr;
    margin-bottom: 100px;
}
@media (min-width: 1200px) {
    grid-template-rows: 1fr 1fr;
    grid-template-columns: 1fr 1fr 1fr;
    margin: 40px 0 120px 0;
  }
`

const ItemContainer = styled.div`
  padding-top: 90px;
  transition: transform 0.8s ease;
  @media (min-width: 575px) {
  }
  @media (min-width: 900px) {
  }
  @media (min-width: 1200px) {
  }
  &:hover {
    transform: scale(1.45);
    margin: 0;
  }
`

const Title = styled.div`
  font-family: "Patrick Hand", cursive;
  padding: 0 15%;
  text-align: center;
  color: black;
  text-shadow: 1px 1px rgb(216, 100, 52);
  font-size: 30px;
  font-weight: bold;
  @media (min-width: 575px) {
      font-size: 18px;
  }
  @media (min-width: 900px) {
    font-size: 24px;
  }
  @media (min-width: 1100px) {
    font-size: 30px;
  }
`

const Photo = styled.img`
  width: 70%;
  margin-top: 24px;
  margin-left: 15%;
  @media (min-width: 575px) {
  }
  @media (min-width: 900px) {
  }
  @media (min-width: 1200px) {
  }
`

const ImageLink = styled.a``

const Description = styled.div`
  font-family: "Patrick Hand", cursive;
  padding: 0 15%;
  text-align: center;
  color: black;
  text-shadow: 1px 1px rgb(216, 100, 52);
  font-size: 25px;
  font-weight: bold;
  @media (min-width: 575px) {
      font-size: 16px;
  }
  @media (min-width: 900px) {
    font-size: 21px;
  }
  @media (min-width: 1100px) {
    font-size: 27px;
  }
`

const ContactPrompt = styled.div`
font-family: "Audiowide", cursive;
  text-align: center;
  font-size: 20px;
  font-weight: bold;
  /* padding: 0; */
  /* text-shadow: 1px 1px rgb(216, 100, 52); */
  @media (min-width: 575px) {
  }
  @media (min-width: 900px) {
  }
  @media (min-width: 1200px) {
  }
`

const EmailLink = styled.a`
  color: black;
  text-decoration: none;
  display: block;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  font-size: 20px;
  margin-top: 24px;
  font-weight: bold;
  text-shadow: 2px 2px rgb(216, 100, 52);
  @media (min-width: 575px) {
  }
  @media (min-width: 900px) {
  }
  @media (min-width: 1200px) {
  }
  &:hover {
    color: rgb(216, 100, 52);
    text-shadow: 2px 2px black;
  }
`

const URL =
  "https://cdn.contentful.com/spaces/hkey7bq8d8xc/entries?access_token=bRB059jwbB4MphUkzedacei1ZQze8uxraRhh-pDSVIQ"

class Portfolio extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [],
      codes: [],
      title: [],
      imageURL: [],
      description: [],
    }
  }
  componentDidMount() {
    fetch(URL)
      .then(res => res.json())
      .then(res => {
        this.setState({ data: res.includes.Asset })
        this.state.data.map(code => {
          this.setState({ codes: [...this.state.codes, code.sys.id] })
          this.setState({ title: [...this.state.title, code.fields.title] })
          this.setState({
            imageURL: [...this.state.imageURL, code.fields.file.url],
          })
          this.setState({
            description: [...this.state.description, code.fields.description],
          })
        })
        console.log(res.includes.Asset)
        console.log(this.state.codes)
      })
  }

  render() {
    let photos = this.state.data.map(item => {
      return (
        <div key={item.sys.codes}>
          <ItemContainer>
            <Title>{item.fields.title}</Title>
            {/* <ImageLink href={"/ImagePage/" + item.sys.codes} className="image"> */}
            <Photo src={item.fields.file.url} />
            {/* </ImageLink> */}
            <Description>{item.fields.description}</Description>
          </ItemContainer>
        </div>
      )
    })

    return (
      <Layout>
        {/* <Prompt>Handpicked examples of my favorite work</Prompt> */}
        <PhotoGrid>{photos}</PhotoGrid>
        <ContactPrompt>
          If you like these and want to know more contact me
        </ContactPrompt>
        <ContactPrompt>
          <EmailLink href="mailto:beefrags1982@gmail.com" target="_blank">
            beefrags1982@gmail.com
          </EmailLink>
        </ContactPrompt>
        <ContactPrompt>(585) 267-9609</ContactPrompt>
      </Layout>
    )
  }
}

export default Portfolio
