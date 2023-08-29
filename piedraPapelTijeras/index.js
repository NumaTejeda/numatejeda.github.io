let PIEDRA = "piedra", PAPEL = "papel", TIJERA = "tijera";
let OPCIONES = [PIEDRA, PAPEL, TIJERA];
const BOTONES = document.querySelectorAll('.botones');
const ERROR = document.getElementById("error");
const PLAY_BUTTON = document.getElementById("play");
const RESET_BUTTON = document.getElementById("reset");
const CONTIUNUE_BUTTON = document.getElementById("continue");
const RESULTADO = document.getElementById("resultado");
const INPUT =  document.getElementById("name");
const POSIBLES_RESULTADOS = ["Empate!", "Ganaste", "Gana la PC!"];

let PC_PLAY;
let SCORE_PC = 0;
let SCORE_USUARIO = 0;
let USER_PLAY;
let USER_NAME;


// retorna una ellecion al azar entre las opciones
function jugadaPC(){
    PC_PLAY = OPCIONES[Math.floor(Math.random() * 3)];
    return PC_PLAY;
};
// resetea todo
function reset(){
    document.getElementById("name").disabled = false;
    BOTONES.forEach(boton => boton.style.display = "none");
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

// accedo al objeto donde se disparo el evento a traves de event.target y recupero su id guardandolo como la opcion elegida
function eleccionJugador(boton){
    USER_PLAY = boton.id;
    PLAY_BUTTON.disabled = false;
    return USER_PLAY;
}
//agarra el boton y no la im++
BOTONES.forEach((boton) => {boton.addEventListener('click', (event) => eleccionJugador(event.target))});

//capturo el value del input mientras se escribe, si está vacio muestra el error en el momento
// y no habilita el boton de continuar
function errorName(){
    USER_NAME = document.getElementById("name").value;
    const BUSCAR = /[A-Za-z1-9]/;             
    let busqueda = BUSCAR.test(USER_NAME);
    if(busqueda === true){
        USER_NAME = USER_NAME.trim();
        CONTIUNUE_BUTTON.disabled = false;
        return ERROR.style.display = "none";
    }
    CONTIUNUE_BUTTON.disabled = true;
    return ERROR.style.display = "block";
}
INPUT.addEventListener("input", errorName)

// desbloquea las opciones
function continuar(){
    document.getElementById("name").disabled = true;
    BOTONES.forEach(boton => boton.style.display= "block");
    CONTIUNUE_BUTTON.disabled = true;
    return;
}
CONTIUNUE_BUTTON.addEventListener("click", continuar);

//calcula el resultado de cada ronda
function resultadoParcial(){
    RESULTADO.innerText = `La pc eligió: ${PC_PLAY}
    `;
    if(PC_PLAY === USER_PLAY){
        RESULTADO.innerText +="UPS! " + POSIBLES_RESULTADOS[0];
        return SCORE_PC, SCORE_USUARIO;
    }
    else if(PC_PLAY === PAPEL &&  USER_PLAY === PIEDRA){
        SCORE_PC++;
        RESULTADO.innerText += POSIBLES_RESULTADOS[2];
        return SCORE_PC;
    }
    else if(PC_PLAY === PIEDRA && USER_PLAY === PAPEL){
        SCORE_USUARIO++;
        RESULTADO.innerText += POSIBLES_RESULTADOS[1] +" "+ USER_NAME; 
        return SCORE_USUARIO;
    }
    else if(PC_PLAY === TIJERA && USER_PLAY === PAPEL){
        SCORE_PC++;
        RESULTADO.innerText += POSIBLES_RESULTADOS[2]; 
        return SCORE_PC;
    }  
    else if(PC_PLAY === PAPEL && USER_PLAY === TIJERA){
        SCORE_USUARIO++;
        RESULTADO.innerText +=POSIBLES_RESULTADOS[1] +" "+ USER_NAME;
        return SCORE_USUARIO;
    }
    else if(PC_PLAY === PIEDRA && USER_PLAY === TIJERA){
        SCORE_PC++;
        RESULTADO.innerText += POSIBLES_RESULTADOS[2];
        return SCORE_PC;
    }
    else{
        SCORE_USUARIO++;
        RESULTADO.innerText += POSIBLES_RESULTADOS[1] +" "+ USER_NAME;
        return SCORE_USUARIO;
    }
}

//ejecuta el resultado parcial y determina el ganador bloqueando todo las opciones y habilitando el bton reset
function determinarGanador(USER_PLAY){  
    jugadaPC();
    resultadoParcial();
    const TEXT = `
    ${USER_NAME}: ${SCORE_USUARIO} // PC: ${SCORE_PC}`;
    RESULTADO.innerText += " " + TEXT;
    if(SCORE_PC == 3 || SCORE_USUARIO == 3){
        BOTONES.forEach(boton => boton.style.display = "none");
        if(SCORE_PC == 3){
            RESULTADO.innerText = `${USER_NAME}: ${SCORE_USUARIO} // PC: ${SCORE_PC} 
            Ganó la PC`;
        }
        else{
            RESULTADO.innerText = `${USER_NAME}: ${SCORE_USUARIO} // PC: ${SCORE_PC} 
            Ganaste  ${USER_NAME}!!!`;
        }
        imgPrevio.classList.remove('active');
        PLAY_BUTTON.disabled = true;
        RESET_BUTTON.style.display = "block";
        
        return;
    }
    return;  
}
PLAY_BUTTON.addEventListener("click", function(){determinarGanador(USER_PLAY)});

/////////// Inicio de código robado :) /////////////////////////////////////
/////////////////////////////////////////////////////////////////
let imgPrevio = null;
const choise = document.getElementById("choise");

choise.addEventListener('click', event => {
    //Verifica que el evento click haya sido sobre un elemento <img>
    const esIMG = event.target.nodeName === 'IMG'; 
    if (!esIMG) {
        return;      // Si no lo es devuelve la nada misma. En este caso los hijos de choise son todas etiquetas <img>.  
    }
    //target es el boton donde se hace click
    event.target.classList.add('active'); // agrega la clase .active 

    //verifica que imgPrevio este vacio o no, en caso de no estarlo remueve la clase
    if(imgPrevio !== null) {
        imgPrevio.classList.remove('active');  // remueve la calse .active
    }
    // guarda la imagen donde se hizo click en la variable imgPrevio la cual sera chekeada
    // en el proximo evento, de no ser null se removera la clase.
    imgPrevio = event.target;

});
////////// fin de código robado /////////////////////////////////


