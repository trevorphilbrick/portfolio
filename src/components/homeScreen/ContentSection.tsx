import { Container, Row, Col } from "react-grid-system";
import "../../css/ContentSection.scss";
import ContentCard from "./ContentCard";
import { useNavigate } from "react-router-dom";

const CONTENT = [
  {
    title: "Explore",
    description: "Explore my projects and learn more about me.",
    image: require("../../assets/photoThumbnail.jpg"),
    link: "/projects",
  },
  {
    title: "Blog",
    description: "Read my blog posts and learn more about my thoughts.",
    image: require("../../assets/photoThumbnail.jpg"),
    link: "/blog",
  },
  {
    title: "Photography",
    description: "View my photography and learn more about my interests.",
    image: require("../../assets/photoThumbnail.jpg"),
    link: "/photography",
  },
];

const ContentSection = () => {
  const navigate = useNavigate();
  return (
    <div
      className="content-section"
      style={{ marginTop: "100vh", backgroundColor: "#202020" }}
    >
      <Container>
        <Row>
          <Col>
            <h2 className="content-header">Explore</h2>
          </Col>
        </Row>
        <Row>
          {CONTENT.map((content, index) => (
            <Col key={index} xs={12} sm={12} md={4} lg={4}>
              <ContentCard
                content={content}
                onPress={() => navigate(content.link)}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};
export default ContentSection;
