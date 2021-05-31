import React from "react";
import Image from "../components/Image";
import "../stylesheets/showInfo.scss";

export function ShowInfo({date, time, location, address, price, description, imgSrc, altText}) {
    return (
        <div className="show-info-container">
            <div className="show-info-image">
                {imgSrc !== '' &&
                    <Image 
                        src={imgSrc}
                        alt={altText}
                    />
                }
                {imgSrc === '' &&
                    <div className="band-logo-alt-text">{altText}</div>
                }
            </div>
            
            <div className="show-info-details">
                <div className="show-info-date-time">
                    <span className="show-info-tag">{date}</span>
                    <span className="show-info-tag">{time}</span>
                </div>
                <div className="show-info-block">
                    <div className="show-info-address">
                        <span className="show-info-tag">{location}</span>
                        <span className="show-info-tag">{address}</span>
                        <span className="show-info-tag">{price}</span>
                    </div>
                    <div className="show-info-description">{description}</div>
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