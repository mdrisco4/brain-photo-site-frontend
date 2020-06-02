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

// const URL = "https://cdn.contentful.com/spaces/hkey7bq8d8xc/entries?access_token=bRB059jwbB4MphUkzedacei1ZQze8uxraRhh-pDSVIQ"
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

const URL = "https://cdn.contentful.com/spaces/hkey7bq8d8xc/entries?access_token=bRB059jwbB4MphUkzedacei1ZQze8uxraRhh-pDSVIQ"


class Portfolio extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            codes: [],
            title: [],
            imageURL: [],
            description: []
        };
    }
    componentDidMount() {
        fetch(URL)
        .then(res => res.json())
        .then(res => {
            this.setState({ data: res.includes.Asset });
            this.state.data.map(code => {
                this.setState({ codes: [...this.state.codes, code.sys.id] });
                this.setState({ title: [...this.state.title, code.fields.title] });
                this.setState({ imageURL: [...this.state.imageURL, code.fields.file.url] });
                this.setState({ description: [...this.state.description, code.fields.description] });
            });
            console.log(res.includes.Asset);
            console.log(this.state.codes)
              });
        }

        // .then(res => console.log(res.includes.Asset));


    
 render() {
    let photos = this.state.data.map(item => {
        return (
          <div key={item.sys.codes}>
              <div
                className="image"
                style={{ backgroundImage: `url(${item.fields.file.url})` }}
                >
                <h4 className="title">{item.fields.title}</h4>
                <h4 className="description">{item.fields.description}</h4>
              </div>
          </div>
        );
      });
         




     return <Layout>
         <PhotoGrid>
             <ItemContainer>
            <div className="images">{photos}</div>;
             </ItemContainer>
         </PhotoGrid>
            </Layout>

    // <Layout>
    //   <PhotoGrid>
    //   {/* <ItemContainer> */}
    //       {/* <Title>{title}</Title> */}
    //       {/* <Photo src={photo} /> */}
    //       {/* <Description>{description}</Description> */}
    //     {/* </ItemContainer> */}
    //     <ItemContainer>
    //       <Photo src="https://i.imgur.com/CosJK9o.jpg" />
    //     </ItemContainer>
    //     <ItemContainer>
    //       <Title></Title>
    //       <Photo src="https://i.imgur.com/tu0FRyn.jpg" />
    //     </ItemContainer>
    //     <ItemContainer>
    //       <Title></Title>
    //       <Photo src="https://i.imgur.com/wSqiQim.jpg" />
    //     </ItemContainer>
    //     <ItemContainer>
    //       <Title></Title>
    //       <Photo src="https://i.imgur.com/n8JRfj5.jpg" />
    //     </ItemContainer>
    //     <ItemContainer>
    //       <Title></Title>
    //       <Photo src="https://i.imgur.com/nMt8jsA.jpg" />
    //     </ItemContainer>
    //   </PhotoGrid>
    // </Layout>
    //  )
 }
}



export default Portfolio
