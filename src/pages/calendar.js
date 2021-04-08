import React from "react";

import "../stylesheets/navigation.scss"
import NavigationPane from "../components/navigationPane"

export default function Calendar() {

    return (
        <>
        <div id="right-pane" className="flex-container">
        <NavigationPane />
        </div>
        
        <div>HELLO!</div>
        </>
    )
};