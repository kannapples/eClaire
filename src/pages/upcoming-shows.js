import React from "react";
import "../stylesheets/navigation.scss";
import "../stylesheets/general.scss";
import NavigationPane from "../components/navigationPane";
import {ShowInfo, NoShowInfo} from "../components/showInfo";
import MonthMarker from "../components/monthMarker";

export default function UpcomingShows() {

    return (
        <div className="page-container">
            <NavigationPane activePage='upcoming-shows'/>
            
            <div className="page-content">
                <div className="month-container">
                    <MonthMarker month="June" />
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
                            The release show so nice we did it twice!
                            Come celebrate the release of Old Oaks’ first full-length album at Brix Cider in Mount Horeb!
                        </>}
                        imgSrc="OldOaksLogo_ColorFrame.png"
                        altText="Old Oaks band logo"
                    />
                    <ShowInfo 
                        title="Charlie Painter Trio @ The Rigby"
                        date="Friday, June 18, 2021"
                        time="6pm - 9pm"
                        location="The Rigby"
                        address={<>
                            119 East Main Street<br/>
                            Madison, WI 53703
                        </>}
                        price={null}
                        description={<>
                            Come hang with the trio as we play some of the jazz classics you've never heard before.
                        </>}
                        imgSrc=""
                        altText="Charlie Painter Trio"
                    />
                </div>
                <div>
                    <MonthMarker month="July" />
                    <NoShowInfo 
                        description="No Shows (yet!)"
                    />
                </div>
                <div>
                    <MonthMarker month="August" />
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
        </div>
    )
};