import React from "react"

import SEO from "../components/seo"
import NavigationBar from "../components/navigationBar"
import Img from "gatsby-image"

function IndexPage({ data }) {
  return (
    <div id="home-page-container" className="vw-100 vh-100 primary-color d-flex align-items-center justify-content-center body page">
      <SEO title="Home" />
      <Img fixed={data.file.childImageSharp.fixed}/>
      <div id="left-pane" className="flex-container">
        <NavigationBar />
      </div>
    </div>
  )
}

export default IndexPage


export const query = graphql`
  query {
    file(relativePath: { eq: "BW_smiling_with_hat.png" }) {
      childImageSharp {
        fixed(width: 500, height: 500) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`