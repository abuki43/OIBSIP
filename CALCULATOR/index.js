let entryTop = document.querySelector(".entry-top");
let entryBottom = document.querySelector(".entry-bottom");
let btnOperand = document.querySelectorAll(".operand");
let signs = document.querySelectorAll(".sign");

const toggler = document.querySelector(".toggler--slider");
const main = document.querySelector("main");
const delBtn = document.querySelector(".del");
const clear = document.querySelector(".clear");
let displayContent = "";
let result;
let isResult = true;

btnOperand.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const { value } = e.target;
    if (isResult || displayContent === "Error" || displayContent == "NaN") {
      displayContent = "";
    }
    displayContent += value;
    update();
    isResult = false;
  });
});

signs.forEach((sign) => {
  sign.addEventListener("click", (e) => {
    const { value } = e.target;
    if (!isOperator(displayContent[displayContent.length - 1])) {
      displayContent += value;
      update();
      isResult = false;
    }
  });
});

function update() {
  entryBottom.innerHTML = displayContent;
}

function calculate() {
  try {
    if (displayContent.includes("/0")) {
      throw new Error("Cannot divide by zero");
    }
    result = eval(displayContent).toFixed(3);
    entryTop.innerHTML = displayContent;
    entryBottom.innerHTML = `${result}`;
    displayContent = result.toString();
    isResult = true;
  } catch (error) {
    displayContent = "Error";
    update();
  }
}

toggler.addEventListener("click", () => {
  main.classList.toggle("light");
});

delBtn.addEventListener("click", () => {
  if (!isResult) {
    let value = entryBottom.innerText;
    let del = value.substring(0, value.length - 1);
    displayContent = del;
    update();
  }
});

clear.addEventListener("click", () => {
  displayContent = "";
  entryTop.innerHTML = "";
  update();
});

function squareRoot() {
    try{
        result = eval(displayContent)
        const squareRootResult = Math.sqrt(result).toFixed(3)
        entryTop.innerHTML = `sqrt(${displayContent})`;
        entryBottom.innerHTML = `${squareRootResult}`;
        displayContent = squareRootResult
        isResult = true;
    }catch(error){
        displayContent = "Error";
        update();
    }
  }

function isOperator(value) {
  const operators = ["+", "-", "*", "/", "%"];
  return operators.includes(value);
}









