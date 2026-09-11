import "../../styles/_globales.scss" 
import "./Project.scss"
import Effect from "../../Components/Effect/Effect";
import { Windows, Mac} from "../../Components/Icon/Icons.jsx"


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


      <div className="img_proyects_container">

          <div className="img_container">

            <div className="uno">1</div>


            <div className="uno">2</div>

            
            <div className="uno">3</div>

          </div>



      </div>

   


   
      
<Effect/>

    </div>
  )
}

export default Projects
