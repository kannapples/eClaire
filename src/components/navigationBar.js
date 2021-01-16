import React from "react";
import { Link } from "gatsby"

import "../stylesheets/navigation.css"

export default function NavigationBar() {
    return (
        <div id="navigation">
            <div>
                <h1 className="main-title">Claire Kannapell</h1>
                <div className="navigation-link">
                    <Link to="/previous-work">Previous Work</Link>
                </div>
                <div className="navigation-link">
                    <Link to="/current-projects">Current Projects</Link>
                </div>
                <div className="navigation-link">
                    <Link to="/awards">Awards</Link>
                </div>
                <div className="navigation-link">
                    <Link to="/upcoming-shows">Upcoming Shows</Link>
                </div>
            </div>
        </div>
    );
}