import React, { Component } from "react";
import Zmage from "react-zmage";
import Fade from "react-reveal";

class Portfolio extends Component {
    render() {
        if (!this.props.data) return null;

        return (
            <section id="portfolio">
        <Fade left duration={1000} distance="40px">
          <div className="row">
            <div className="twelve columns collapsed">
              <h1>Check Out Some of My Projects</h1>

              <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
                <div class="columns portfolio-item">
                  <div class="item-wrap">
                    <img src="images/portfolio/NikeConcept.jpg" alt= "Nike Concept Page" />
                    <span class="title" >Nike Concept Page</span>
                  </div>
                </div>
                <div class="columns portfolio-item">
                  <div class="item-wrap">
                    <img src="images/portfolio/GigaGames.jpg" alt="Giga Games" />
                    <span class="title" >Giga Games</span>
                  </div>
                </div>
                <div class="columns portfolio-item">
                  <div class="item-wrap">
                    <img src="images/portfolio/OldPortfolio.jpg" alt="Old Portfolio" />
                    <span class="title" >Old Portfolio</span>
                  </div>
                </div>                  
              </div>
            </div>
          </div>
        </Fade>
      </section>
        );
    }
}

export default Portfolio;