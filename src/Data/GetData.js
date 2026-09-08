import { useState, useEffect } from 'react'
import { supabase } from './utils/supabase'




const [design, setDesign] = useState([])
  

  useEffect(() => {
    async function getDesign() {
      const { data: design } = await supabase.from('design').select()

      if (design) {
        setDesign(design)
      }
    }

    getDesign()

  
  }, [])


const GetData = () => {
  return (
    <div>
        <div className="design">
      {design.map((item) => (
        <div key={item.id}>
         
           <img src={item.image} width="100%" height="auto" />
            <p>{item.title}</p>
          </div>
        
      ))}
    </div>
      
    </div>
  )
}

export default GetData
