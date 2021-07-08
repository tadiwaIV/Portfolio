import React, { Component } from "react";
import Slide from "react-reveal";
import ProgressBar from "./ProgressBar";

const testData = [
      { bgcolor: "#6a1b9a", completed: 87, programmingLanguage: "HTML5" },
      { bgcolor: "#00695c", completed: 92, programmingLanguage: "Css3" },
      { bgcolor: "#ef6c00", completed: 85, programmingLanguage: "Bootstrap" },
      { bgcolor: "#9fa1d2", completed: 69, programmingLanguage: "PHP" },
      { bgcolor: "#e83847", completed: 83, programmingLanguage: "Javascript" },
      { bgcolor: "#feaf95", completed: 78, programmingLanguage: "ReactJS" },
      { bgcolor: "#ef9e2b", completed: 84, programmingLanguage: "Git" },
      { bgcolor: "#59d694", completed: 90, programmingLanguage: "Github" },
      { bgcolor: "#514d26", completed: 80, programmingLanguage: "Python" },
      { bgcolor: "#c20fa0", completed: 76, programmingLanguage: "Java" },
    ];

class Resume extends Component {

  render() {
    if (!this.props.data) return null;

    return (
      <section id="resume">
        <Slide left duration={1300}>
          <div className="row education">
            <div className="three columns header-col">
              <h1>
                <span>Education</span>
              </h1>
            </div>

            <div className="nine columns main-col">
              <div className="row item">
                <div className="twelve columns">
                  <h3>National University Of Science And Technology</h3>
                  <p className="info">
                    Bsc in Computer Science <span>&bull;</span>
                    <em className="date">AUG 2016 - OCT 2020</em>
                  </p>
                  <p>I have recently completed my under-graduation studies with Honours in Computer Science. I have taken courses
                    like DSA, OOPs, Computer Networks, IOT, Web-Data Management over the years and have better understanding of
                    these topics and technologies.
                  </p>
                  <h3>Primary and Secondary Education</h3>
                  <p className="info">
                    <em className="date"> JAN 2004 - NOV 2015</em>
                  </p>
                  <p>In 2013 I completed my IGCSE Cambridge O Levels, obtaining pass marks in all my subjects, which included
                    subjects such as Geography, ICT and English. I then went on to complete my secondary education in 2015 majoring
                    in Physics, Computer Science and Maths for my A Level. During my time at school, I developed a interest in solving
                    complex problems involving physics. This not only helped me improve my understanding of any problem, but also
                    helped my ability to use mathematical skills solve said problems.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Slide>

        <Slide left duration={1300}>
          <div className="row work">
            <div className="three columns header-col">
              <h1>
                <span>Work</span>
              </h1>
            </div>

            <div className="nine columns main-col">
              <h3>Intern - Grain Marketing Board(GMB)</h3>
              <p className="info">
                Desktop Suppport Technician
                <span>&bull;</span> <em className="date"> SEP 2018 - AUG 2019 </em>
              </p>
              <p>Responsibilities included the design and installation of well-functioning computer networks, connections and cabling.
                Other tasks included performing system failure troubleshooting and identifying network bottlenecks to ensure long-term
                network efficiency, software testing and configuration, hardware and peripheral equipment maintenance and repair.
              </p>
            </div>
          </div>
        </Slide>

        <Slide left duration={1300}>
          <div className="row skill">
            <div className="three columns header-col">
              <h1>
                <span>Skills</span>
              </h1>
            </div>

            <div className="nine columns main-col">
              <div className="bars">
                <div className="App">
                  {testData.map((item, idx) => (
                    <ProgressBar key={idx} bgcolor={item.bgcolor} completed={item.completed} programmingLanguage=
                    {item.programmingLanguage}/>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Slide>
      </section>
    );
  }
}

export default Resume;
