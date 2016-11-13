function min(arg1,arg2) {
      if (arg1 == undefined && arg2 != undefined)
          return arg2;
      else if (arg1 != undefined && arg2 == undefined)
          return arg1;

      if (arg1 > arg2)
          return arg2;
      else if (arg1 == arg2)
      console.log("Nu wtf cia ivedei");
      else
          return arg1;
}

console.log(min(2,4));
