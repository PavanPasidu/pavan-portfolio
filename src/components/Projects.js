import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-summary-eval.png";
import projImg2 from "../assets/img/project-customer-health.jpg";
import projImg3 from "../assets/img/bus-eta.png";
import projImg4 from "../assets/img/project-hrms.jpg";
import projImg5 from "../assets/img/project-img-gallery.jpg";
import projImg6 from "../assets/img/project-email-client.jpg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Summary Evaluator",
      description: " Project's main aim was to create a model to evaluate the summary written by students(To evaluate content & grammar).",
      imgUrl: projImg1,
      githubLink: "https://github.com/PavanPasidu/Summary-Evaluator-Streamlit",
    },
    {
      title: "Customer Health Score",
      description: "Project's main aim was to develop a model to identify the customers who are unsatisfied with the service provided by the company.",
      imgUrl: projImg2,
      githubLink: "https://github.com/PavanPasidu/CustomerHealthScore",
    },
    {
      title: "G-BAT",
      description: " Project's primary aim is to develop a more optimized model to predict the bus arrival time to specific stop in urban areas.",
      imgUrl: projImg3,
      githubLink: "https://github.com/PavanPasidu/gnn-trafic-forecasting",
    },
    {
      title: "HRM-System",
      description: " Project's main aim was to streamline and automate critical HR processes, including the management of employee data, payroll, recruitment vacations.",
      imgUrl: projImg4,
      githubLink: "https://github.com/PavanPasidu/HRM-System",
    },
    {
      title: "Image Gallery App",
      description: " Simple image gallery using react, tailwind css, firestore and firebase auth for user authentication - tutorial",
      imgUrl: projImg5,
      githubLink: "",
    },
    {
      title: "Email Client",
      description: "Project's main aim was to develop an automatic email responder CLI based on Java object-oriented programming and design patterns.",
      imgUrl: projImg6,
      githubLink: "https://github.com/PavanPasidu/Email-client",
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__pulse": ""}>
                <h2>Projects</h2>
                <p>Explore my work across various machine learning and full-stack development projects. From predictive models and data-driven solutions to full-featured web applications, each project reflects my expertise in developing efficient, scalable systems and leveraging advanced technologies to solve complex challenges.</p>
                <Row>
                  {
                    projects.map((project, index) => {
                      return (
                        <ProjectCard
                          key={index}
                          {...project}
                          />
                      )
                    })
                  }
                </Row>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}