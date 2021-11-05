import React from "react";
import "../stylesheets/upcoming-shows.scss";

export default function MonthMarker({ month }) {
    return (
        <div class="month-marker">
            {month}
        </div>
    )    
}