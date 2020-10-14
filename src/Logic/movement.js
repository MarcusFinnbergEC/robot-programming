const validateMove = (position, value, roomSize) => {
    if (value === '-') {
        return position - 1 > -1
    }
    else {
        return position + 1 <= roomSize
    }
}

const getCoordinates = (position, direction, roomSize) => {
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
            value = '+'
            break
        default:
            xOrY = 'x'
            value = '-'
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

const turn = (currentDirection, leftOrRight) => {
    const directions = ['N', 'E', 'S', 'W']
    const indexOfDirection = directions.indexOf(currentDirection)
    let newDirection = indexOfDirection
    if (leftOrRight === "L") {
        newDirection = indexOfDirection === 0 ? directions[3] : directions[indexOfDirection - 1]
    }
    else {
        newDirection = indexOfDirection === 3 ? directions[0] : directions[indexOfDirection + 1]
    }
    return newDirection
}

async function move (sequence, currentPosition, currentDirection, roomSize ) {
    let direction = currentDirection
    let position = currentPosition
    sequence.forEach((moveType) => {
        if(moveType === "L" || moveType === "R") {
          direction = turn(direction, moveType)
        }
        else {
          position = getCoordinates(position, direction, roomSize)
        }
    })
    return {position, direction}
}

export default move