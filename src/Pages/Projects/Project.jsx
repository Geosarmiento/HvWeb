import "./Project.scss";
import Slider1 from "../../Components/Slider/Slider1.jsx"


const Projects = () => {

  
  return (
    <>
    <section className="project-container">

        <div className="project_slider">

            <div className="intro_project">
              <h1>Projects</h1>
              <p>Skills that combine design, technology, and creativity.</p>
        
            
            </div>

            <div className="slider">
                <Slider1/>
            </div>

        </div>
    </section>

      


    </>
  );
};

export default Projects;