const validateStringValueOrKey = value => {
    return value === "r" || value === "R" || value === "l" || value === "L" || value === "f" || value === "F";
}

export {validateStringValueOrKey}