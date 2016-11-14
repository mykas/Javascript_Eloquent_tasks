function reverseArray(array) {
  var new_array = [];
  var end = array.length;
  for (var i = 0; i < end; i++) {
    new_array[i] = array.pop();
  }
  return new_array;
}
function reverseArrayInPlace (arrayInPlace) {
  var end = arrayInPlace.length;
  var new_arrayInPlace = [];
  for (var i = 0; i < end; i++) {
    new_arrayInPlace[i] = arrayInPlace.pop();
    }
  for (var i = 0; i < end; i++) {
    arrayInPlace[i] = new_arrayInPlace[i];
  }

  return arrayInPlace;
}


console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
var arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]
