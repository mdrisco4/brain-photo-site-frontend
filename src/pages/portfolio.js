import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
// import SEO from "../components/seo"

const Portfolio = () => (
  <Layout>
      <div style={{
          display: "grid",
          gridTemplateRows: "1fr 1fr",
          gridTemplateColumns: " 1fr 1fr 1fr",
      }}>
    <img src="https://i.imgur.com/CosJK9o.jpg" style={{
        width: "60%",
        marginTop: "24px",
        marginLeft: "20%",
        marginRight: "20%",
    }}/>
    <img src="https://i.imgur.com/tu0FRyn.jpg" style={{
        width: "60%",
        marginTop: "24px",
        marginLeft: "20%",
        marginRight: "20%",
    }}/>
    <img src="https://i.imgur.com/wSqiQim.jpg" style={{
        width: "60%",
        marginTop: "24px",
        marginLeft: "20%",
        marginRight: "20%",
    }}/>
    <img src="https://i.imgur.com/n8JRfj5.jpg" style={{
        width: "60%",
        marginTop: "24px",
        marginLeft: "20%",
        marginRight: "20%",
    }}/>
    <img src="https://i.imgur.com/nMt8jsA.jpg" style={{
        width: "60%",
        marginTop: "24px",
        marginLeft: "20%",
        marginRight: "20%",
    }}/>
    </div>
  </Layout>
)

export default Portfolio
