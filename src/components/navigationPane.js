import React from "react";
import { Link } from "gatsby"
import "../stylesheets/navigation.scss"
import MailingListForm from "./mailingListForm";

export default function NavigationPane({activePage}) {

    return (
        <div id="navigation" className={"nav-left-pane main-page-left-pane"}>    
            <div className="main-title-container ">
                <Link to="/" className="main-title">Claire Kannapell</Link>
            </div>
            <div className="navigation-link">
                <Link to="/current-projects" className={`btn btn-lg custom-button ${activePage === 'current-projects' ? 'activeLink' : ''}`}>Current Projects</Link>
            </div>
            <div className="navigation-link">
                <Link to="/upcoming-shows" className={`btn btn-lg custom-button ${activePage === 'upcoming-shows' ? 'activeLink' : ''}`}>Upcoming Shows</Link>
            </div>
            <div className="navigation-link">
                <Link to="/previous-work" className={`btn btn-lg custom-button ${activePage === 'previous-work' ? 'activeLink' : ''}`}>Previous Work</Link>
            </div>
            <div className="navigation-link">
                <Link to="/media" className={`btn btn-lg custom-button ${activePage === 'media' ? 'activeLink' : ''}`}>Media</Link>
            </div>
            <div className="mailing-list">
                <span className="mailing-list-title">Sign Up for my Mailing List!</span>
                <span className="mailing-list-description">Get monthly updates about new videos and upcoming shows</span>
                    <MailingListForm className="" />
            </div>
        </div>
    )
};