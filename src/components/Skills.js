import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import cs from "../assets/img/tools/cs.png";
import ds from "../assets/img/tools/ds.png";
import wd from "../assets/img/tools/wd.png";
import md from "../assets/img/tools/md.png";

// import pm from "../assets/img/tools/pm.png";
// import ui from "../assets/img/tools/ui.png";

import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png";
import { Container, Row, Col } from "react-bootstrap";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skills" id="skills">
      <Container>
        <Row className="row">
          <Col className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Technology Stack</h2>
              <p>
                Learning is a process. I alway consider my self an eager learner
                and seek discomfort in new topics espically with the
                availability of hands-on material, which although may result in
                a lack of deep knowledge in some aspects, but it allows me to
                keep exploring new technologies and concepts.
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
                style={{
                  padding: "10px",
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div className="item">
                  <img src={cs} alt="image" style={{ rounded: "10" }} />
                  <h5>Computer Science</h5>
                  <h6 className="knowledge-source">
                    Knowledge Source: The Hebrew University
                  </h6>
                </div>
                <div className="item">
                  <img src={wd} alt="image" />
                  <h5>Web Development</h5>
                  <h6 className="knowledge-source">
                    Knowledge Source: Practicum100 Web Bootcamp
                  </h6>
                </div>
                <div className="item">
                  <img src={ds} alt="image" />
                  <h5>Data Science</h5>
                  <h6 className="knowledge-source">
                    Knowledge Source: The Hebrew University
                  </h6>
                </div>
                {/* <div className="item">
                  <img src={ui} alt="image" />
                  <h5>UX/UI</h5>
                  <h6 className="knowledge-source">
                    Knowledge Source: Personal project (Silal)
                  </h6>
                </div> */}
                <div className="item">
                  <img
                    src={md}
                    alt="image"
                    style={{ width: "190px", heigh: "190px" }}
                  />
                  <h5>Mobile Development</h5>
                  <h6 className="knowledge-source">
                    Knowledge Source: Online courses & Videos
                  </h6>
                </div>
                {/* <div className="item">
                  <img src={pm} alt="image" />
                  <h5>Project Management</h5>
                  <h6 className="knowledge-source">
                    Knowledge Source: Personal project (Silal)
                  </h6>
                </div> */}
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
      <img className="background-image-left" src={colorSharp} />
    </section>
  );
};
