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
              <div class="icons">
                <a href="https://www.linkedin.com/in/michelle-williams-3b8a48132/" target="_blank">
                  <i class="fab fa-linkedin fa-2x"></i>
                </a>
                <a href="https://github.com/mmwilliamscodes" target="_blank">
                  <i class="fab fa-github fa-2x"></i>
                </a>
                <a href="https://twitter.com/MMWilli51510569" target="_blank">
                  <i class="fab fa-twitter fa-2x"></i>
                </a>
              </div>
              </main>
          </div>
          </Layout>
      )
  }
}

export default IndexPage
