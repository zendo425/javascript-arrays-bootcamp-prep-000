var chocolateBars = ["chocolatBars", "snickers", "hundred grand", "kit kat", "skittles"];

function addElementToBeginningOfArray(array, element){
  return [element, array.concat];
}

function destructivelyaddElementToBeginningOfArray(array, element){
  return [element.push, array];
}
