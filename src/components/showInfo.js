import React from "react";
import "../stylesheets/showInfo.scss";

export default function ShowInfo({date, time, location, price, description}) {
    return (
        <div className="show-info-container">
            <span>{date}</span>
            <span>{time}</span>
            <span>{location}</span>
            <span>{price}</span>
            <span>{description}</span>
        </div>
    );
}