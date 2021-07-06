import React, { Component } from "react";
import {Container, Row, Col, Button} from 'react-bootstrap';
import Zmage from "react-zmage";
import Fade from "react-reveal";

class Portfolio extends Component {
    render() {
        if (!this.props.data) return null;

        return (
            <section id="portfolio">
        <Fade left duration={1000} distance="10px">
          <Container>
            <Row>
              <div className="twelve columns collapsed">
                <h1>Check Out Some of My Projects</h1>
              </div>
            </Row>
            <Row>
              <Col sm={12}>
                <div class="item-wrap">
                  <img src="images/portfolio/NikeConcept.jpg" alt= "Nike Concept Page" />
                  <span class="title" >Nike Concept Page</span>
                </div>
              </Col>
              <Col sm={12}>
                <div class="item-wrap">
                  <img src="images/portfolio/GigaGames.jpg" alt="Giga Games" />
                  <span class="title" >Giga Games</span>
                </div>
                </Col>
              <Col sm={12}>
                <div class="item-wrap">
                  <img src="images/portfolio/VibeCheck.jpg" alt="VibeCheck" />
                  <span class="title">Vibe Check</span>
                </div>
              </Col>
              <Col sm={12}>
                <div class="item-wrap">
                  <img src="images/portfolio/SurveyForm.jpg" alt="Survey Form" />
                  <span class="title">Survey Form</span>
                </div>
              </Col>
              </Row>
            </Container>
            <Container>
              <Row>
                <Col sm={12}>
                  <div class="item-wrap">
                    <img src="images/portfolio/Door2Door.jpg" alt="Door2Door" />
                    <span class="title">Door2Door</span>
                  </div>
                </Col>
                <Col sm={12}>
                  <div class="item-wrap">
                    <img src="images/portfolio/QuoteGenerator.jpg" alt="Quote Generator" />
                    <span class="title">Quote Generator</span>
                  </div>
                </Col>
                <Col sm={12}>
                  <div class="item-wrap">
                    <img src="images/portfolio/TechDoc.jpg" alt="Technical Documentation" />
                    <span class="title">Technical Documentation</span>
                  </div>
                </Col>
                <Col sm={12}>
                  <div class="item-wrap">
                    <img src="images/portfolio/TributePage.jpg" alt="Tribute Page" />
                    <span class="title">Tribute Page</span>
                  </div>
                </Col>
              </Row>
          </Container>
        </Fade>
      </section>
        );
    }
}

export default Portfolio;
