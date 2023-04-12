import HeroSectionBackground from "./HeroSectionBackground";
import "../../css/HeroSection.scss";

const HeroSection = () => {
  return (
    <div style={{ position: "fixed", top: 0, width: "100%", zIndex: -100 }}>
      <HeroSectionBackground />
      <div className="hero-section">
        <div className="hero-section-content">
          <h1 className="hero-section-content-title">Trevor Philbrick</h1>
          <h3 className="hero-section-content-description">
            Coding and Creativity
          </h3>
        </div>

        <div className="hero-section-image-wrapper">
          <img
            className="hero-section-image"
            src={require("../../assets/heroImage.png")}
            alt="Trevor Philbrick"
            onLoad={() => console.log("Image loaded")}
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
