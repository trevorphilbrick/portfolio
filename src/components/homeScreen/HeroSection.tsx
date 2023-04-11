import HeroSectionBackground from "./HeroSectionBackground";

const HeroSection = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <HeroSectionBackground />
      <img
        id="hero-image"
        src={require("../../assets/heroImage.png")}
        alt="hero"
        style={{
          zIndex: 100,
          position: "relative",
          width: "300px",
          height: "300px",
        }}
      />
    </div>
  );
};

export default HeroSection;
