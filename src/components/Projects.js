import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";

import silalImage from "../assets/img/projects/silal.jpg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import projImg4 from "../assets/img/projects/Screenshot_10.png";

import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projects = [
    {
      title: "Silal Apps",
      description:
        "Project Management, User Interface, User Experience, Requirements Analysis",
      imgUrl: silalImage,
    },
    {
      title: "Containers & Sockets",
      description: "C++, Docker, Sockets, Networking, ENV, Makefile",
      imgUrl:
        "https://th.bing.com/th/id/R.17672cbe27b84735fc9583109dcfa610?rik=7bDUfRuL4Y2fcg&pid=ImgRaw&r=0",
      link: "https://github.com/mrseif123/ex5",
    },
    {
      title: "sJava Compiler",
      description:
        "Java, OOP, Regex, Parser, Compiler, Exceptions, Polymorphism ",
      imgUrl:
        "https://www.jrebel.com/sites/rebel/files/image/2020-05/image-blog-revel-top-java-tools.jpg",
      link: "https://github.com/mrseif123/sJavaCompiler",
    },
    {
      title: "MapReduce Algorithem",
      description:
        "C++, Multithreading, pthread, MapReduce, OS Scheduling, Jobs.",
      imgUrl:
        "https://www.researchgate.net/profile/Mohammed-Elmogy/publication/305489358/figure/fig2/AS:386741472120833@1469217760201/The-MapReduce-architecture-MapReduce-Algorithm-There-are-four-steps-to-implement.png",
      link: "https://github.com/mrseif123/OS-ex3-MapReduce",
    },
    {
      title: "OS Virtual Memory",
      description: "C++, Physical Memory, Pagin, Virtual Memory, OS ",
      imgUrl:
        "https://www.enterprisestorageforum.com/wp-content/uploads/2021/02/virtual-memory_6019c62e91446.png",
      link: "https://github.com/mrseif123/OS-ex4-VirtualMemory",
    },
    {
      title: "Computer Construction Workshop",
      description:
        "Build a full computer architecture, from NAND logic gate, to compiler, VM, and operating system.",
      imgUrl: "https://i.ytimg.com/vi/tNPsu1fPXlg/maxresdefault.jpg",
      link: "https://github.com/mrseif123/NAND2Tetris",
    },
  ];

  const DataScienceProjects = [
    {
      title: "1.8Million US Wildfires",
      description: "Kaggle, Jupiter Notebook, Python, Pandas, Matplotlib",
      imgUrl:
        "https://cdn.theatlantic.com/media/img/photo/2022/07/photos-wildfires-rage-across-southw/a01_1241970129/main_1500.jpg",
      link: "https://github.com/mrseif123/ALDS-Project/blob/main/Data_Science_Lab_Project.ipynb",
    },
    {
      title: "Pacman Reinforcement Learning",
      description:
        "Artificial Intelligence, Python, Reinforcement Learning, Q-Learning",
      imgUrl:
        "data:image/png;base64,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",
      link: "https://github.com/mrseif123/Reinforcement",
    },
    {
      title: "2048 Adversary Search",
      description:
        "AI agent that plays 2048 using the Minimax, AlphaBeta, Expectimax, A* algorithms.",
      imgUrl: "https://www.unixmen.com/wp-content/uploads/2014/04/20482.jpg",
      link: "https://github.com/mrseif123/AdversarySearch",
    },
    {
      title: "PetFinder.my Adoption Prediction",
      description:
        "Google Colab, Kaggle, EDA, AdaBoost, Random Forest, Gradient Boosting.",
      imgUrl:
        "https://img.freepik.com/premium-photo/group-pets-posing-around-border-collie-dog-cat-ferret-rabbit-bird-fish-rodent_191971-22249.jpg?w=2000",
      link: "https://colab.research.google.com/drive/1f4-qAyFbEsb5LFJLZVTDIwOh9jOu4pLT?usp=sharing",
    },
    {
      title: "Blockus AI",
      description: "Search, A*, BFS, DFS, Minimax, AlphaBeta.",
      imgUrl:
        "https://media.geeksforgeeks.org/wp-content/uploads/a_-search-algorithm-1.png",
      link: "https://github.com/mrseif123/Blockus",
    },
    {
      title: "Hidato Solver",
      description: "AI, CSP, Automated Planning, STRIPS, Logic, Planning.",
      imgUrl:
        "https://d3i71xaburhd42.cloudfront.net/07a839eae76fa240268780c50afe0dea876c7d70/2-Figure1-1.png",
      link: "https://github.com/dor-d/Hidato",
    },
  ];

  const mobileWebProjects = [
    {
      title: "Uber2.0",
      description:
        "React-Native, Redux, React-Navigation, Stacks, Google Places API, Google Maps API, React Hooks, React-Native-elements.",
      imgUrl:
        "https://nypost.com/wp-content/uploads/sites/2/2019/11/uber-app.jpg?quality=75&strip=all",
      link: "https://github.com/mrseif123/Uber2.0",
    },
    {
      title: "Deliveroo2.0",
      description:
        "React-Native, Animateable, TailwindCSS, React-Navigation, Lottie, Sanity CMS, Google Navigation API, Google Maps API.",
      imgUrl:
        "https://play-lh.googleusercontent.com/xi2UK7LlJLOjnsq465fqvezZL8P2YCHK7jQbKAegKf_uIATHhi-N3TCzZUJbg9gpCUk",
      link: "https://github.com/mrseif123/Deliveroo2.0",
    },
    {
      title: "MealsToGo",
      description:
        "React-Native, React Components, Styled Components, Authentication, ScrollView, React-Native-Papers, Firebase Authorization",
      imgUrl:
        "https://user-images.githubusercontent.com/42794888/123189208-41b94600-d452-11eb-8a68-1a84a10a57fb.png",
      link: "https://github.com/mrseif123/MealsToGo",
    },
    {
      title: "Robofriends",
      description:
        "ReactJS, Search, OnePage website, useState, React Components, NPM",
      imgUrl:
        "https://camo.githubusercontent.com/4abd19d665f1b15358793b758f2d6a64f6cef59d1d92287d57fb32bab218015f/68747470733a2f2f692e696d6775722e636f6d2f6a6d4b477036632e6a7067",
      link: "https://github.com/mrseif123/robofriends",
    },
    {
      title: "From Portland to Portland",
      description:
        "HTML, CSS, Flexbox, Responsive Web Design, OnePage website, Grid layout.",
      imgUrl:
        "https://repository-images.githubusercontent.com/379983335/faae0568-bc3e-4bea-be69-7bf9ff066e73",
      link: "https://github.com/mrseif123/From-Portland-to-Portland",
    },
    {
      title: "News-Explorer",
      description:
        "ReactJS, Node.JS, NGINX, Regex, Google Cloud, React-Routing, Git, HTML, CSS, API's, Webpack, MongoDB.",
      imgUrl: projImg4,
      link: "https://github.com/mrseif123/News-Explorer-Full",
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p>
                    Here I showcase some of the projects I have worked on in
                    different fields, such as Software Engineering, Data Science
                    , Web Development & Mobile Development, some projects were
                    university projects and the others I made by learning and
                    exploring online.
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">
                          Software <br /> Engineering
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">
                          Data, AI & <br /> Machine Learning
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">
                          Web & Mobile <br /> Development
                        </Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <div className="projects-container-grid">
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </div>
                      </Tab.Pane>

                      <Tab.Pane eventKey="second">
                        <div className="projects-container-grid">
                          {DataScienceProjects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </div>
                      </Tab.Pane>

                      <Tab.Pane eventKey="third">
                        <div className="projects-container-grid">
                          {mobileWebProjects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </div>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};
