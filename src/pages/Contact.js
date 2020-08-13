import React, { Component } from "react"
import Layout from "../components/layout"

class Contact extends Component {
  render() {
    return (
      <Layout>
        <div id="bg-img">
          <main id="contact">
            <h1 className="lg-heading">
              Contact <span className="text-secondary">Me</span>
            </h1>
            <h2 className="sm-heading">Send me a message</h2>
            <div className="contact-form">
              <div className="bio">
                <h3 className="text-secondary">
                  <form
                    method="POST"
                    data-netlify="true"
                    netlify-honeypot="bot-field"
                    name="contact"
                    className="myform"
                  >
                    <input type="hidden" name="form-name" value="contact" />
                    <input type="hidden" name="bot-field" />
                    <div className="fields">
                      <label>Name</label>
                      <input type="text" name="name" placeholder="John Doe" />
                    </div>

                    <div className="fields">
                      <label>Email</label>
                      <input
                        type="email"
                        name="email"
                        placeholder="example@gmail.com"
                      />
                    </div>

                    <div className="fields">
                      <label>Message</label>
                      <textarea name="message"></textarea>
                    </div>

                    <button className="button" name="submit" type="submit">
                      Submit
                    </button>
                  </form>
                </h3>
              </div>
            </div>
          </main>
        </div>
      </Layout>
    )
  }
}

export default Contact
