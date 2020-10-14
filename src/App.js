import React, { useState, useEffect } from 'react';
import './App.css';
import { Container, Row } from 'reactstrap';
import Header from './Components/Header/header';
import Infobox from './Components/Infobox/Infobox';
import Display from './Components/Display/Display';
import SettingsAndResult from './Components/SettingsAndResult/SettingsAndResult';
import { randomizeStartingDirection, randomizeStartingPosition } from './Utils/randomizers'
import move from './Logic/movement'


const App = () => {
  const [roomSize, setRoomSize] = useState({x: 4, y: 4})
  const [startingPosition, setStartingPosition] = useState({x: 1, y: 2});
  const [finalPosition, setFinalPosition] = useState()
  const [startingDirection, setStartingDirection] = useState('N')
  const [finalDirection, setFinalDirection] = useState()
  const [sequence, setSequence] = useState('')

 useEffect(() => {
    setStartingPosition(randomizeStartingPosition(4))
    setStartingDirection(randomizeStartingDirection)
  }, [])

  useEffect(() => {
    setFinalPosition()
  }, [startingPosition])

  useEffect(() => {
    setFinalDirection()
  }, [startingDirection])

  const setCustomSetup = (data) => { 
    setStartingPosition({ x: data.xAxis, y: data.yAxis })
    setStartingDirection(data.direction) 
    setRoomSize(data.newRoomSize)
  }

  const reset = () => {
    setStartingPosition(randomizeStartingPosition(4))
    setStartingDirection(randomizeStartingDirection)
    setRoomSize({ x: 4, y: 4 })
    setSequence('')
  }

  const runProgram = (newSequence) => {
    setSequence(newSequence)
    move([...newSequence], startingPosition, startingDirection, roomSize).then(res => {
      setFinalDirection(res.direction)
      setFinalPosition(res.position)
    }) 
  }

  return (
    <div className="App">
      <Container fluid>
        <Header />
        <Container>
          <Row>
            <Infobox />
            <Display runnedSequence={sequence} runProgram={(newSequence) => runProgram(newSequence)} startingPosition={`${startingPosition.x}, ${startingPosition.y}, ${startingDirection}`}
            finalPosition={finalPosition && `${finalPosition.x}, ${finalPosition.y}, ${finalDirection}`}
            reset={reset} roomSize={roomSize}/>
            <SettingsAndResult runnedSequence={sequence} setRoomSize={setRoomSize} roomSize={roomSize} setCustomSetup={(data) => setCustomSetup(data)}/>
          </Row>
        </Container>
      </Container>
    </div>
  );
}

export default App;
