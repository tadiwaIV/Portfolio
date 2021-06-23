import React, { Component } from "react";
import Fade from "react-reveal";

class Footer extends Component {
  render() {
    if (!this.props.data) return null;

    const networks = this.props.data.social.map(function (network) {
      return (
        <li key={network.name}>
          <a href={network.url}>
            <i className={network.className}></i>
          </a>
        </li>
      );
    });

    return (      
      <footer>
        <div className="row">
          <Fade bottom>
            <div className="twelve columns">
              <ul className="social-links">
                <li>
                  <a href="https://www.facebook.com/tadiwa.chivhere">
                    <i class="fa fa-facebook"></i>
                  </a>
                </li>                
                <li>
                  <a href="https://www.linkedin.com/in/tadiwa-chivhere-93a54116a/">
                    <i class="fa fa-linkedin"></i>
                  </a>
                </li>                
                <li>
                  <a href="https://github.com/tadiwaIV">
                    <i class="fa fa-github"></i>
                  </a>
                </li>
              </ul>                            
            </div>
          </Fade>

          <div id="go-top">
            <a className="smoothscroll" title="Back to Top" href="#home">
              <i className="icon-up-open"></i>
            </a>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
