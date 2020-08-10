import React, { Component } from "react"
import Layout from "../components/layout"
import Project1 from "../images/projects/screenshot.png"
import Project2 from "../images/projects/generatorworks.png"
import Project3 from "../images/projects/project3.jpg"
import Project4 from "../images/projects/project4.jpg"
import Project5 from "../images/projects/project5.jpg"

class Projects extends Component {
  render() {
    return (
      <Layout>
        <div id="bg-img">
          <main id="work">
            <h1 className="lg-heading">
              My <span className="text-secondary">Work</span>
            </h1>
            <h2 className="sm-heading">Check out some of my projects</h2>
            <div className="projects">
              <div className="item">
                <a
                  href="https://getonhealth.ca/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={Project1} alt="project1" />
                </a>
                <a
                  href="https://getonhealth.ca/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-light"
                >
                  <i className="fas fa-eye"></i>Get On Health
                </a>
                {/* <a href="https://github.com/mmwilliamscodes/landing-page" target="_blank" rel="noopener noreferrer" className="btn-dark">Description</a> */}
              </div>
              <div className="item">
                <a
                  href="https://generatorworks.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={Project2} alt="project2" />
                </a>
                <a
                  href="https://generatorworks.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-light"
                >
                  <i className="fas fa-eye"></i>Generator Works
                </a>
                {/* <a href="https://github.com/mmwilliamscodes/social_network_page" target="_blank" rel="noopener noreferrer" className="btn-dark"><i className="fab fa-github"></i>Github</a> */}
              </div>
              {/* <div className="item">
                <a href="#!">
                  <img src={Project3} alt="project3" />
                </a>
                <a href="#!" className="btn-light"><i className="fas fa-eye"></i>Project</a>
                <a href="#!" className="btn-dark"><i className="fab fa-github"></i>Github</a>
              </div>
              <div className="item">
                <a href="#!">
                  <img src={Project4} alt="project4" />
                </a>
                <a href="#!" className="btn-light"><i className="fas fa-eye"></i>Project</a>
                <a href="#!" className="btn-dark"><i className="fab fa-github"></i>Github</a>
              </div>
              <div className="item">
                <a href="#!">
                  <img src={Project5} alt="project5" />
                </a>
                <a href="#!" className="btn-light"><i className="fas fa-eye"></i>Project</a>
                <a href="#!" className="btn-dark"><i className="fab fa-github"></i>Github</a>
              </div> */}
            </div>
          </main>
        </div>
      </Layout>
    )
  }
}

export default Projects
