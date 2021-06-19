import React from 'react'
import banner from './mars-banner-transition.png'
import MissionToMars from './MissionToMars.zip'
import './App.css'

function App() {
  return (
    <div>
      <h1 className='banner-header unselectable'>Mission to Mars</h1>
      <img src={banner} className='banner-image unselectable' />
      <a href={MissionToMars} className='download-link' download>
        Download Game
      </a>
    </div>
  )
}

export default App
