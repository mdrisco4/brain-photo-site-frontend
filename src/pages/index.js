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
        width: "48%",
        paddingRight: "2%",
      }}>
    <div style={{
      width: "100%",
      fontSize: "60px",
      paddingTop: "12px",
      textAlign: "right",
      color: "black",
      // color: "rgb(216, 100, 52)",
      // textShadow: "2px 2px black",
    }}>Brian Fragnoli</div>
    <div
    style={{
      fontSize: "45px",
      textAlign: "right",
      paddingTop: "25px",
      // textShadow: "2px 2px rgb(216, 100, 52)",
    }}>Freelance Photographer</div>
    <div style={{
      textAlign: "right",
      fontSize: "24px",
    }}>I am a freelance photographer currently working on my certification using a `equipment`.  I specialize in ...</div>
    </div>
    <img src="https://i.imgur.com/w0PoPDx.png" style={{
      width: "40%",
      borderRadius: "45px",
      border: "4px solid black"
    }} />
    </div>
  </Layout>
)

export default IndexPage
