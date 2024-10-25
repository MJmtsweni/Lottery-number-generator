// Function to Lotto unique random numbers
function generateLotteryNumbers(size, lowest, highest) {
  const numbersList = [];
  
  while (numbersList.length < size) {
    const randomNumber = Math.floor(Math.random() * (highest - lowest + 1)) + lowest;

    if (!numbersList.includes(randomNumber)) {
      numbersList.push(randomNumber);
    }
  }

  numbersList.sort((a, b) => a - b);
  return numbersList;
}

// Cache DOM elements for future use
const lotteryContainer = document.querySelector('#numbers');
const numberContainers = lotteryContainer.querySelectorAll('#see-lotto');
const generateBtn = document.getElementById('generateBtn');
const spinDuration = 200; // Spin duration in milliseconds
const iterations = 9; // Number of iterations for spinning

// Function to display final lottery numbers
function displayLotteryNumbers(numbers) {
  numbers.forEach((number, index) => {
    const numberContainer = numberContainers[index];
    const numberSpan = numberContainer.querySelector('.number');
    numberSpan.textContent = number;
  });
}

// Handle button click to generate and animate lottery numbers
generateBtn.addEventListener('click', () => {
  const lotteryNumbers = generateLotteryNumbers(6, 1, 49);

  numberContainers.forEach((container, index) => {
    const numberSpan = container.querySelector('.number');
    let iterationCount = 0;

    const spinInterval = setInterval(() => {
      numberSpan.textContent = Math.floor(Math.random() * 49) + 1;
      iterationCount++;

      if (iterationCount >= iterations) {
        clearInterval(spinInterval);
        setTimeout(() => {
          numberSpan.textContent = lotteryNumbers[index];
        }, 100);

        document.getElementById("numLp").style.display = "block";
        document.getElementById("clearL").style.display = "inline-block";
      }
    }, spinDuration);
  });
});

// Function to reset the displayed lottery numbers
function clearLotteryNumbers() {
  const resetNumbers = ['numL1', 'numL2', 'numL3', 'numL4', 'numL5', 'numL6'];
  resetNumbers.forEach(id => {
    document.getElementById(id).textContent = "?";
  });

  document.getElementById("numLp").style.display = "none";
  document.getElementById("clearL").style.display = "none";
}

// Function to generate unique random Powerball numbers
function generatePowerballNumbers(size, lowest, highest, powerballMax) {
  const numbers = [];
  
  while (numbers.length < size) {
    const randomNumber = Math.floor(Math.random() * (highest - lowest + 1)) + lowest;
    if (!numbers.includes(randomNumber)) {
      numbers.push(randomNumber);
    }
  }
  
  numbers.sort((a, b) => a - b);
  
  // Generate the Powerball number
  const powerball = Math.floor(Math.random() * powerballMax) + 1;
  numbers.push(powerball);

  return numbers;
}

// Cache DOM elements for Powerball
const powerballContainer = document.querySelector('#numbersB');
const powerballNumberContainers = powerballContainer.querySelectorAll('#see-power');
const generateBtnB = document.getElementById('generateBtnB');

// Function to display final Powerball numbers
function displayPowerballNumbers(numbers) {
  numbers.forEach((container, index) => {
    const containerOfNumber = powerballNumberContainers[index];
    const numberBSpan = containerOfNumber.querySelector('.numberB');
    numberBSpan.textContent = container;    
  });
}

// Handle button click to generate and animate Powerball numbers
generateBtnB.addEventListener('click', () => {
  const powerballNumbers = generatePowerballNumbers(5, 1, 49, 20);

  powerballNumberContainers.forEach((container, index) => {
    const numberBSpan = container.querySelector('.numberB');
    let iterationCount = 0;

    const spinInterval = setInterval(() => {
      numberBSpan.textContent = Math.floor(Math.random() * 49) + 1;
      iterationCount++;

      if (iterationCount >= iterations) {
        clearInterval(spinInterval);
        setTimeout(() => {
          numberBSpan.textContent = powerballNumbers[index];
        }, 100);

        document.getElementById("numBp").style.display = "block";
        document.getElementById("clearB").style.display = "inline-block";
      }
    }, spinDuration);
  });
});

// Function to reset the displayed Powerball numbers
function clearPowerballNumbers() {
  console.log('clearPowerballNumbers function is running'); // Debugging
  const resetNumbers = ['numB1', 'numB2', 'numB3', 'numB4', 'numB5', 'numB6'];
  resetNumbers.forEach(id => {
    document.getElementById(id).textContent = "?";
  });

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
