let suma = (num1, num2) => {return num1 + num2};
let resta = (num1, num2) => {return num1 - num2};
let division = (num1, num2) => {return num1 / num2};
let multiplicacion = (num1, num2) => {return num1 * num2};

function calcular(){
    let num1 = Number(document.getElementById("number1").value);
    let num2 = Number(document.getElementById("number2").value);
    let valorSelect = document.getElementById("operacion").value;
    let resultado = "";
    if(isNaN(num1) || isNaN(num2)){
        return document.getElementById("resultado").innerHTML = "ERROR! Verifica los campos ingresados y asegurate de que hayas ingresado un numero.";
    }
    else{
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
        return document.getElementById("resultado").innerHTML = resultado;
    }
}
function resetValue(){
    return document.getElementById("number1").value = "",
    document.getElementById("number2").value = "",
    document.getElementById("operacion").value = "suma",
    document.getElementById("resultado").innerHTML = "";
}
// export {suma, resta, division, multiplicacion};

