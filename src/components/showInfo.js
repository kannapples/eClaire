import React from "react";
import Image from "../components/Image";
import "../stylesheets/showInfo.scss";

export default function ShowInfo({date, time, location, address, price, description, imgSrc}) {
    return (
        <div className="show-info-container">
            <div className="show-info-image">
                <Image 
                    src={imgSrc}
                    alt="Old Oaks Logo"
                />
            </div>
            <div className="show-info-details">
                <span className="show-info-description">{description}</span>
                <div className="show-info-block">
                    <div className="show-info-date-time">
                        <span className="show-info-tag">{date}</span>
                        <span className="show-info-tag">{time}</span>
                        <span className="show-info-tag">{price}</span>
                    </div>
                    <div className="show-info-address">
                        <span className="show-info-tag">{location}</span>
                        <span className="show-info-tag">{address}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}