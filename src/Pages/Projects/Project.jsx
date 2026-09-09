import "../../styles/_globales.scss" 
import Project_Design from "./Project_Design";
import Project_3d from "./Project_3d";


const Projects = () => {


  return (
    <div  className="project-container" id='project'>
        <h1>Projects</h1>

    <div className="design">
        
        <Project_3d/>
            
      </div>


    <div className="design">
          
          <Project_Design/>
            
    </div>
      


    </div>
  )
}

export default Projects
