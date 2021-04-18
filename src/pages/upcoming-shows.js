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
                    title="'The Day Before Yesterday' Album Release Show (Madison)"
                    date="Friday, May 28, 2021"
                    time="6pm - 9pm"
                    location="Come Back In"
                    address={<>
                        508 E Wilson St. <br/>
                        Madison, WI 53703
                    </>}
                    price={null}
                    description={<>
                        Come celebrate the release of Old Oaks’ first full-length album at Come Back In in Madison! <br/>
                        This will be a night you wont want to miss, complete with some fantastic special guests.
                    </>}
                    imgSrc="OldOaksLogo_ColorFrame.png"
                />
                <ShowInfo 
                    title="'The Day Before Yesterday' Album Release Show (Mt. Horeb)"
                    date="Friday, June 04, 2021"
                    time="5pm - 8pm"
                    location="Brix Cider"
                    address={<>
                        119 S 2nd St. <br/>
                        Mt Horeb, WI 53572
                    </>}
                    price={null}
                    description={<>
                        The release show so nice we did it twice! <br/>
                        Come celebrate the release of Old Oaks’ first full-length album at Brix Cider in Mount Horeb!
                    </>}
                    imgSrc="OldOaksLogo_ColorFrame.png"
                />
                <ShowInfo 
                    title="Old Oaks on the Sunn Cafe Patio"
                    date="Saturday, August 28, 2021"
                    time="12:30pm - 2:30pm"
                    location="Sunn Cafe"
                    address={<>
                        201 E Main St. <br/>
                        Mt Horeb, WI 53572
                    </>}
                    price={null}
                    description="Join us for a leisurely Saturday lunch at our favorite Mount Horeb cafe!"
                    imgSrc="OldOaksLogo_ColorFrame.png"
                />
            </div>
        </div>
    )
};