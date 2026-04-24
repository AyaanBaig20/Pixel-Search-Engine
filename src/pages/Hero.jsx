import React from 'react'
import SearchBar from '../components/SearchBarr'
import Tabs from '../components/Tabs'
import ResultGrid from '../components/ResultGrid'
const Hero = () => {
  return (
    <div>
      <SearchBar />
        <Tabs/>
        <ResultGrid/>
    </div>
  )
}

export default Hero
