import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
// import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <div style={{
      display: "flex",
    }}>
      <div style={{
        width: "50%",
      }}>
    <div style={{
      width: "100%",
      fontSize: "60px",
      paddingLeft: "10%",
      paddingTop: "12px",
      paddingRight: "12px",
      textAlign: "right",
      color: "rgb(216, 100, 52)",
      textShadow: "2px 2px black",
    }}>Brian Fragnoli</div>
    <div
    style={{
      fontSize: "45px",
      textAlign: "right",
      paddingTop: "25px",
      textShadow: "2px 2px rgb(216, 100, 52)",
    }}>Freelance Photography</div>
    </div>
    <img src="https://i.imgur.com/w0PoPDx.png" style={{
      width: "40%",
    }} />
    </div>
  </Layout>
)

export default IndexPage
