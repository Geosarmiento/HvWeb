import "../../styles/_globales.scss" 
import "./Project.scss"
import { Windows, Mac} from "../../Components/Icon/Icons.jsx"
import projects from "../../Data/ProjectData.js";
import ProjectCard from "../../Components/ProyectCard/ProjectCard.jsx";



const Projects = () => {


  return (
    <div  className="project-container">

      <div className="intro_proyect">

        <div className="icon_proyects">
            <Mac className="icon_proyect"/>
            <Windows className="icon_proyect"/>
        </div>

        <h1>Projects</h1>
        <p>Skills that combine design,
            technology, and creativity.</p>

      </div>

    <ProjectCard project={projects[0]} />



 
   


   
      

    </div>
  )
}

export default Projects
