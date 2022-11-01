import React, { Component } from "react"
import "../styles/main.css"

class Footer extends Component {
  render() {
    return (
      <footer id="main-footer">
        Copyright &copy; 2020 - {new Date().getFullYear()}{" "}
        <a
          href="https://www.websitepolicies.com/policies/view/fxv3Ku4C
"
          target="_blank"
          rel="noopener noreferrer"
        >
          Privacy Policy
        </a>{" "}
        <a
          href="https://www.websitepolicies.com/policies/view/6NsGNj0C
"
          target="_blank"
          rel="noopener noreferrer"
        >
          Cookie Policy
        </a>
      </footer>
    )
  }
}

export default Footer
