// Write your solution here!
// i think appends means add something last or after
// i think prepends mean add something for or before

const drivers = ["Milo", "Otis", "Garfield"] //is assigned an initial value of ["Milo", "Otis", "Garfield"]

function destructivelyAppendDriver(name) { //appends a driver to the end of the drivers array
    drivers.push(name);
}                                          

function destructivelyPrependDriver(name) { //prepends a driver to the beginning of the drivers array
    drivers.unshift(name);
}

function destructivelyRemoveLastDriver() { //removes the last driver from the drivers array
    drivers.pop()
}

function destructivelyRemoveFirstDriver() { // removes the First driver from the drivers array
    drivers.shift()
}

function appendDriver(name) { //appends a driver to the drivers array and returns a new array, leaving the drivers array unchanged
    return [...drivers, name];
}

function prependDriver(name) { // prepends a driver to the drivers array and returns a new array, leaving the drivers array unchanged
    return [name, ...drivers];
}

function removeFirstDriver () { //removes the first driver from the drivers array and returns a new array, leaving the drivers array unchanged
    return drivers.slice(1);
}

function removeLastDriver() { //removes the last driver in the drivers array and returns a new array, leaving the drivers array unchanged
    return drivers.slice(0, drivers.length -1);
}