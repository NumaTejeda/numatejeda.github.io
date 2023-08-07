const suma = (num1, num2) => {return num1 + num2};
const resta = (num1, num2) => {return num1 - num2};
const division = (num1, num2) => {return num1 / num2};
const multiplicacion = (num1, num2) => {return num1 * num2};

const num1 = document.getElementById("number1");
const num2 = document.getElementById("number2");
const valorSelect = document.getElementById("operacion").value;

console.log(suma(2, 4));

// export {suma, resta, division, multiplicacion};

