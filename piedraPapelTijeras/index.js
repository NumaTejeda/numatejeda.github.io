
let PIEDRA = "Piedra", PAPEL = "Papel", TIJERA = "Tijera";
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
    return OPCIONES[Math.floor(Math.random() * 3)];
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
function eleccionJugador(boton){
    USER_PLAY = boton.innerText;
    PLAY_BUTTON.disabled = false;
    return USER_PLAY;
}
function errorName(){
    USER_NAME = document.getElementById("name").value;
    const buscar = /[A-Za-z1-9]/;             
    let busqueda = buscar.test(USER_NAME);
    if(busqueda === true){
        // USER_NAME = USER_NAME.trim();
        CONTIUNUE_BUTTON.disabled = false;
        return ERROR.style.display = "none";
    }
    CONTIUNUE_BUTTON.disabled = true;
    return ERROR.style.display = "block";
}
function continuar(){
    BOTONES.forEach(boton => boton.disabled = false);
    CONTIUNUE_BUTTON.disabled = true;
    return;
}
function resultadoParcial(){
     if(PC_PLAY === USER_PLAY){
        return  RESULTADO.innerText = POSIBLES_RESULTADOS[0];
    }
    else if(PC_PLAY === PAPEL &&  USER_PLAY === PIEDRA){
        return  RESULTADO.innerText = POSIBLES_RESULTADOS[2], SCORE_PC += 1,
        console.log("pc: " + SCORE_PC +"// us: " + SCORE_USUARIO); 
    }
    else if(PC_PLAY === PIEDRA && USER_PLAY === PAPEL){
        return  RESULTADO.innerText = POSIBLES_RESULTADOS[1], SCORE_USUARIO += 1, 
        console.log("pc: " + SCORE_PC +"// us: " + SCORE_USUARIO);
    }
    else if(PC_PLAY === TIJERA && USER_PLAY === PAPEL){
        return  RESULTADO.innerText = POSIBLES_RESULTADOS[2], SCORE_PC += 1, 
        console.log("pc: " + SCORE_PC +"// us: " + SCORE_USUARIO);
    }  
    else if(PC_PLAY === PAPEL && USER_PLAY === TIJERA){
        return  RESULTADO.innerText = POSIBLES_RESULTADOS[1], SCORE_USUARIO += 1, 
        console.log("pc: " + SCORE_PC +"// us: " + SCORE_USUARIO);
    }
    else if(PC_PLAY === PIEDRA && USER_PLAY === TIJERA){
        return  RESULTADO.innerText = POSIBLES_RESULTADOS[2],  SCORE_PC += 1, 
        console.log("pc: " + SCORE_PC +"// us: " + SCORE_USUARIO);;
    }
    else{
        return RESULTADO.innerText = POSIBLES_RESULTADOS[1], SCORE_USUARIO += 1, 
        console.log("pc: " + SCORE_PC +"// us: " + SCORE_USUARIO);
    }
}

// cuando es igual a 3 me deja apretar otra vez en PLAY
function determinarGanador(USER_PLAY){  
    PC_PLAY = jugadaPC();
    console.log(USER_PLAY + " " + PC_PLAY); 
    resultadoParcial();
    if(SCORE_PC == 3 || SCORE_USUARIO == 3){
        BOTONES.forEach(boton => boton.disabled = true);
        botonPrevio.classList.remove('active');
        PLAY_BUTTON.disabled = true;
        RESET_BUTTON.style.display = "block";
        return;
    }
    return;  
}
/////////// código robado :) /////////////////////////////////////
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

PLAY_BUTTON.addEventListener("click", function(){determinarGanador(USER_PLAY)});
INPUT.addEventListener("input", errorName)
BOTONES.forEach((boton) => {boton.addEventListener('click', (event) => eleccionJugador(event.target))});
RESET_BUTTON.addEventListener("click", reset);
CONTIUNUE_BUTTON.addEventListener("click", continuar);

