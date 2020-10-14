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
  const [startingPosition, setStartingPosition] = useState({x: 1, y: 2}); //randomizeStartingPosition(roomSize.x)
  const [finalPosition, setFinalPosition] = useState()
  const [startingDirection, setStartingDirection] = useState('N') //randomizeStartingDirection
  const [finalDirection, setFinalDirection] = useState()
  const [sequence, setSequence] = useState('')

  useEffect(() => {
    setFinalPosition()
  }, [startingPosition])

  useEffect(() => {
    setFinalDirection()
  }, [startingDirection])

  useEffect(() => {
    setStartingPosition({x: 1, y: 2})
    setStartingDirection('N')
  }, [roomSize])

  const reset = () => {
    setStartingPosition(randomizeStartingPosition(roomSize.x))
    setStartingDirection(randomizeStartingDirection)
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
      <Container>
        <Header />
        <Container fluid>
          <Row>
            <Infobox />
            <Display runnedSequence={sequence} runProgram={(newSequence) => runProgram(newSequence)} startingPosition={`${startingPosition.x}, ${startingPosition.y}, ${startingDirection}`}
            finalPosition={finalPosition && `${finalPosition.x}, ${finalPosition.y}, ${finalDirection}`}/>
            <SettingsAndResult runnedSequence={sequence} setRoomSize={setRoomSize} reset={reset}/>
          </Row>
        </Container>
      </Container>
    </div>
  );
}

export default App;
