// Funciones que devuelven el resultado de operar entre dos numeros
let suma = (num1, num2) => {return num1 + num2};
let resta = (num1, num2) => {return num1 - num2};
let division = (num1, num2) => {return num1 / num2};
let multiplicacion = (num1, num2) => {return num1 * num2};

//Funcion del boton calcular: aca utilizo las funciones de arriba segun que valor este indicado
// en el <select>. Tambien manejo el ERROR de operar entre minimo un valor no numerico.
function calcular(){
    let num1 = Number(document.getElementById("number1").value);
    let num2 = Number(document.getElementById("number2").value);
    let valorSelect = document.getElementById("operacion").value;  //Guardo los valores en variables
    let resultado = "";
    if(isNaN(num1) || isNaN(num2)){  // Manejo de error
        return document.getElementById("resultado").innerHTML = "ERROR! Verifica los campos ingresados.",
        document.getElementById("resultado").style.color = "red";
    }
    else{
        switch(valorSelect){  //comparo valor del select y segun el caso aplico la funcion correspondiente. 
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
        return document.getElementById("resultado").innerHTML = resultado,
        document.getElementById("resultado").style.color = "black"; // devulevo resultado dentro del <p> con id "resultado".
    }
}
// Funcion de boton reste: restauros los valores pode defecto. 
function resetValue(){
    return document.getElementById("number1").value = "",
    document.getElementById("number2").value = "",
    document.getElementById("operacion").value = "suma",
    document.getElementById("resultado").innerHTML = "",
    document.getElementById("errorNum1").style.display = "none",
    document.getElementById("errorNum2").style.display = "none";

}
// Capturo error en timpo real (? en el primer input. El mensaje se encuentra oculto con display: none.
function catchErrorNum1(){
    let num1 = Number(document.getElementById("number1").value);
    if(isNaN(num1)){
        return document.getElementById("errorNum1").style.display = "block";
    }
    else{
        return document.getElementById("errorNum1").style.display = "none";     
    }
}
//Igual que el anterior pero para el segundo input.
function catchErrorNum2(){
    let num2 = Number(document.getElementById("number2").value);
    if(isNaN(num2)){
        return document.getElementById("errorNum2").style.display = "block";
    }
    else{
        return document.getElementById("errorNum2").style.display = "none";
        
    }
}

