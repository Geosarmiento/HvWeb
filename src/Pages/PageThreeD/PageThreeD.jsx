import "./PageThreeD.scss"

import { imgThreeD } from "../../Data/ProjectData"


const PageThreeD = () => {


  return (
    <div className="pageThreeD-container">

      <div className="intro_PageThreeD">
        <small>Welcome </small>
        <h1> Design 3D</h1>
        <p>Modelig & Render</p>
      </div>
      
        <section className="imgThreeD">

           {imgThreeD.map((im) => (  

              <div key={im.id}>

                  <div className="img_container">
                    <img src={im.image} alt="imagesThree" />
                    
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

export default PageThreeD
