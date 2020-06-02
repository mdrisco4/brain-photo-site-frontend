import React, {Component} from "react"
import styled from "styled-components"
import { graphql } from "gatsby"
// import { Link } from "gatsby"

import Layout from "../components/layout"

export const ImageQuery = graphql`
  query MyQuery {
    allContentfulAsset {
      nodes {
        title
        description
        fluid {
          src
        }
      }
    }
  }
`

console.log(ImageQuery)

const URL = "https://cdn.contentful.com/spaces/hkey7bq8d8xc/entries?access_token=bRB059jwbB4MphUkzedacei1ZQze8uxraRhh-pDSVIQ"
// fetch(URL)
//   .then(response => response.json())

//   .then(data => console.log(data))
//   .then(data => console.log(data.includes.Asset[0].fields.file.url));
    // .then(data => photos = data.includes.Asset)
    // .then(() => console.log(photos));

//   .then(data => console.log(data.includes.Asset));

// const photo = props.data.allContentfulAsset.nodes[7].fluid.src


const PhotoGrid = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 1fr 1fr 1fr;
`

const ItemContainer = styled.div``

const Title = styled.div`
  text-align: center;
`

const Photo = styled.img`
  width: 60%;
  margin-top: 24px;
  margin-left: 20%;
  margin-right: 20%;
`

const Description = styled.div`
  text-align: center;
`

class Portfolio extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        };
    }
    componentDidMount() {
        fetch(URL)
        .then(res => res.json())
        // .then(res => {
        //     this.setState({ data: res.includes.Asset });
        // }
        // )


        .then(res => console.log(res.includes.Asset));

    }

    
 render() {

         
     return (
    <Layout>
      <PhotoGrid>
      {/* <ItemContainer> */}
          {/* <Title>{title}</Title> */}
          {/* <Photo src={photo} /> */}
          {/* <Description>{description}</Description> */}
        {/* </ItemContainer> */}
        <ItemContainer>
          <Photo src="https://i.imgur.com/CosJK9o.jpg" />
        </ItemContainer>
        <ItemContainer>
          <Title></Title>
          <Photo src="https://i.imgur.com/tu0FRyn.jpg" />
        </ItemContainer>
        <ItemContainer>
          <Title></Title>
          <Photo src="https://i.imgur.com/wSqiQim.jpg" />
        </ItemContainer>
        <ItemContainer>
          <Title></Title>
          <Photo src="https://i.imgur.com/n8JRfj5.jpg" />
        </ItemContainer>
        <ItemContainer>
          <Title></Title>
          <Photo src="https://i.imgur.com/nMt8jsA.jpg" />
        </ItemContainer>
      </PhotoGrid>
    </Layout>
     )
 }
}



export default Portfolio
