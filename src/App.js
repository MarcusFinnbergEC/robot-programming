import React, { useState, useEffect } from 'react';
import './App.css';
import { Container, Row } from 'reactstrap';
import Header from './Components/Header/header';
import Infobox from './Components/Infobox/Infobox';
import Display from './Components/Display/Display';
import SettingsAndResult from './Components/SettingsAndResult/SettingsAndResult';
import { randomizeStartingDirection, randomizeStartingPosition } from './Utils/randomizers'
import {move, turn} from './Logic/movement'


const App = () => {
  const [roomSize, setRoomSize] = useState({x: 4, y: 4})
  const [startingPosition, setStartingPosition] = useState(randomizeStartingPosition(roomSize.x));
  const [currentPosition, setCurrentPosition] = useState();
  const [finalPosition, setFinalPosition] = useState()
  const [startingDirection, setStartingDirection] = useState(randomizeStartingDirection)
  const [currentDirection, setCurrentDirection] = useState()
  const [finalDirection, setFinalDirection] = useState()
  const [sequence, setSequence] = useState('')

  useEffect(() => {
    setCurrentPosition(startingPosition)
    setFinalPosition()
  }, [startingPosition])

  useEffect(() => {
    setCurrentDirection(startingDirection)
    setFinalDirection()
  }, [startingDirection])

  useEffect(() => {
    setStartingPosition(randomizeStartingPosition(roomSize.x))
    setStartingDirection(randomizeStartingDirection)
  }, [roomSize])

  useEffect(() => {
    if(sequence.length) {
      const sequenceArray = [...sequence]
      let direction = currentDirection
      let position = currentPosition
      sequenceArray.forEach((moveType, index) => {
        if(moveType === "L" || moveType === "R") {
          direction = turn(direction, moveType)
          if(index === sequenceArray.length - 1) {
            console.log('FINAL direction', direction)
            setFinalDirection(direction)
            console.log('FINAL position', position)
            setFinalPosition(position)
          }
        }
        else {
          position = move(currentPosition, currentDirection, roomSize)
           if(index === sequenceArray.length - 1) {
            setFinalDirection(direction)
            setFinalPosition(position)
          }
        }
      })
    }
  }, [sequence])

  useEffect(() => {

  }, [currentDirection])

  const reset = () => {
    setStartingPosition(randomizeStartingPosition(roomSize.x))
    setStartingDirection(randomizeStartingDirection)
    setSequence('')
  }

  return (
    <div className="App">
      {console.log('direction', currentDirection)}
      <Container>
        <Header />
        <Container fluid>
          <Row>
            <Infobox />
            <Display runnedSequence={sequence} runProgram={(newSequence) => setSequence(newSequence)} startingPosition={`${startingPosition.x}, ${startingPosition.y}, ${startingDirection}`}
            finalPosition={finalPosition && `${finalPosition.x}, ${finalPosition.y}, ${finalDirection}`}/>
            <SettingsAndResult runnedSequence={sequence} setRoomSize={setRoomSize} reset={reset}/>
          </Row>
        </Container>
      </Container>
    </div>
  );
}

export default App;
