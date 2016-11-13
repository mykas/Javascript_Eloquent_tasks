function isEven (n){
    if (n < 0)
      return false;
    else if (n == 0)
        return true;
    else
        return isEven(n - 2)
}

console.log(isEven());
