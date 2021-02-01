import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"
import BackgroundImage from "gatsby-background-image"

import SEO from "../components/seo"
import NavigationBar from "../components/navigationBar"



const BackgroundSection = ({ className }) => {
  const data = useStaticQuery(graphql`
    query {
      desktop: file(relativePath: { eq: "ClaireKannapell_pressphoto.jpg" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 1920) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }`
  )

  const imageData = data.desktop.childImageSharp.fluid

  return (
      <BackgroundImage
        Tag="section"
        className={className}
        fluid={imageData}
        backgroundColor={`#ffffff`}
      >
        <div id="home-page-container"> 
          <SEO title="Home" />
          <div id="left-pane" className="flex-container">
            <NavigationBar />
          </div>
        </div>
      </BackgroundImage>
  )
}

const IndexPage = styled(BackgroundSection)`
  width: 100%;
  background-position: middle center;
  background-repeat: repeat-y;
  background-size: cover;
`

export default IndexPage
