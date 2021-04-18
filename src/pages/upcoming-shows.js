import React from "react";
import "../stylesheets/navigation.scss";
import "../stylesheets/general.scss";
import NavigationPane from "../components/navigationPane";
import ShowInfo from "../components/showInfo";

export default function UpcomingShows() {

    return (
        <div className="page-container">
            <NavigationPane activePage='upcoming-shows'/>
            
            <div className="page-content">
                <ShowInfo 
                    title="Old Oaks Album Release Show"
                    date="1/1/2020"
                    time="7pm"
                    location="Come Back Inn"
                    price={null}
                    description="Come celebrate the release of Old Oaks first full-length album!"
                />
                <ShowInfo 
                    title="Old Oaks Album Release Show 2"
                    date="1/1/2020"
                    time="7pm"
                    location="Brix Cider"
                    price={null}
                    description="Come celebrate the release of Old Oaks first full-length album!"
                />
            </div>
        </div>
    )
};