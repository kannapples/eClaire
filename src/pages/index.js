import React from "react"

import SEO from "../components/seo"
import NavigationBar from "../components/navigationBar"

function IndexPage() {
  return (
    <div id="home-page-container" className="vw-100 vh-100 primary-color d-flex align-items-center justify-content-center body page">
      <SEO title="Home" />
      <div id="left-pane" className="flex-container">
        <NavigationBar />
      </div>
    </div>
  )
}

export default IndexPage