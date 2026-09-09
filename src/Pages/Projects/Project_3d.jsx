import "./Project.css" 

import { useState, useEffect } from "react";
import { getThreeD } from "../../Data/GetData.js";


const Project_Design = () => {
  const [threeD, setThreeD] = useState([])

    useEffect(() => {
    async function loadThreeD() {
      const data3d = await getThreeD()
      setThreeD(data3d)
    }

    loadThreeD()
  }, [])


  

  return (
    <div  className="project-container" id='project'>
        <h2>Design</h2>

 <div className="design">
        {threeD.map((item) => (

        <div key={item.id}>
          <img  src={item.image} alt={item.title} width="100%" />
        </div>
      ))}
     
  </div>




    </div>
  )
}

export default Project_Design
