import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, link }) => {
  return (
    <div>
      <a href={link} className="project-card-link">
        <div className="proj-imgbx">
          <img src={imgUrl} alt={title} className="project-image-grid" />
          <div className="proj-txtx">
            <h4>{title}</h4>
            <span>{description}</span>
          </div>
        </div>
      </a>
    </div>
  );
};
