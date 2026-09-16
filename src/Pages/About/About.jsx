import './About.scss'
import Button from "../../Components/Button/Button.jsx"

import { Blender, Photoshop, Illustrator, JavaScript, Css, React

 } from "../../Components/Icon/Icons.jsx"



const About = () => {
  return (
    <>

    <section className='about-container' id='about'>

          <div className="intro_about">
            <h1>Turning <span>Ideas</span> 
            <h1>Into visual experiences</h1></h1>
          </div>

          <p>Creative and technological studio dedicated to designing exceptional digital experiences with precision and storytelling.</p>
        
        <div  className="button">  <Button/></div>

    </section>  

    <section className="about">
        <span><p> About Me </p></span>
        <h2>Multidisciplinary Graphic Designer and Frontend Designer with experience in visual communication, digital interface design, frontend development support, 3D visualization and graphic production. Technologist in Multimedia Production with a practical profile combining design, technology, 3D and hands-on production.</h2>
    </section>

   
    <section className="skills">

        <h2 className="titleSkills">Skill</h2>

        <p>Graphic Design · Frontend Development · UI Design · 3D Design · Interactive 3D · Responsive Design</p>

      
      <div className="slider-container">
  <div className="slider-track">
    {/* Primer grupo de logos */}
    <div className="slide"> <Blender/></div>
    <div className="slide"><Photoshop/></div>
    <div className="slide"> <Illustrator/></div>
    <div className="slide"><JavaScript/></div>
    <div className="slide"><Css/></div>
    <div className="slide"><React/></div>
    <div className="slide"> <Blender/></div>
    <div className="slide"><Photoshop/></div>
    <div className="slide"> <Illustrator/></div>
    <div className="slide"><JavaScript/></div>
    <div className="slide"><Css/></div>
    <div className="slide"><React/></div>

    {/* Duplicado exacto para el loop continuo */}
    <div className="slide"> <Blender/></div>
    <div className="slide"><Photoshop/></div>
    <div className="slide"> <Illustrator/></div>
    <div className="slide"><JavaScript/></div>
    <div className="slide"><Css/></div>
    <div className="slide"><React/></div>
    <div className="slide"> <Blender/></div>
    <div className="slide"><Photoshop/></div>
    <div className="slide"> <Illustrator/></div>
    <div className="slide"><JavaScript/></div>
    <div className="slide"><Css/></div>
    <div className="slide"><React/></div>
  </div>
</div>
       
    </section>

    <section className="experience">

        <h3>Experience</h3>

        <div className="experience_text">
          <p>Branding</p>
          <p>Marketing</p>
          <p>Visual Design</p>
          <p>Editorial</p>
          <p>Design 3D</p>
          <p>Frontend Design</p>
           <p>Branding</p>
          <p>Marketing</p>
          <p>Visual Design</p>
          <p>Editorial</p>
          <p>Design 3D</p>
          <p>Frontend Design</p>
      </div>
    </section>


   
    </>

  )
}

export default About
