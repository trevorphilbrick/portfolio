type ContentProps = {
  image: string;
  title: string;
  description: string;
  link: string;
};

type ContentCardProps = {
  content: ContentProps;
  onPress?: () => void;
};

const ContentCard = ({ content, onPress }: ContentCardProps) => {
  return (
    <div className="content-card" onClick={onPress}>
      <div className="red-circle"></div>
      <div
        className="content-card-image-wrapper"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <img
          className="content-card-image"
          src={content.image}
          alt={content.title}
          style={{ width: "100%" }}
        />
      </div>
      <div
        className="content-card-content"
        style={{ width: "95%", height: "140px", margin: "auto" }}
      >
        <h3 className="content-card-content-title">{content.title}</h3>
        <p className="content-card-content-description">
          {content.description}
        </p>
      </div>
    </div>
  );
};

export default ContentCard;
