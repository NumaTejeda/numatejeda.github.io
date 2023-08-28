
let PIEDRA = "piedra", PAPEL = "papel", TIJERA = "tijera";
let OPCIONES = [PIEDRA, PAPEL, TIJERA];
const BOTONES = document.querySelectorAll('.botones');
const ERROR = document.getElementById("error");
const PLAY_BUTTON = document.getElementById("play");
const RESET_BUTTON = document.getElementById("reset");
const CONTIUNUE_BUTTON = document.getElementById("continue");
const RESULTADO = document.getElementById("resultado");
const INPUT =  document.getElementById("name");
const POSIBLES_RESULTADOS = ["Empate!", "Gana el usuario!", "Gana la computadora!"];

let PC_PLAY;
let SCORE_PC = 0;
let SCORE_USUARIO = 0;
let USER_NAME;
let USER_PLAY;

function jugadaPC(){
    PC_PLAY = OPCIONES[Math.floor(Math.random() * 3)];
    return PC_PLAY;
};
function reset(){
    BOTONES.forEach(boton => boton.disabled = true);
    PLAY_BUTTON.disabled = true;
    RESET_BUTTON.style.display = "none";
    INPUT.value = "";
    RESULTADO.innerHTML = "";
    SCORE_PC = 0;   
    SCORE_USUARIO = 0;
    USER_NAME = "";
    return;
}
RESET_BUTTON.addEventListener("click", reset);

function eleccionJugador(boton){
    USER_PLAY = boton.id;
    PLAY_BUTTON.disabled = false;
    return USER_PLAY;
}
BOTONES.forEach((boton) => {boton.addEventListener('click', (event) => eleccionJugador(event.target))});

// function eleccionJugador(boton){
//     const userChoice = boton.innerText;
//     console.log(userChoice);
// }
 
// BOTONES.forEach((boton) => {
//    boton.addEventListener('click', (event) => eleccionJugador(event.target));
// });

function errorName(){
    USER_NAME = document.getElementById("name").value;
    const buscar = /[A-Za-z1-9]/;             
    let busqueda = buscar.test(USER_NAME);
    if(busqueda === true){
        USER_NAME = USER_NAME.trim();
        CONTIUNUE_BUTTON.disabled = false;
        return ERROR.style.display = "none";
    }
    CONTIUNUE_BUTTON.disabled = true;
    return ERROR.style.display = "block";
}
INPUT.addEventListener("input", errorName)

function continuar(){
    BOTONES.forEach(boton => boton.disabled = false);
    CONTIUNUE_BUTTON.disabled = true;
    return;
}
CONTIUNUE_BUTTON.addEventListener("click", continuar);

function resultadoParcial(){
    const TEXT = `User: ${SCORE_USUARIO} // PC: ${SCORE_PC}`;
    if(PC_PLAY === USER_PLAY){
        return  RESULTADO.innerText = TEXT + "UPS! " + POSIBLES_RESULTADOS[0];
    }
    else if(PC_PLAY === PAPEL &&  USER_PLAY === PIEDRA){
        SCORE_PC += 1;
        RESULTADO.innerText = TEXT + POSIBLES_RESULTADOS[2];
    }
    else if(PC_PLAY === PIEDRA && USER_PLAY === PAPEL){
        SCORE_USUARIO += 1;
        RESULTADO.innerText = TEXT + POSIBLES_RESULTADOS[1]; 
        return;
    }
    else if(PC_PLAY === TIJERA && USER_PLAY === PAPEL){
        SCORE_PC += 1;
        RESULTADO.innerText = TEXT + POSIBLES_RESULTADOS[2]; 
        return;
    }  
    else if(PC_PLAY === PAPEL && USER_PLAY === TIJERA){
        SCORE_USUARIO += 1;
        RESULTADO.innerText = TEXT + POSIBLES_RESULTADOS[1];
        return;
    }
    else if(PC_PLAY === PIEDRA && USER_PLAY === TIJERA){
        SCORE_PC += 1;
        RESULTADO.innerText = TEXT + POSIBLES_RESULTADOS[2];
        return;
    }
    else{
        SCORE_USUARIO += 1;
        RESULTADO.innerText = TEXT + POSIBLES_RESULTADOS[1];
        return;
    }
}
function determinarGanador(USER_PLAY){  
    jugadaPC();
    console.log(USER_PLAY + " " + PC_PLAY); 
    resultadoParcial();
    if(SCORE_PC == 3 || SCORE_USUARIO == 3){
        if(SCORE_PC == 3){
            RESULTADO.innerText = `User: ${SCORE_USUARIO} // PC: ${SCORE_PC} 
            Ganó la PC`;
        }
        else{
            RESULTADO.innerText = `User: ${SCORE_USUARIO} // PC: ${SCORE_PC} 
            Ganaste  ${USER_NAME}!!!`;
        }
        BOTONES.forEach(boton => boton.disabled = true);
        botonPrevio.classList.remove('active');
        PLAY_BUTTON.disabled = true;
        RESET_BUTTON.style.display = "block";
        
        return;
    }
    return;  
}
PLAY_BUTTON.addEventListener("click", function(){determinarGanador(USER_PLAY)});

/////////// Inicio de código robado :) /////////////////////////////////////
/////////////////////////////////////////////////////////////////
let botonPrevio = null;
const choise = document.getElementById("choise");

choise.addEventListener('click', event => {
    //Verifica que el evento click haya sido sobre un button
    const isButton = event.target.nodeName === 'BUTTON'; 
    if (!isButton) {
        return;      // Si no lo es devuelve la nada misma. En este caso los hijos de choise son todos botones.  
    }
    //target es el boton donde se hace click
    event.target.classList.add('active'); // agrega la clase .active 

    //verifica que botonPrevio este vacio o no, en caso de no estarlo remueve la clase
    if(botonPrevio !== null) {
        botonPrevio.classList.remove('active');  // remueve la calse .active
    }
    // guarda el botón donde se hizo click en la variable botonPrevio la cual sera chekeada
    // en el proximo evento, de no ser null se removera la clase.
    botonPrevio = event.target;

});
////////// fin de código robado /////////////////////////////////


