import React from 'react'
import { useStaticQuery, graphql } from "gatsby";
import BandBio from '../components/bandBio';
import NavigationPane from '../components/navigationPane';

export default function CurrentProjects() {
    const { oldOaks1, oldOaks2 } = useStaticQuery(graphql`
    query {
        oldOaks1: file(relativePath: { eq: "Woodrow_bur_oak.jpg" }) {
        childImageSharp {
            fluid(quality: 90, maxWidth: 500) {
            ...GatsbyImageSharpFluid_withWebp
            }
        }
        }
        oldOaks2: file(relativePath: { eq: "Woodrow_bur_oak.jpg" }) {
            childImageSharp {
                fluid(quality: 90, maxWidth: 500) {
                ...GatsbyImageSharpFluid_withWebp
                }
            }
            }
    }`
    )

    return (
        <div className='pageContainer'>
            <NavigationPane activePage='upcoming-shows'/>
            <BandBio 
                bandName='Old Oaks' 
                bandDescription={`A funky fusion of folk and jazz, Old Oaks is led by soulful vocalist and guitarist Frank Laufenberg, 
                                accompanied by powerhouse saxophonist/flautist Daniel Haschke and Claire Kannapell's funky rhythms on the upright bass.`}
                bandPhoto1={oldOaks1.childImageSharp.fluid}
                bandPhoto1AltText={'Old Oaks Trio standing together and smiling.'}
                bandPhoto2={oldOaks2.childImageSharp.fluid}
                bandPhoto2AltText={'Old Oaks Trio in action at a show.'}
            />
        </div>
    );
}