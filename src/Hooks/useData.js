import { useEffect, useState } from "react"



const useData = (getData) => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true)

        const result = await getData()

        setData(result)
      } catch (error) {
        setError(error.message)
      } finally {
        setLoading(false)
      }
    }

    loadData()
  }, [getData])

  return {
    data,
    loading,
    error
  }
}

export default useData