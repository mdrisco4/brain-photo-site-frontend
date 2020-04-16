import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
// import SEO from "../components/seo"

const About = () => (
  <Layout>
    <div style={{
        textAlign: "center",
        width: "80%",
        fontSize: "56px",
        marginLeft: "auto",
        marginRight: "auto",
    }}>
      If you have any questions anout any of my work or would like to work with
      me please contact me at:
    </div>
    <a href="mailto:beefrags1982@gmail.com" target="_blank"
      style={{
          color: "black",
          textDecoration: "none",
        display: "block",
        marginLeft: "auto",
        marginRight: "auto",
        textAlign: "center",
        fontSize: "45px",
        marginTop: "24px",
        fontWeight: "bold",
        textShadow: "1px 1px rgb(216, 100, 52)",
      }}
    >
      beefrags1982@gmail.com
    </a>
    <div
      style={{
        //   display: "inline-block",
        textAlign: "center",
        fontSize: "45px",
        marginTop: "24px",
        // marginLeft: "auto",
        // marginRight: "auto",
        fontWeight: "bold",
        textShadow: "1px 1px rgb(216, 100, 52)",
      }}
    >
      (585) 267-9609
    </div>
    <div
      style={{
        textAlign: "center",
        fontSize: "45px",
        marginTop: "24px",
        fontWeight: "bold",
        textShadow: "1px 1px rgb(216, 100, 52)",
      }}
    >
      Perinton, NY 14450
    </div>
  </Layout>
)

export default About
