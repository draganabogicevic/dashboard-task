import React, { useState, useEffect} from 'react'

export const useDataFetch = (promise) => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    promise
    .then(data => setData(data))
    .catch(error => {
      setError(error.message)
    })
    .finally(() => {
      setLoading(false)
    })
  }, [])

  return {
    loading,
    data,
    error,
  }
}