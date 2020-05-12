import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
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

const Portfolio = props => {
  const title = props.data.allContentfulAsset.nodes[0].title
  const photo = props.data.allContentfulAsset.nodes[0].fluid.src
  const description = props.data.allContentfulAsset.nodes[0].description

  return (
    <Layout>
      <PhotoGrid>
        <ItemContainer>
          <Title>{title}</Title>
          <Photo src={photo} />
          <Description>{description}</Description>
        </ItemContainer>
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

export default Portfolio
