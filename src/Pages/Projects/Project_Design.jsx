import "./Project.css" 

import { useState, useEffect } from "react";
import { getDesign } from "../../Data/GetData.js";


const Project_Design = () => {
  const [design, setDesign] = useState([])

    useEffect(() => {
    async function loadDesign() {
      const data = await getDesign()
      setDesign(data)
    }

    loadDesign()
  }, [])

//---------------------------//
  

  return (
    <div  className="project-container" id='project'>
        <h2>Design</h2>

 <div className="design">
        {design.map((item) => (

        <div key={item.id}>
          <img  src={item.image} alt={item.title} width="100%" />
        </div>
      ))}
     
  </div>
  //--------------------------------//



    </div>
  )
}

export default Project_Design
