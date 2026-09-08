import './Hero.css'
import { motion } from "motion/react"

const Hero = () => {
  return (

    <div className='hero-container' id='hero'
    >

    <motion.h1 
       initial={{  opacity: 0 , y: -40 }}
       animate={{  opacity: 1, y: 0 }}
       transition={{ duration: 0.8, ease: "easeInOut"}}>

          Graphic Designer 
            Frontend Designer 
            & 3D Designer
             </motion.h1>

    <p>
    Technologist in Multimedia
    Production with a practical profile
    combining design, technology, 3D and hands-on production.
    </p>

    <motion.button className='btn' 
       initial={{  opacity: 0 , y: 40 }}
       animate={{  opacity: 1, y: 0 }}
       transition={{ duration: 0.8, ease: "easeInOut"}}>



      View Work
    </motion.button>

    </div>
  )
}

export default Hero
