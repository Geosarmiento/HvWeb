import { supabase } from '../utils/supabase'

export async function getDesign() {
  const { data, error } = await supabase
    .from('design')
    .select('*')

  if (error) {
    return []
  }

 

  return data
}



export async function getThreeD() {
  const { data, error } = await supabase
    .from('3d')
    .select('*')



  if (error) {
    return []
  }
 

  return data
}


