import React, { Component } from "react";
import {Container, Row, Col, Button} from 'react-bootstrap';
import Zmage from "react-zmage";
import Fade from "react-reveal";

class Portfolio extends Component {
    render() {
        if (!this.props.data) return null;

        return (
            <section id="portfolio">
        <Fade left duration={1000} distance="40px">
          <Container>
            <Row>
              <div className="twelve columns collapsed">
                <h1>Check Out Some of My Projects</h1>
              </div>
            </Row>
            <Row>
              <div className="twelve columns collapsed">
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
                      <img src="images/portfolio/VibeCheck.jpg" alt="Old Portfolio" />
                      <span class="title">Vibe Check</span>
                    </div>
                  </div>
                </div>
              </div>
            </Row>
          </Container>
        </Fade>
      </section>
        );
    }
}

export default Portfolio;
