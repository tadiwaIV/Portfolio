import React, { Component } from "react";
import Fade from "react-reveal";

class About extends Component {
  render() {
    if (!this.props.data) return null;

    const profilepic = "images/" + this.props.data.image;
    const resumeDownload = this.props.data.resumedownload;

    return (
      <section id="about">
        <Fade duration={1000}>
          <div className="row">
            <div className="three columns">
              <img
                className="profile-pic"
                src="images/profilepic2.JPG"
                alt="Profile Pic"
              />
            </div>
            <div className="nine columns main-col">
              <h2>About Me</h2>

              <p>I’m a recent University grad with a major in Computer Science. I’m on the lookout for an opportunity that’ll enable me
               to persue my passion for computersall the while providing me the oppurtunits to kickstart a career in Frontend Web
               Development. Im an avid gamer and sport enthusiast and enjoy the meeting and working with different types of people.
               I’m a very social individual who prefers to work in a team.</p>
              <div className="row">
                <div className="columns contact-details">
                  <h2>Contact Details</h2>
                  <p className="address">
                    <i className="fa fa-map-marker"></i>
                    Port Elizabeth, RSA
                    <br />
                    <i className="fa fa-envelope"></i>
                    tadiwachivhere@gmail.com
                    <br />
                    <i class="fa fa-link"></i>
                    https://www.website.com
                  </p>
                </div>
                <div className="columns download">
                  <p>
                    <a href={resumeDownload} className="button">
                      <i className="fa fa-download"></i>Download Resume
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Fade>
      </section>
    );
  }
}

export default About;
