var chocolateBars =["snickers", "hundred grand", "kitkat", "skittles"]
function addElementToBeginningOfArray(array, newEl){
  return [newEl, ...array]
}

function destructivelyAddElementsToBeginningOfArray(array, newEl){
  array.unshift(newEl)
  return array
}

function addElementToEndOfArray(array, newEl){
  return [...array, newEl]
}

function destructivelyAddElementsToEndOfArray(array, newEl){
  array.push(newEl)
  return array
}
function accessElementInArray(arr, idx){
  arr[idx]
}

function destructivelyAddElementsToEndOfArray