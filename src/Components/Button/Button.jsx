import { motion } from "motion/react"
import "../../styles/_globales.scss"
import { useNavigate } from "react-router-dom"

const Button = ({ to, children }) => {

  const navigate = useNavigate()

  return (
    <div>
      <motion.button className='button' 
       initial={{  opacity: 0 , y: 60 }}
       animate={{  opacity: 1, y: 0 }}
       transition={{ duration: 0.8, ease: "easeInOut"}}
       
       onClick={()=> navigate(to)}>
              {children}

      View Work
    </motion.button>
    </div>
  )
}



export default Button
