function countBs(word,letter) {
  var count = 0;
  if (letter == undefined) {
    for (a = 0; a < word.length; a ++) {
      if (word.charAt(a) == "B")
          count++;
  }
 }
  else {
    for (a = 0; a < word.length; a ++) {
    if (word.charAt(a) == letter)
        count++;}
  }
  return count;
}

function countChar(word, letter) {
    return countBs(word,letter);
}

console.log(countBs("BBC"));
// → 2
console.log(countChar("kakkerlak", "k"));
// → 4
