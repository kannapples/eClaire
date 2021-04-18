import React from 'react';
import { useStaticQuery, graphql } from "gatsby";
import BackgroundImage from "gatsby-background-image";
import styled from 'styled-components'
import SEO from "../components/seo";
import NavigationPane from "../components/navigationPane";

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
          <NavigationPane activePage=""/>
      </div>
    </BackgroundImage>
  )
}

const IndexPage = styled(BackgroundSection)`
  width: 100%;
  background-position: middle center;
  background-repeat: repeat-y;
  background-size: cover;
`;

export default IndexPage;