/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  console.log(data)

  return (
    <>
          <Header />
      <body
        style={{
          margin: "0",
        }}
      >
      <div
        style={{
          margin: `0`,
          // backgroundColor: "rgb(42, 97, 24)",
          backgroundColor: "#333",
          // border: "5px solid rgb(42, 97, 24)",
          border: "5px solid #333",
          minHeight: "1200px",
        }}
        >
        <main>{children}</main>
      </div>
        </body>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
