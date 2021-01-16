import React from "react";
import { Link } from "gatsby"

import "../stylesheets/navigation.scss"

export default function NavigationBar() {
    return (
        <div id="navigation">
            <div>
                <h1 className="main-title">Claire Kannapell</h1>
                <div className="navigation-link">
                    <Link to="/upcoming-shows" className="btn btn-lg custom-button">Upcoming Shows</Link>
                </div>
                <div className="navigation-link">
                    <Link to="/current-projects" className="btn btn-lg custom-button">Current Projects</Link>
                </div>
                <div className="navigation-link">
                    <Link to="/previous-work" className="btn btn-lg custom-button">Previous Work</Link>
                </div>
                <div className="navigation-link">
                    <Link to="/awards" className="btn btn-lg custom-button">Awards</Link>
                </div>
                
            </div>
        </div>
    );
}