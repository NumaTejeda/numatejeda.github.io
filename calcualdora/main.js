let suma = (num1, num2) => {return num1 + num2};
let resta = (num1, num2) => {return num1 - num2};
let division = (num1, num2) => {return num1 / num2};
let multiplicacion = (num1, num2) => {return num1 * num2};

function calcular(){
    let num1 = Number(document.getElementById("number1").value);
    let num2 = Number(document.getElementById("number2").value);
    let valorSelect = document.getElementById("operacion").value;
    let resultado = 0;
    switch(valorSelect){
        case "suma": 
            resultado = suma(num1, num2);
            break;
        case "resta":
            resultado = resta(num1, num2);
            break;
        case "division":
            resultado = division(num1, num2);
            break;
        case "multiplicacion":
            resultado = multiplicacion(num1, num2);
            break;
    }
    return document.getElementById("resultado").innerHTML = "El resultado es: " + resultado;
}
function resetValue(){
    return document.getElementById("number1").value = "",
    document.getElementById("number2").value = "",
    document.getElementById("operacion").value = "suma";
}
// export {suma, resta, division, multiplicacion};

