import { motion } from "motion/react";

const PageTransicion = ({children}) => {
  return (
    <div>
        <motion.main className="page-transition" 
            initial={{ opacity: 0, x: 40 }} 
            animate={{ opacity: 1, x: 0 }} 
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.5, ease: "easeIn" }}>
      {children}
      </motion.main>
    </div>
  )
}

export default PageTransicion
