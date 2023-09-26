import React, { useState } from 'react'
import './App.css'
import Body from './Body'
import Quotes from './Quotes'
import { generarColor } from './color'

function App() {
  const [color, setColor] = useState(generarColor())

  const handleChangeColor =(color)=>{
    setColor(color)
  }

  return (
    <Body color={color}>
      <Quotes color={color} onChangeColor={handleChangeColor} />
    </Body>
  )
}

export default App