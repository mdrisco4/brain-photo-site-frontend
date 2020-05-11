import React from "react"
import styled from "styled-components"
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


//   ??
//   client.getAssets()
//   .then(function (assets) {
//     assets.items.map(function(asset){
//       var imageURL = url;
//     });
//   })
//   .catch(function (e) {
//     console.log(e);
//   });




//SINGLE ENTRY 

// client.getEntry('20Bpyxs7Mswdx3cMBijZ8f')
// .then(function (entry) {
  // logs the entry metadata
//   console.log(entry)

  // logs the field with ID title
//   console.log(entry.fields.productName)
// })



//ALL ENTRIES IN SPACE

// client.getEntries()
// .then(function (entries) {
//   // log the title for all the entries that have it
//   entries.items.forEach(function (entry) {
//     if(entry.fields.productName) {
//       console.log(entry.fields.productName)
//     }
//   })
// })

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

const Portfolio = () => (
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

export default Portfolio
