import React, { Component } from "react"
import styled from "styled-components"
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
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 1fr 1fr 1fr;
  margin: 40px 0 120px 0;
`

const ItemContainer = styled.div`
  padding-top: 60px;
  transition: transform 0.8s ease;
  &:hover {
    transform: scale(1.45);
  }
`

const Title = styled.div`
  padding: 0 15%;
  text-align: center;
  color: black;
  text-shadow: 1px 1px rgb(216, 100, 52);
  font-size: 24px;
  font-weight: bold;
`

const Photo = styled.img`
  width: 70%;
  margin-top: 24px;
  margin-left: 15%;
`

const ImageLink = styled.a``

const Description = styled.div`
  padding: 0 15%;
  text-align: center;
  color: black;
  text-shadow: 1px 1px rgb(216, 100, 52);
  font-size: 20px;
  font-weight: bold;
`

const ContactPrompt = styled.div`
  text-align: center;
  font-size: 36px;
  font-weight: bold;
  text-shadow: 1px 1px rgb(216, 100, 52);
`

const EmailLink = styled.a`
  color: black;
  text-decoration: none;
  display: block;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  font-size: 36px;
  margin-top: 24px;
  font-weight: bold;
  text-shadow: 2px 2px rgb(216, 100, 52);
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
        <Prompt>Handpicked examples of my favorite work</Prompt>
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
