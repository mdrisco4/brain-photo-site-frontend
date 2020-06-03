import React, { Component } from "react"
import styled from "styled-components"
import { graphql } from "gatsby"
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
`

const PhotoGrid = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 1fr 1fr 1fr;
`

const ItemContainer = styled.div`
padding-top: 20px;
`

const Title = styled.div`
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
  &:hover {
    width: 100%;
    margin-left: 0;
  }
`

const Description = styled.div`
  text-align: center;
  color: black;
  text-shadow: 1px 1px rgb(216, 100, 52);
  font-size: 20px;
  font-weight: bold;
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
            <Photo src={item.fields.file.url} />
            <Description>{item.fields.description}</Description>
          </ItemContainer>
        </div>
      )
    })

    return (
        <Layout>
        <Prompt>Handpicked examples of my favorite work</Prompt>
        <PhotoGrid>{photos}</PhotoGrid>
      </Layout>
    )
  }
}

export default Portfolio
