import "../../styles/_globales.scss";
import "./Project.scss";
import Slider1 from "../../Components/Slider/Slider1.jsx"


const Projects = () => {

  

  return (
    <>
    <div className="project-container">
      <div className="intro_proyect">
        <h1>Projects</h1>
        <p>Skills that combine design, technology, and creativity.</p>
      </div>
    

        <div className="slider">
          <Slider1/>
      </div>

    </div>
    </>
  );
};

export default Projects;