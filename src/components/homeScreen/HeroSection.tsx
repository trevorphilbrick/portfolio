import HeroSectionBackground from "./HeroSectionBackground";
import "../../css/HeroSection.scss";
import { Container, Row, Col } from "react-grid-system";

const HeroSection = () => {
  return (
    <>
      <HeroSectionBackground />
      <div className="hero-section">
        <Container>
          <Row>
            <Col
              md={12}
              lg={6}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div className="hero-section-content">
                <h1 className="hero-section-content-title">Trevor Philbrick</h1>
                <h3 className="hero-section-content-description">
                  Coding and Creativity
                </h3>
              </div>
            </Col>
            <Col
              md={12}
              lg={6}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div className="hero-section-image-wrapper">
                <img
                  className="hero-section-image"
                  src={require("../../assets/heroImage.png")}
                  alt="Trevor Philbrick"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default HeroSection;
