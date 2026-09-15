import './About.scss'
import Button from "../../Components/Button/Button.jsx"

import { Blender, Photoshop, Illustrator, JavaScript, Css, React

 } from "../../Components/Icon/Icons.jsx"



const About = () => {
  return (
    <>

    <div className='about-container' id='about'>

          <div className="titulo">
            <h1>Turning <span>Ideas</span> 
            <h1>Into visual experiences</h1></h1>
          </div>

          <p>Creative and technological studio dedicated to designing exceptional digital experiences with precision and storytelling.</p>
        
        <div  className="button">  <Button/></div>

    </div>  

    <div className="about">
        <h2>Multidisciplinary Graphic Designer and Frontend Designer with experience in visual communication, digital interface design, frontend development support, 3D visualization and graphic production. Technologist in Multimedia Production with a practical profile combining design, technology, 3D and hands-on production.</h2>
    </div>

   
<section className="sectionSkills">
      <h2 className="titleSkills">Skill</h2>

      <p>Graphic Design · Frontend Development · UI Design · 3D Design · Interactive 3D · Responsive Design</p>

    
       <Blender/>
       <Photoshop/>
       <Illustrator/>
       <JavaScript/>
       <Css/>
       <React/>

</section>
      
 

   

   
    <h3>Experience</h3>
    <p>Branding</p>
    <p>Marketing</p>
    <p>Visual Design</p>
    <p>Editorial</p>
    <p>Design 3D</p>
    <p>Frontend Design</p>



   
    </>

  )
}

export default About
