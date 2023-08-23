let PIEDRA = "Piedra";
let PAPEL = "Papel";
let TIJERA = "Tijera";
let OPCIONES = [PIEDRA, PAPEL, TIJERA];
const BOTONES = document.querySelectorAll('.botones');
const ERROR = document.getElementById("error");
const START_BUTTON = document.getElementById("start");
const RESULTADO = document.getElementById("resultado");
let posiblesResultados = ["Empate!", "Gana el usuario!", "Gana la computadora!"];
let PC_PLAY;
let SCORE_PC = 0;
let SCORE_USUARIO = 0;
let USER_NAME;
let USER_PLAY;

function catchName(){// falta mostrarlo en RESULTADO
    USER_NAME = document.getElementById("name").value;
    const buscar = /[A-Za-z1-9]/;             
    let busqueda = buscar.test(USER_NAME);
    if(busqueda === true){
        USER_NAME = USER_NAME.trim();
        return ERROR.style.display = "none";
    }
    return ERROR.style.display = "block";
}

START_BUTTON.addEventListener("click", catchName);
START_BUTTON.addEventListener("click", function(){determinarGanador(USER_PLAY)});

function reset(){// DEJALO PARA LO ULTIMO NO TE MATES
    return;
}
function jugadaPC(){
    return OPCIONES[Math.floor(Math.random() * 3)];
};
function eleccionJugador(boton){
    USER_PLAY = boton.innerText;
    return USER_PLAY;
}
BOTONES.forEach((boton) => {boton.addEventListener('click', (event) => eleccionJugador(event.target))});

// window.onload = function(){
//     var test =document.querySelectorAll('.botones')
//     for(var i=0;i<test.length;i++){
//         test[i].addEventListener("click", function(){console.log("El id del boton es "+this.id)}); 
//     }
// }

function determinarGanador(USER_PLAY){  
    PC_PLAY = jugadaPC();
    console.log(USER_PLAY + " " + PC_PLAY);  
    if(PC_PLAY === USER_PLAY){
        // aca puedo ir sumando los score
        return  RESULTADO.innerText = posiblesResultados[0];
    }
    else if(PC_PLAY === PAPEL &&  USER_PLAY === PIEDRA){
        SCORE_PC += 1;
        return  RESULTADO.innerText = posiblesResultados[2];
    }
    else if(PC_PLAY === PIEDRA && USER_PLAY === PAPEL){
        SCORE_USUARIO += 1;
        return  RESULTADO.innerText = posiblesResultados[1];
    }
    else if(PC_PLAY === TIJERA && USER_PLAY === PAPEL){
        SCORE_PC += 1;
        return  RESULTADO.innerText = posiblesResultados[2];
    }
    else if(PC_PLAY === PAPEL && USER_PLAY === TIJERA){
        SCORE_USUARIO += 1;
        return  RESULTADO.innerText = posiblesResultados[1];
    }
    else if(PC_PLAY === PIEDRA && USER_PLAY === TIJERA){
        SCORE_PC += 1;
        return  RESULTADO.innerText = posiblesResultados[2];
    }
    else{
        SCORE_USUARIO += 1;
        return RESULTADO.innerText = posiblesResultados[1];
    }
}

if(SCORE_PC === 3 || SCORE_USUARIO === 3){
    
}





