import './About.css'
import { motion } from "motion/react"

const About = () => {
  return (
    <motion.div className='about-container' id='about'
      initial={{  opacity: 0 }}
      animate={{  opacity: 1 }}
      transition={{ duration: 2}}
     
        >


      <h1>About Me</h1>
      <p>Multidisciplinary Graphic Designer and Frontend Designer with experience in visual communication, digital interface design, frontend development support, 3D visualization and graphic production. Technologist in Multimedia Production with a practical profile combining design, technology, 3D and hands-on production.</p>
    </motion.div>
  )
}

export default About
