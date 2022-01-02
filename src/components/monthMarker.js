import React from "react";
import "../stylesheets/upcoming-shows.scss";

export default function MonthMarker({ month }) {
    return (
        <>
            <div className="month-marker">
                {month}
            </div>
            <div className="horizontal-line"/>
        </>
        
    )    
}
