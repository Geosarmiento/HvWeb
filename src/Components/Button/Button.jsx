import { motion } from "motion/react"
import "../../styles/_globales.scss"

const Button = () => {
  return (
    <div>
      <motion.button className='button' 
       initial={{  opacity: 0 , y: 60 }}
       animate={{  opacity: 1, y: 0 }}
       transition={{ duration: 0.8, ease: "easeInOut"}}>
      View Work
    </motion.button>
    </div>
  )
}

export default Button
