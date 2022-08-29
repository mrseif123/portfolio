import { Container, Row, Col } from "react-bootstrap";

export const Banner = () => {
  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <h1>
              {`Hey I'm Seaf`}
              <span className="tagline">Hello, I'm</span>
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
              modi sunt quidem, quasi minima magnam illum soluta doloremque
              repudiandae enim mollitia facere quam omnis! Qui rerum maxime eos
              amet quas?
            </p>
            <button onClick={() => console.log("connect")}>
              Let's connect!
            </button>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img src={} alt="Header image"/>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
