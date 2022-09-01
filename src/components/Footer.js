import { Container, Row, Col } from "react-bootstrap";
// import logo from "../assets/img/logo.svg";
import logo from "../assets/img/think.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon4 from "../assets/img/nav-icon4.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/mrseif123/">
                <img src={navIcon1} alt="Seaf Aliyan on linkedin" />
              </a>
              <a href="https://github.com/mrseif123">
                <img
                  src={navIcon4}
                  alt="Seaf Aliyan on github"
                  className="github__icon"
                />
              </a>
            </div>
            <p>Copyright 2022. All Rights Reserved, Seaf Aliyan.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
