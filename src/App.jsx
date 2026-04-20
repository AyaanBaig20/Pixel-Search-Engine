import React from 'react'
import {BrowserRouter,Route,Routes} from "react-router-dom"
const App = () => {
  return (
    <div className='text-white bg-gray-900 h-screen w-screen '>
        <BrowserRouter>
          <Routes>
            <Route></Route>
          </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App
