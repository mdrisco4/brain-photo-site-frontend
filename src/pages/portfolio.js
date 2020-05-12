import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby";
// import { Link } from "gatsby"

import Layout from "../components/layout"
// import SEO from "../components/seo"

var contentful = require('contentful')
// var client = contentful.createClient({
//     space: 'hkey7bq8d8xc',
//     accessToken: 'bRB059jwbB4MphUkzedacei1ZQze8uxraRhh-pDSVIQ'
    // accessToken: 'bVApRues2Wm_bYmDaozMg7cudIqxGtEghelAZQOKSLNQ'
//   })

// const url =
//   "https://cdn.contentful.com/spaces/hkey7bq8d8xc/entries?access_token=y0u9tyuxRS9TnyYKQ_yhIyIIaWkOj0mb1TS6yKl7VUk"



export const ImageQuery = graphql`
    query MyQuery {
        allContentfulAsset {
        nodes {
            title
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

const Photo = styled.img`
  width: 60%;
  margin-top: 24px;
  margin-left: 20%;
  margin-right: 20%;
`

const Portfolio = props => {
    const image = props.data.allContentfulAsset.nodes[0].title


return (
  <Layout>
    <PhotoGrid>
      <Photo src="https://i.imgur.com/CosJK9o.jpg" />
      <Photo src="https://i.imgur.com/tu0FRyn.jpg" />
      <Photo src="https://i.imgur.com/wSqiQim.jpg" />
      <Photo src="https://i.imgur.com/n8JRfj5.jpg" />
      <Photo src="https://i.imgur.com/nMt8jsA.jpg" />
    </PhotoGrid>
  </Layout>
)
}

export default Portfolio
