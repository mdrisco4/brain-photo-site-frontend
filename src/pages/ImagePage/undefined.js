import React, { Component } from "react"
import styled from "styled-components"
// import { Link } from "react-router-dom"
// import Layout from "../components/layout"

const URL =
  "https://cdn.contentful.com/spaces/hkey7bq8d8xc/entries?access_token=bRB059jwbB4MphUkzedacei1ZQze8uxraRhh-pDSVIQ"

class ParkPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [],
      imageURL: [],
    }
  }
  componentDidMount() {
    fetch(URL)
      .then(res => res.json())
      .then(res => {
        this.setState({ data: res.includes.Asset })
        this.state.data.map(image => {
          this.setState({
            imageURL: [...this.state.imageURL, image.fields.file.url],
          })
        })
      })
      .catch(err => {
        console.error(err)
      })
  }
  render() {
    return (
        // <Layout>
      <image src="https://i.imgur.com/vOSBWlN.jpg"></image>
        // </Layout>
    )
  }
}

export default ParkPage
