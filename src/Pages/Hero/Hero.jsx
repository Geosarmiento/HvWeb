import './Hero.scss'
import Effect from "../../Components/Effect/Effect";


import Button from "../../Components/Button/Button.jsx"


const Hero = () => {
  return (

    <div className='hero-container' id='hero'
    >

    <h1>
         Graphic Designer 
            Frontend Designer 
            & 3D Designer
             </h1>

    <p>
    Technologist in Multimedia
    Production with a practical profile
    combining design, technology, 3D and hands-on production.
    </p>

<Button to="/projects"/>

<Effect/>

   
    </div>



  )
}

export default Hero
