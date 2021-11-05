import React from "react";
import "../stylesheets/upcoming-shows.scss";

export function ShowInfo({date, time, location, address, price, bandName}) {
    return (
        <div className="show-info-container">            
            <div className="show-info-block-1">
                <span className="">{date}</span>
                <span className="">{time}</span>
            </div>
            <div className="show-info-block-2">
                <span className="show-info-band-name">{bandName}</span>
            </div>
            <div className="show-info-block-3">
                <div className="show-info-address">
                    <span className="">{location}</span>
                    <span className="">{address}</span>
                    <span className="">{price}</span>
                </div>
            </div>
        </div>
    );
}

export function NoShowInfo({description}) {
    return (
        <div className="show-info-container">
            <div className="show-info-details">
                <span className="show-info-description">{description}</span>
            </div>
        </div>
    )
}