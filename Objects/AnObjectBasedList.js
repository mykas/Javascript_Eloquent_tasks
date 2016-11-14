/* In computer science, a singly-linked list is a data structure that holds a sequence of linked nodes.
  Each node, in turn, contains data and a pointer, which can point to another node.Nodes of a singly-linked list are very similar
  to steps in a scavenger hunt. Each step contains a message (e.g. "You've reached France") and pointers to the next
  step (e.g. "Visit these latitude and longitude coordinates"). When we start sequencing these individual steps to form a sequence
  of steps, we are creating a scavenger hunt.
*/

/* The exercise description
  Write a function arrayToList that builds up a data structure like the
  previous one when given [1,2,3] as an argument ,and write a listToArray
  function that produces an array from a list. Also write the helper
  functions prepend, which takes an element and a list and creates a new list
  that adds the element to the front of the input list, and nth, which
  takes a list and a number and returns the element at the given position
  in the list, or undefined when there is no such element. ALso write recursive
  version of nth
*/

// We convert array to linked list with pointers
function arrayToList(array) {
  var list = null;
  for (var i = array.length - 1; i >= 0; i--)
    list = {value: array[i], rest: list};
  return list;
}
// We convert list to array
function listToArray(list) {
  var array = [];
  for (var node = list; node; node = node.rest) {
// The for loop assigns next node and then array takes the value
    array.push(node.value);
  }
  return array;
}

function prepend(value, list) {
  return {value: value, rest: list};
}

function nth(list, n) {
  if (!list)
    return undefined;
  else if (n == 0)
    return list.value;
  else
    return nth(list.rest, n - 1);
}

console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 2));
// → 20

// Use cases of linked
// lists: http://stackoverflow.com/questions/30949981/would-you-ever-implement-a-linked-list-in-javascript

/*  Benefits
  Easier memory allocation and
  faster input and deletion to the body of the list
*/
