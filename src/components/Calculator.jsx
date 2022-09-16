import React, { useState } from 'react'
import './Calculator.css'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'

export default function Calculator() {
  const [num, setNum] = useState(0)
  const [old_num, setold_num] = useState(0)
  const [op, setop] = useState(0)
  function inputNum(e) {
    //setNum(valor);
    var input = e.target.value
    if (num===0) {
      setNum(input)
    } else {
      setNum(num + input)
    }
  }

  function clearscreen(e) {
    setNum(0)
  }

  function percentage() {
    setNum(num / 1000)
  }

  function opHandle() {
    if (num > 0) {
      setNum(-num)
    } else {
      setNum(Math.abs(num))
    }
  }

  function calc() {
    if (op === '/') {
      setNum(parseFloat(old_num) / parseFloat(num))
    } else if (op === 'x') {
      setNum(parseFloat(old_num) * parseFloat(num))
    } else if (op === '+') {
      setNum(parseFloat(old_num) + parseFloat(num))
    } else if (op === '-') {
      setNum(parseFloat(old_num) - parseFloat(num))
    }
  }

  function operatorH(e) {
    var operatorInput = e.target.value
    console.log(operatorInput)
    setop(operatorInput)
    setold_num(num)
    setNum(0)
  }
  return (
    <div>
      <Box m={5} />
      <Container maxWidth="xs">
        <div className="wrapper">
          <Box m={12} />
          <h1 className="Result">{num}</h1>
          <button className="ligth-grey" onClick={clearscreen}>
            AC
          </button>
          <button className="ligth-grey" onClick={opHandle}>
            +/-
          </button>
          <button className="ligth-grey" onClick={percentage}>
            %
          </button>
          <button className="Org" onClick={operatorH} value="/">
            /
          </button>


          <button className="Dark-grey" onClick={inputNum} value={7}>
            7
          </button>
          <button className="Dark-grey" onClick={inputNum} value={8}>
            8
          </button>
          <button className="Dark-grey" onClick={inputNum} value={9}>
            9
          </button>
          <button className="Org" onClick={operatorH} value="x">
            X
          </button>


          <button className="Dark-grey" onClick={inputNum} value={4}>
            4
          </button>
          <button className="Dark-grey" onClick={inputNum} value={5}>
            5
          </button>
          <button className="Dark-grey" onClick={inputNum} value={6}>
            6
          </button>
          <button className="Org" onClick={operatorH} value="-">
            -
          </button>


          <button className="Dark-grey" onClick={inputNum} value={1}>
            1
          </button>
          <button className="Dark-grey" onClick={inputNum} value={2}>
            2
          </button>
          <button className="Dark-grey" onClick={inputNum} value={3}>
            3
          </button>
          <button className="Org" onClick={operatorH} value="+">
            +
          </button>


          <button className="Dark-grey" onClick={inputNum} value={0}>
            0
          </button>
          <button className="Dark-grey" onClick={inputNum} value={'.'}>
            ,
          </button>
          <button className="Dark-grey" style={{ visibility: 'hidden' }}>
            ,
          </button>
          <button className="Org" onClick={calc}>
            =
          </button>
        </div>
      </Container>
    </div>
  )
}
