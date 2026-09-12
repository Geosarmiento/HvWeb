import "./ProjectCard.scss"
import { Link } from "react-router-dom"

const ProjectCard = ({ project }) => {
  return (

    
    <article className="project-card">

      <div className="project-card__image">
        <img
          src={project.image}
          alt={project.title}
        />
      </div>



      <div className="project-card__content">

        <span className="project-card__category">
          {project.category}
        </span>

        <h3>{project.title}</h3>

        <p>{project.description}</p>

        <Link to="/"> Ver proyecto → </Link>
      </div>

    </article>
  );
};

export default ProjectCard;