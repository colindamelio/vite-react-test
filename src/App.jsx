import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Header from './Header'

import animals from './animals'

function App() {

  console.log(animals)
  return (
    <div className="App">
      <Header />
    </div>
  )
}

export default App
