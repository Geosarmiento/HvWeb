import { useState, useEffect } from 'react'
import { supabase } from './utils/supabase'

export default function App() {
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

    console.log(design)
   

  return (
    <div className="design">
      {design.map((item) => (
        <div key={item.id}>
         
           <img src={item.image} width="250px" height="auto" />
            <p>{item.title}</p>
          </div>
        
      ))}
    </div>
  )
}