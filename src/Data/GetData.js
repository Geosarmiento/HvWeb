import { supabase } from '../utils/supabase'

export async function getDesign() {
  const { data, error } = await supabase
    .from('design')
    .select('*')

  if (error) {
    console.error('Error obteniendo diseños:', error)
    return []
  }

  console.log('Datos recibidos:', data)

  return data
}