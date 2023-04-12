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
      <div className="content-card-image-wrapper">
        <img
          className="content-card-image"
          src={content.image}
          alt={content.title}
        />
      </div>
      <div className="content-card-content">
        <h3 className="content-card-content-title">{content.title}</h3>
        <p className="content-card-content-description">
          {content.description}
        </p>
      </div>
    </div>
  );
};

export default ContentCard;
