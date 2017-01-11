function findNextSquare(sq) {

  var teller = false
  while (teller === false) {

    for (var i = sq; i < Math.pow(sq,2); i++) {

      if (Math.pow(i,(1/2)) % 1 === 0) {
        console.log(i)
        teller = true
      }
    }
  }
 return -1;
}

findNextSquare(121)
