var chocolateBars =["snickers", "hundred grand", "kitkat", "skittles"]
function addElementToBeginningOfArray(array, newEl){
  return [newEl, ...array]
}

function destructivelyAddElementToBeginningOfArray(array, newEl){
  array.unshift(newEl)
  return array
}

function addElementToEndOfArray(array, newEl){
  return [...array, newEl]
}

function destructivelyAddElementToEndOfArray(array, newEl){
  array.push(newEl)
  return array
}
function accessElementInArray(arr, idx){
  arr[idx]
}

function destructivelyRemoveElementFromBeginningOfArray(arr){
  arr.shift
  return arr
}

function removeElementFromBeginningOfArray(arr){
  arr.slice(1)
}

function destructivelyRemoveElementFromEndOfArray(arr){
  arr.pop
  return arr
}

function 