import "./PageFrontend.scss"
import { imgFrontend  } from "../../Data/ProjectData"


const PageFrontend = () => {
  return (
    <div className="pageFrontend-container">

      <div className="intro_PageFrontend">
        <small>Welcome </small>
        <h1> Frontend Design</h1>
        <p>Interfaces & Experience</p>
      </div>
      
        <section className="imgFrontend">

           {imgFrontend.map((im) => (  

              <div key={im.id}>

                  <div className="img_container">
                    <img src={im.image} alt="imagesFrontend" />
                    
                  </div>
                <div>
                  <h2>{im.name}</h2>
                    {im.role}
                </div>

              </div>

       ))}

        </section>
      
    </div>
  )
}

export default PageFrontend
