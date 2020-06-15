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
  document.getElementById("numL1").innerHTML = numbersL[0];
  document.getElementById("numL2").innerHTML = numbersL[1];
  document.getElementById("numL3").innerHTML = numbersL[2];
  document.getElementById("numL4").innerHTML = numbersL[3];
  document.getElementById("numL5").innerHTML = numbersL[4];
  document.getElementById("numL6").innerHTML = numbersL[5];
  document.getElementById("clearL").style.display = "inline-block";
}
// Reset Output
function clearL() {
  document.getElementById("numL1").innerHTML = "?";
  document.getElementById("numL2").innerHTML = "?";
  document.getElementById("numL3").innerHTML = "?";
  document.getElementById("numL4").innerHTML = "?";
  document.getElementById("numL5").innerHTML = "?";
  document.getElementById("numL6").innerHTML = "?";
  document.getElementById("numLp").style.display = "none";
  document.getElementById("clearL").style.display = "none";
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
  document.getElementById("numB1").innerHTML = numbersB[0];
  document.getElementById("numB2").innerHTML = numbersB[1];
  document.getElementById("numB3").innerHTML = numbersB[2];
  document.getElementById("numB4").innerHTML = numbersB[3];
  document.getElementById("numB5").innerHTML = numbersB[4];
  document.getElementById("numB6").innerHTML = numbersB[5];
  document.getElementById("clearB").style.display = "inline-block";
}
// Reset Output
function clearB() {
  document.getElementById("numB1").innerHTML = "?";
  document.getElementById("numB2").innerHTML = "?";
  document.getElementById("numB3").innerHTML = "?";
  document.getElementById("numB4").innerHTML = "?";
  document.getElementById("numB5").innerHTML = "?";
  document.getElementById("numB6").innerHTML = "?";
  document.getElementById("numBp").style.display = "none";
  document.getElementById("clearB").style.display = "none";
}

// jQuery Smooth Scroll on call to action buttons
$("#jombo a").on("click", function (e) {
  if (this.hash !== "") {
    e.preventDefault();

    const hash = this.hash;

    $("html, body").animate(
      {
        scrollTop: $(hash).offset().top,
      },
      800
    );
  }
});
// jQuery Smooth Scroll on call to navlink-items
$(".nav-item a").on("click", function (e) {
  if (this.hash !== "") {
    e.preventDefault();

    const hash = this.hash;

    $("html, body").animate(
      {
        scrollTop: $(hash).offset().top,
      },
      800
    );
  }
});
