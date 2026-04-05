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

  const handleClick = (e: React.MouseEvent) => {
    if (!props.link) {
      e.preventDefault();
      setShowToast(true);
      setTimeout(() => setShowToast(false), 2000);
    }
  };

  const Content = (
    <>
      <div className={`work-toast ${showToast ? 'show' : ''}`}>
        No website available
      </div>
      {props.link && (
        <div className="work-link">
          <MdArrowOutward />
        </div>
      )}
      <img src={props.image} alt={props.alt} />
    </>
  );

  return (
    <div className="work-image" style={{ position: "relative" }}>
      {props.link ? (
        <a 
          href={props.link}
          target="_blank"
          rel="noopener noreferrer"
          className="work-image-in"
          style={{ cursor: "pointer", display: "block" }}
          data-cursor="icons"
        >
          {Content}
        </a>
      ) : (
        <div
          className="work-image-in"
          onClick={handleClick}
          style={{ cursor: "default" }}
          data-cursor="disable"
        >
          {Content}
        </div>
      )}
    </div>
  );
};

export default WorkImage;
