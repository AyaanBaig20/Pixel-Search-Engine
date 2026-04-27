import React from 'react'
import {Routes,Route} from "react-router-dom"
import Hero from './pages/Hero'
import Collections from './pages/Collections'

const App = () => {
  return (
    <div className='text-white bg-gray-950 h-full w-full '>
        <Routes>
          <Route path='/' element={<Hero/>}/>
          <Route path='/collections' element={<Collections/>}/>
        </Routes>
    </div>
  )
}

export default App
