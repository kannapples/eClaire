import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import BackgroundImage from "gatsby-background-image";
import styled from 'styled-components'
import "../stylesheets/navigation.scss";
import "../stylesheets/general.scss";
import "../stylesheets/upcoming-shows.scss";
import NavigationPane from "../components/navigationPane";
import {ShowInfo, NoShowInfo} from "../components/showInfo";
import MonthMarker from "../components/monthMarker";

const BackgroundSection = ({ className }) => {
    const { upcoming } = useStaticQuery(graphql`
    query {
        upcoming: file(relativePath: { eq: "Woodrow_bur_oak.jpg" }) {
        childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
            ...GatsbyImageSharpFluid_withWebp
            }
        }
        }
    }`
    )

    const imageData = upcoming.childImageSharp.fluid

    return (
    <BackgroundImage
        Tag="section"
        className={className}
        fluid={imageData}
        backgroundColor={`#ffffff`}
        >
        <div className="page-container">
            <NavigationPane activePage='upcoming-shows'/>
            <UpcomingShowContent />
        </div>
    </BackgroundImage>
    )
  }

  const UpcomingShowContent = () => {
    return (
        <div className="upcoming-show-page-content">
            <MonthMarker month="June" />
            <div className="month-container">
                <ShowInfo 
                    title="'The Day Before Yesterday' Album Release Show (Mt. Horeb)"
                    date="Friday, June 04"
                    time="5pm - 8pm"
                    location="Brix Cider"
                    address={<>
                        119 S 2nd St. <br/>
                        Mt Horeb, WI 53572
                    </>}
                    price={null}
                    bandName="Old Oaks"
                />
                <div className="horizontal-line"/>
                <ShowInfo 
                    title="Charlie Painter Trio @ The Rigby"
                    date="Friday, June 18"
                    time="6pm - 9pm"
                    location="The Rigby"
                    address={<>
                        119 East Main Street<br/>
                        Madison, WI 53703
                    </>}
                    price={null}
                    bandName="Charlie Painter Trio"
                />
            </div>
            <MonthMarker month="July" />
            <div className="month-container">
                <NoShowInfo 
                    description="No Shows (yet!)"
                />
            </div>
            <MonthMarker month="August" />
            <div className="month-container">
                <ShowInfo 
                    title="Old Oaks on the Sunn Cafe Patio"
                    date="Saturday, August 28"
                    time="12:30pm - 2:30pm"
                    location="Sunn Cafe"
                    address={<>
                        201 E Main St. <br/>
                        Mt Horeb, WI 53572
                    </>}
                    bandName="Old Oaks"
                />
            </div>
        </div>
    );
}
  
  const UpcomingShows = styled(BackgroundSection)`
    width: 100%;
    background-position: right center;
    background-repeat: repeat-y;
    background-size: cover;
  `;
  
  export default UpcomingShows;