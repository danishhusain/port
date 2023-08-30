import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/netflix.jpg";
import suicide from "../../Assets/Projects/suicide.png";
import emotion from "../../Assets/Projects/emotion.png";
// import editor from "../../Assets/Projects/codeEditor.png";
import editor from "../../Assets/Projects/Quizller.jpg";
// import chatify from "../../Assets/Projects/chatify.png";
import chatify from "../../Assets/Projects/clothingApp.jpg";
import bitsOfCode from "../../Assets/Projects/musicAPP.jpg";
import onlyfootball from "../../Assets/Projects/onlyfootball.jpg";
// import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="ClothingApp"
              description="This is the ClothingApp to sell clothes online and this is build with React-Native, Context-API and Firebase. Have features which allows user to track own order."
              ghLink="https://github.com/danishhusain/clothingApp"
            // demoLink="https://chatify-49.web.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={onlyfootball}
              isBlog={false}
              title="OnlyFootball"
              description="OnlyFootbal is a fantasy sports app where you can create your fantasy team based on real-life matches. Join contests and win daily cash prizes.."
              ghLink="https://github.com/danishhusain/clothingApp"
            // demoLink="https://chatify-49.web.app/"`
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Music Player"
              description="My personal MusicPlayer build with React-Native and JavaSCript. for Authentication I use React-Native Firebase service. Supports dark mode and easy to use."
              ghLink="https://github.com/danishhusain/MusicApp"
            // demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Plant AI"
              description=" This is Netflix Clone .In this i have used TMDB rest-API for data .You can use to watching movie, web series and documentary.I developed this app by using react-native and context API"
              ghLink="https://github.com/danishhusain/Netflix"
              // demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Quizller"
              description="This is QuizApp build with React-Native and JavaScript. you can improve your knowledge by playing this App. I use fetch request to get the data.And This is very simple app."
              ghLink="https://github.com/danishhusain/QuizApp"
            // demoLink="https://editor.soumya-jit.tech/"
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
            // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col> */}

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
            // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
