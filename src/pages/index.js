import React, { Component } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

class IndexPage extends React.Component {
  render(){
      return(
        <Layout>
           <SEO title="Home" />
          <div id="bg-img">
            <main id="home" >
              <h1 className="lg-heading" id="myName">
                Michelle <span className="text-secondary">Williams</span>
              </h1>
              <h2 className="sm-heading">
                Web Developer
              </h2>
              </main>
          </div>
          </Layout>
      )
  }
}

export default IndexPage
