import "../../styles/_globales.scss";
import "./Project.scss";
import Slider1 from "../../Components/Slider/Slider1.jsx"


const Projects = () => {

  

  return (
    <>
    <div className="project-container">

    <div className="arreglo">
        <div className="intro_project">
          <h1>Projects</h1>
          <p>Skills that combine design, technology, and creativity.</p>
          
                <p>From visual identity and graphic design to frontend development and 3D, I combine different disciplines to transform ideas into engaging digital experiences</p>
        </div>

        <div className="slider">
            <Slider1/>
        </div>
    
    
    </div>
    </div>

      


    </>
  );
};

export default Projects;