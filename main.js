function generateL(size, lowest, highest) {
  var numbersL = [];
  for (var i = 0; i < size; i++) {
    var add = true;
    var randomNumber = Math.floor(Math.random() * highest) + 1;
    for (var y = 0; y < highest; y++) {
      if (numbersL[y] == randomNumber) {
        add = false;
      }
    }
    if (add) {
      numbersL.push(randomNumber);
    } else {
      i--;
    }
  }

  var highestNumber = 0;
  for (var m = 0; m < numbersL.length; m++) {
    for (var n = m + 1; n < numbersL.length; n++) {
      if (numbersL[n] < numbersL[m]) {
        highestNumber = numbersL[m];
        numbersL[m] = numbersL[n];
        numbersL[n] = highestNumber;
      }
    }
  }
  document.getElementById("numLp").innerHTML = "Your Lucky Numbers:";
  document.getElementById("numL").innerHTML = numbersL.join(" - ");
}

function generateB(size, lowest, highest) {
  var numbersB = [];
  for (var i = 0; i < size; i++) {
    var add = true;
    var randomNumber = Math.floor(Math.random() * highest) + 1;
    for (var y = 0; y < highest; y++) {
      if (numbersB[y] == randomNumber) {
        add = false;
      }
    }
    if (add) {
      numbersB.push(randomNumber);
    } else {
      i--;
    }
  }

  var highestNumber = 0;
  for (var m = 0; m < numbersB.length; m++) {
    for (var n = m + 1; n < numbersB.length; n++) {
      if (numbersB[n] < numbersB[m]) {
        highestNumber = numbersB[m];
        numbersB[m] = numbersB[n];
        numbersB[n] = highestNumber;
      }
    }
  }
  var powerB = Math.floor(Math.random() * 20) + 1;
  numbersB.push(powerB);

  document.getElementById("numBp").innerHTML = "Your Lucky Numbers:";
  document.getElementById("numB").innerHTML = numbersB.join(" - ");
}
