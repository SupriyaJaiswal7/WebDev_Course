let display = document.querySelector(".calculator-screen");

let numberlist = document.querySelectorAll(".calculator-values button");
let currentInput ="";
for(let number of numberlist){
    number.addEventListener("click", function(){
        currentInput += number.value;
        display.value = currentInput;
    })
}

let operatorlist = document.querySelectorAll(".operator");
for(let operator of operatorlist){
    operator.addEventListener("click", function(){
        currentInput += operator.value;
        display.value = currentInput;
    })
}

let equalBtn = document.querySelector(".equal-sign");
equalBtn.addEventListener("click", function(){
    try{
        if(currentInput === ""){
            display.value ="0";
        } else{
            currentInput = eval(currentInput);
            display.value= currentInput;
        }
    } catch(error){
        display.value = "Error";
        currentInput ="";
    }  
})

let clearBtn = document.querySelector(".all-clear");
clearBtn.addEventListener("click", function(){
    currentInput="";
    display.value="";
})

let deleteBtn = document.querySelector(".delete");
deleteBtn.addEventListener("click", function(){
    currentInput = currentInput.slice(0, -1);
    display.value = currentInput;
})

document.addEventListener("keydown", function(event) {
  let key = event.key;

  // Allow digits, operators, decimal point
  if ((key >= '0' && key <= '9') || ['+', '-', '*', '/', '.'].includes(key)) {
    currentInput += key;
    display.value = currentInput;
  }

  // Handle Enter (=)
  else if (key === 'Enter') {
    try {
      currentInput = eval(currentInput);
      display.value = currentInput;
    } catch (error) {
      display.value = "Invalid Input";
      currentInput = "";
    }
  }

  // Handle Backspace (delete one character)
  else if (key === 'Backspace') {
    currentInput = currentInput.slice(0, -1);
    display.value = currentInput;
  }

  // Handle Escape (clear all)
  else if (key === 'Escape') {
    currentInput = "";
    display.value = "";
  }
});

let darkmode = document.getElementById("theme-toggle");

darkmode.addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");

  // toggle icon based on mode
  if (document.body.classList.contains("dark-mode")) {
    darkmode.textContent = "☀️";
  } else {
    darkmode.textContent = "🌙";
  }
});
 

