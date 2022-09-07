import { AiOutlineDeploymentUnit } from "react-icons/ai";

export const ProjectCard = ({
  title,
  description,
  imgUrl,
  link,
  deploymentLink,
  instructions,
}) => {
  return (
    <div>
      <a href={link} className="project-card-link">
        <div className="proj-imgbx">
          <img src={imgUrl} alt={title} className="project-image-grid" />
          <div className="proj-txtx">
            <h4>{title}</h4>
            <span style={{ padding: "7px" }}>{description}</span>

            {deploymentLink ? (
              <div
                style={{
                  flex: 1,
                  flexDirection: "row",
                  alignItems: "center",
                  marginTop: "24px",
                }}
              >
                <a
                  href={deploymentLink}
                  style={{
                    textDecoration: "none",
                    color: "white",
                    textDecorationLine: "underline",
                    fontSize: "14px",
                  }}
                >
                  <AiOutlineDeploymentUnit
                    size="20px"
                    color="plain"
                    style={{ paddingRight: "5px" }}
                  />
                  Deployment Link{" "}
                </a>
                {instructions ? (
                  <p style={{ fontSize: "12px" }}>{instructions}</p>
                ) : null}
              </div>
            ) : null}
          </div>
        </div>
      </a>
    </div>
  );
};
