import React, { useState } from 'react'
import './Calculator.css'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'

export default function Calculator() {
  const [num,setNum] = useState(5);

  function inputNum(e){
    //setNum(valor);
    var input= e.target.value
    setNum(input);
  }
  return (
    <div>
      <Box m={5}/>
      <Container maxWidth="xs">
        <div className="wrapper">
          <Box m={12}/>
          <h1 className="Result">{num}</h1>
          <button className="ligth-grey">AC</button>
          <button className="ligth-grey">+/-</button>
          <button className="ligth-grey">%</button>
          <button className="Org">/</button>

          <button className="Dark-grey" onClick={inputNum}value={7}>7</button>
          <button className="Dark-grey"onClick={inputNum}value={8}>8</button>
          <button className="Dark-grey"onClick={inputNum}value={9}>9</button>
          <button className="Org">X</button>

          <button className="Dark-grey"onClick={inputNum}value={4}>4</button>
          <button className="Dark-grey" onClick={inputNum}value={5}>5</button>
          <button className="Dark-grey"onClick={inputNum}value={6}>6</button>
          <button className="Org">-</button>

          <button className="Dark-grey"onClick={inputNum}value={1}>1</button>
          <button className="Dark-grey"onClick={inputNum}value={2}>2</button>
          <button className="Dark-grey"onClick={inputNum}value={3}>3</button>
          <button className="Org">+</button>

          <button className="Dark-grey"onClick={inputNum}value={0}>0</button>
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
