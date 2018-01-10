var chocolateBars = ["chocolatBars", "snickers", "hundred grand", "kit kat", "skittles"];

function addElementToBeginningOfArray(array, element){
  return [element, array.concat];
}

function destructivelyAddElementToBeginningOfArray(array, element){
  array.unshift(element);
  return array;
}
