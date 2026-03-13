import { useState } from "react";
import { MdArrowOutward } from "react-icons/md";
import "./styles/Work.css";

interface Props {
  image: string;
  alt?: string;
  video?: string;
  link?: string;
}

const WorkImage = (props: Props) => {
  const [showToast, setShowToast] = useState(false);

  const handleClick = () => {
    if (props.link) {
      window.open(props.link, '_blank');
    } else {
      setShowToast(true);
      setTimeout(() => setShowToast(false), 2000);
    }
  };

  return (
    <div className="work-image" style={{ position: "relative" }}>
      <div
        className="work-image-in"
        onClick={handleClick}
        style={{ cursor: props.link ? "pointer" : "default" }}
        data-cursor={props.link ? "icons" : "disable"}
      >
        <div className={`work-toast ${showToast ? 'show' : ''}`}>
          No website available
        </div>
        {props.link && (
          <div className="work-link">
            <MdArrowOutward />
          </div>
        )}
        <img src={props.image} alt={props.alt} />
      </div>
    </div>
  );
};

export default WorkImage;
