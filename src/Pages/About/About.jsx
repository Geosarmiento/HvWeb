import './About.scss'
import { Blender } from "../../Components/Icon/Icons.jsx"



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
       <Blender/>

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
