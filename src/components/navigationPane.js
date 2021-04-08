import React from "react";
import { Link } from "gatsby"
import "../stylesheets/navigation.scss"
import MailingListForm from "./mailingListForm";

export default function NavigationPane() {
    return (
    <div id="navigation">
    
        <h1 className="main-title">Claire Kannapell</h1>
        <div className="navigation-link">
            <Link to="/calendar" className="btn btn-lg custom-button">Upcoming Shows</Link>
        </div>
        <div className="navigation-link">
            <Link to="/current-projects" className="btn btn-lg custom-button">Current Projects</Link>
        </div>
        <div className="navigation-link">
            <Link to="/previous-work" className="btn btn-lg custom-button">Previous Work</Link>
        </div>
        <div className="navigation-link">
            <Link to="/media" className="btn btn-lg custom-button">Media</Link>
        </div>
        <div className="mailing-list">
            <span className="mailing-list-title">Sign Up for my Mailing List!</span>
            <span className="mailing-list-description">Get monthly updates about new videos and upcoming shows</span>
                <MailingListForm className="" />
        </div>
    </div>
    )
};