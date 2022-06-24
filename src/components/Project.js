import { ExternalLink } from "react-external-link";

export default function Project({ projects }) {
  return (
    <div className="project-container">
      {projects.map((project) => (
        <ExternalLink
          key={project.name}
          href={project.links.deployed}
          className="flexbox-item"
          style={{ backgroundImage: `url(${project.image})` }}
        >
          <div className="overlay"></div>
          <div id="dep-link" className="project-content">
            <h4>{project.name}</h4>
            <div className="logo-container">
              {project.logos.map((logo) => {
                return <i className={logo} id="logo"></i>;
              })}
            </div>
          </div>
        </ExternalLink>
      ))}
    </div>
  );
}
