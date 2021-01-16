import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import NavigationBar from "../components/navigationBar"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div id="home-page-container" className="vw-100 vh-100 primary-color d-flex align-items-center justify-content-center body page">
    <div id="left-pane" className="flex-container">
    <NavigationBar />
    <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
    </div>
    </div>
  </Layout>
)

export default IndexPage
