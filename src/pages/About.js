import React, { Component } from "react"
import Layout from "../components/layout"
import Photo2 from "../images/moi2.jpg"

class About extends Component {
  render() {
    return (
      <Layout>
        <div id="bg-img">
          <main id="about">
            <h1 className="lg-heading">
              About <span className="text-secondary">Me</span>
            </h1>
            <h2 className="sm-heading">A little about me</h2>
            <div className="about-info">
              <img src={Photo2} alt="Michelle Williams" className="bio-image" />
              <div className="bio">
                <h3 className="text-secondary">Biography</h3>
                <p>
                  Accomplished in Web and Software Development: HTML, CSS, SASS,
                  Javascript, ES6+, AJAX, APIs, PHP, MySQL, Node.js, Express,
                  React, MongoDB, Laravel, CakePHP, WordPress, Drupal, Swift,
                  iOS applications, HTML Emails, GitHub, BitBucket, Adobe
                  Creative Suite, Testing and Version Control.
                </p>
              </div>

              <div className="job job-1">
                <h3>my360e</h3>
                <h6>Software Engineer</h6>
                <p>
                  Created enterprise level software for contractors. This
                  Software helped contractors keep track of billing, quoting and
                  scheduling. Built with the CakePHP framework.
                </p>
              </div>
              <div className="job job-2">
                <h3>BoxCast</h3>
                <h6>Software Engineer</h6>
                <p>
                  Focus on delivering live-streaming to clients. Worked on
                  interfaces and dashboards of multiple applications. Also
                  worked on the mobile iOS application.
                </p>
              </div>
              <div className="job job-3">
                <h3>NOSHOK</h3>
                <h6>Software Engineer</h6>
                <p>
                  Focus on ecommerce and marketing webistes. Also maintaining
                  existing code bases and expanding their features.
                </p>
              </div>
            </div>
          </main>
        </div>
      </Layout>
    )
  }
}

export default About
