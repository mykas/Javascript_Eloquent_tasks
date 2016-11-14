function min(arg1,arg2) {
      if (arg1 == undefined || arg2 == undefined)
          console.log("God dammit, it doesnt work like that");
      else if (arg1 > arg2)
              return arg2;
      else
          return arg1;
}

console.log(min(3,4));
