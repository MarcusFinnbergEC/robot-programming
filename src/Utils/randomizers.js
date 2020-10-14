const getRandomNumber = max => {
  return Math.floor(Math.random() * (max + 1))
}

const randomizeStartingPosition = (max) => {
  return { x:getRandomNumber(max), y: getRandomNumber(max) }
}
const randomizeStartingDirection = () => {
  const randomDirectionValue = Math.floor(Math.random() * 4)
  let randomDirection = ''
  // console.log('radomValue', randomDirectionValue)
  switch (randomDirectionValue) {
    case 0:
      randomDirection = 'N';
      break;
    case 1:
      randomDirection = 'E';
      break;
    case 2:
      randomDirection = 'S';
      break;
    default:
      randomDirection = 'W';
      break;
  }
  return randomDirection
}

export { randomizeStartingDirection, randomizeStartingPosition }