import "./Project.css" 

import { useState, useEffect } from "react";
import { getDesign } from "../../Data/GetData.js";


const Projects = () => {
  const [design, setDesign] = useState([])

    useEffect(() => {
    async function loadDesign() {
      const data = await getDesign()
      setDesign(data)
    }

    loadDesign()
  }, [])

  return (
    <div  className="project-container" id='project'>
        <h1>Projects</h1>

 <div className="design">
        {design.map((item) => (

        <div key={item.id}>
          <img  src={item.image} alt={item.title} width="100%" />
          <p>{item.title}</p>
        </div>
      ))}
     
  </div>


    </div>
  )
}

export default Projects
