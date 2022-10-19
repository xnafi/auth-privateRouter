import React from 'react'
import { BrowserRouter, RouterProvider } from 'react-router-dom'
import { route } from './router/Routes'

function App() {
  return (
    <RouterProvider router={route} />
  )
}

export default App
