import React, { useState, useEffect } from 'react'
import axios from 'axios'

const App = () => {
  const [data, setData] = useState(null)

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/data`)
      .then((res) => setData(res.data.message))
      .catch((err) => console.error(err))
  }, [])

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-r from-blue-50 to-purple-100">
      <div className="p-8 bg-white rounded-2xl shadow-lg">
        <h1 className="text-3xl font-bold text-gray-800 animate-pulse">
          {data ? data : "Loading..."}
        </h1>
      </div>
    </div>
  )
}

export default App
