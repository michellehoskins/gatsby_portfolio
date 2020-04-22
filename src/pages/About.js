import React, { Component } from 'react';
import Layout from "../components/layout"
import Photo2 from '../images/moi2.jpg';

class About extends Component {
    render(){
        return(
        <Layout>
            <div id="bg-img">
              <main id="about">
                <h1 className="lg-heading">About <span className="text-secondary">Me</span></h1>
                <h2 className="sm-heading">
                  A little about me
                </h2>
              <div className="about-info">
                <img src={Photo2} alt="Michelle Williams" className="bio-image" />
              <div className="bio">
                <h3 className="text-secondary">
                  Biography
                </h3>
                <p>
                  Accomplished in Web and Software Development: HTML, CSS, SASS, Javascript, ES6+ PHP, MySQL, Node.js, Express, React, MongoDB, Laravel, CakePHP, WordPress, HTML Emails, GitHub, BitBucket, Adobe Creative Suite, and Version Control.
                </p>
              </div>

        <div className="job job-1">
          <h3>Case Western Reserve University</h3>
          <h6>Full Stack Web Developer Bootcamp</h6>
          <p>
            It was a 6 month development bootcamp. We received a solid background in HTML, CSS, and Javascript before diving into the MERN stack. Built real projects with real people.
          </p>
        </div>
        <div className="job job-2">
          <h3>my360e</h3>
          <h6>Developer</h6>
          <p>
            Created enterprise level software for contractors. Built with the CakePHP framework.
          </p>
        </div>
        <div className="job job-3">
          <h3>Get On Health</h3>
          <h6>Developer</h6>
          <p>
            Created a beautiful application for MDs and other healthcare professionials who want Telehealth services for their patients.
          </p>
        </div>
      </div>
    </main>
            </div>
            </Layout>
        )
    }
}

export default About;