const validateMove = (position, value, roomSize) => {
    console.log('value', position, value, roomSize)
    if (value === '-') {
        console.log('MINUS', position - 1 > -1)
        return position - 1 > -1
    }
    else {
        console.log('PLUS', position + 1 < roomSize)
        return position + 1 < roomSize
    }
}

const setNewCoordinates = (position, direction, roomSize) => {
    let xOrY = ''
    let value = ''
    switch (direction) {
        case 'N':
            xOrY = 'y'
            value = '-'
            break
        case 'S':
            xOrY = 'y'
            value = '+'
            break
        case 'E':
            xOrY = 'x'
            value = '-'
            break
        default:
            xOrY = 'x'
            value = '+'
    }
    if(xOrY === 'y') {
        if(validateMove(position.y, value, roomSize.y)) {
            if(value === '-') {
                return {x: position.x, y: position.y - 1}
            }
            else {
                return {x: position.x, y: position.y + 1}
            }
        }

    }
    else {
        if(validateMove(position.x, value, roomSize.x)) {
            if(value === '-') {
                return {x: position.x - 1, y: position.y}
            }
            else {
                return {x: position.x + 1, y: position.y}
            }
        }
    }
    return position
}

const move = (currentPosition, currentDirection, roomSize ) => {
    const newCoordinates = setNewCoordinates(currentPosition, currentDirection, roomSize)
    return newCoordinates
}

const turn = (currentDirection, leftOrRight) => {
    const directions = ['N', 'E', 'S', 'W']
    const indexOfDirection = directions.indexOf(currentDirection)
    let newDirection = indexOfDirection
    if (leftOrRight === "L") {
        newDirection = indexOfDirection === 0 ? directions[3] : directions[indexOfDirection - 1]
    }
    else {
        newDirection = indexOfDirection === 4 ? directions[0] : directions[indexOfDirection + 1]
    }
    return newDirection
}

export {move, turn}