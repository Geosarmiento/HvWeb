import './About.scss'
import icon_photoshop from "../../assets/icon_photoshop.svg"
import icon_illustrator from "../../assets/icon_illustrator.svg"
import icon_html from "../../assets/icon_html.svg"
import icon_javaScript from "../../assets/icon_javaScript.svg"
import icon_react from "../../assets/icon_react.svg"
import icon_rhino from "../../assets/icon_rhino.svg"



const About = () => {
  return (


    <div className='about-container' id='about'>
      <div className="photo_perfil"> 
      </div>
    <br /> <br />



      <h1>About Me</h1>
      <p>Multidisciplinary Graphic Designer and Frontend Designer
        with experience in visual communication, digital interface design, frontend development support, 3D visualization and graphic production. Technologist in Multimedia Production with a practical profile combining design, technology, 3D and hands-on production.</p>
    <br /> <br /> 

      <h2>Skills</h2>
      <p>Graphic Design · Frontend Development · UI Design · 3D Design · Interactive 3D · Responsive Design</p>

    <div className="skills">
       <img src={icon_photoshop} alt="mail" width="28" height="28"/>
       <img src={icon_illustrator} alt="mail" width="28" height="28"/>
       <img src={icon_html} alt="mail" width="28" height="28"/>
       <img src={icon_javaScript} alt="mail" width="28" height="28"/>
       <img src={icon_react} alt="mail" width="28" height="28"/>
       <img src={icon_rhino} alt="mail" width="28" height="28"/>

    </div>

    <br />
    <h3>Experience</h3>
    <p>Branding</p>
    <p>Marketing</p>
    <p>Visual Design</p>
    <p>Editorial</p>
    <p>Design 3D</p>
    <p>Frontend Design</p>



    </div>
  )
}

export default About
