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
            <div className="body-text">
                Hello! I'm a performer and multi-instrumentalist based in Madison, WI. 
                My current projects include the folk-funk trio <a href="https://www.oldoaksmusic.com/">Old Oaks</a> and jazz quartet <a href="https://www.toygerjazz.com/">Toyger</a>.
                I'm a performing troupe member of improv comedy troupe <a href="https://monkeybusinessinstitute.com/">Monkey Business Institute</a>. 
                My vocal trio Lady Parts releases video covers on our <a href="https://www.youtube.com/@theladyparts1794">Youtube channel</a>, and can be occasionally found performing live in Madison.

                I've always got exciting projects going on; My mailing list is a great way to stay up-to-date on some great shows and content! Sign up below :).
            </div>
            {/* <div className="navigation-link">
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
            </div> */}
            <div className="mailing-list">
                <span className="mailing-list-title">Sign Up for my Mailing List!</span>
                <span className="mailing-list-description">Get monthly updates about new videos and upcoming shows</span>
                    <MailingListForm className="" />
            </div>
        </div>
    )
};