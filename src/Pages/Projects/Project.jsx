import "../../styles/_globales.scss" 
import Project_Design from "./Project_Design";
import Project_3d from "./Project_3d";
import Effect from "../../Components/Effect/Effect";


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
      
<Effect/>

    </div>
  )
}

export default Projects
