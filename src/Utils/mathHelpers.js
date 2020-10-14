const getIntFromString = (value) => {
    return Math.floor(value.length > 6 ? value.substring(0, 2) : value.substring(0, 1))
}

export { getIntFromString }