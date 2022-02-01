import React, { useState } from 'react'
import { useStaticQuery, graphql } from "gatsby";
import BandBioCard from '../components/bandBioCard';
import BandDetailCard from '../components/bandDetailCard';
import NavigationPane from '../components/navigationPane';
import "../stylesheets/current-projects.scss";

export default function CurrentProjects() {
    const [showBandDetail, setShowBandDetail] = useState(false);
    const { oldOaks1, oldOaks2 } = useStaticQuery(graphql`
    query {
        oldOaks1: file(relativePath: { eq: "Woodrow_bur_oak.jpg" }) {
            childImageSharp {
                fixed(
                    width: 400
                    grayscale: true
                ) {
                ...GatsbyImageSharpFixed
                }
            }
        }
        oldOaks2: file(relativePath: { eq: "Woodrow_bur_oak.jpg" }) {
            childImageSharp {
                fixed(
                    width: 20
                ) {
                ...GatsbyImageSharpFixed
                }
            }
            }
    }`
    )

    const showBandDetailModal = showBandDetail ? "modal display-block" : "modal display-none";

    return (
        <div className='page-container'>
            <NavigationPane activePage='current-projects'/>
            <div className='current-projects-page-content'> 
                <BandBioCard
                    name='Old Oaks'
                    genre='Folk-Funk'
                    photo1={oldOaks1.childImageSharp.fixed}
                    //onlick
                />
                {showBandDetailModal &&
                    <BandDetailCard
                        name='Old Oaks' 
                        description={`A funky fusion of folk and jazz, Old Oaks is led by soulful vocalist and guitarist Frank Laufenberg, 
                                        accompanied by powerhouse saxophonist/flautist Daniel Haschke and Claire Kannapell's funky rhythms on the upright bass.`}
                        photo1={oldOaks1.childImageSharp.fixed}
                        photo1AltText={'Old Oaks Trio standing together and smiling.'}
                        photo2={oldOaks2.childImageSharp.fixed}
                        photo2AltText={'Old Oaks Trio in action at a show.'}
                    />
                }
                <BandBioCard
                    name='Bad Mustard'
                    genre='Jazz Fusion/Neo-Soul'
                    photo1={oldOaks1.childImageSharp.fixed}
                />
                <BandBioCard
                    name='The Lady Parts'
                    genre='Vocal Trio'
                    photo1={oldOaks1.childImageSharp.fixed}
                />
            </div>
        </div>
    );
}