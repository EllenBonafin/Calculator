import React, { useState } from 'react'
import './Calculator.css'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'

export default function Calculator() {
  const [num,setNum] = useState(10);

  function inputNum(valor){
    console.log(valor);
    //setNum(valor);
  }
  return (
    <div>
      <Box m={5} />
      <Container maxWidth="xs">
        <div className="wrapper">
          <Box m={12}/>
          <h1 className="Result">{num}</h1>
          <button className="ligth-grey">AC</button>
          <button className="ligth-grey">+/-</button>
          <button className="ligth-grey">%</button>
          <button className="Org">/</button>

          <button className="Dark-grey" onClick={inputNum}>7</button>
          <button className="Dark-grey">8</button>
          <button className="Dark-grey">9</button>
          <button className="Org">X</button>

          <button className="Dark-grey">4</button>
          <button className="Dark-grey">5</button>
          <button className="Dark-grey">6</button>
          <button className="Org">-</button>

          <button className="Dark-grey">1</button>
          <button className="Dark-grey">2</button>
          <button className="Dark-grey">3</button>
          <button className="Org">+</button>

          <button className="Dark-grey">0</button>
          <button className="Dark-grey">,</button>
          <button className="Dark-grey" style={{ visibility: 'hidden' }}>
            ,
          </button>
          <button className="Org">=</button>
        </div>
      </Container>
    </div>
  )
}
