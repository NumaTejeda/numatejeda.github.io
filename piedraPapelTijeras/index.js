const OPCIONES = ["PIEDRA", "PAPEL", "TIJERA"];
let USER_NAME;
const MOVE_PC = jugadaPC();
const SCORE_PC = 0;
const SCORE_USUARIO = 0;
let userChoice = "";




const ERROR = document.getElementById("error");
const START_BUTTON = document.getElementById("start");



START_BUTTON.addEventListener("click", catchName);

function catchName(){// falta mostrarlo en pantalla
    USER_NAME = document.getElementById("name").value;
    const buscar = /[A-Za-z1-9]/;                      
    let busqueda = buscar.test(USER_NAME);
    if(busqueda === true){
        USER_NAME = USER_NAME.trim();
        return ERROR.style.display = "none";
    }
    return ERROR.style.display = "block";
}

function reset(){// DEJALO PARA LO ULTIMO NO TE MATES
    return;
}
function jugadaPC(){
    return OPCIONES[Math.floor(Math.random() * 3)];
};
function eleccionJugador(boton){
    userChoice = boton.innerText;
    return console.log(userChoice);
}
document.querySelectorAll('.botones').forEach((boton) => {
   boton.addEventListener('click', (event) => eleccionJugador(event.target));
});

if(userChoice == "tijera" && MOVE_PC){
    console.log("Gano PC")
}
else{
    console.log("GAno usuario!")
}


// function eleccionJugador(boton){
//     let id = boton.id;
//     choiseUser = document.getElementById(id).innerText;
//     return console.log(choiseUser);
// }
// botones.addEventListener("click", function(){
//     eleccionJugador(this);
// });

// "click",modifyText.bind(null,"four")

//acceder desd elemento padre a los elementos hijos a traves del id

// let botones = document.querySelectorAll(".botones");

// const cuandoHaceClick = function (evento){
//     console.log("Eltexto que tiene es: ", this.innerText)
// }
// botones.forEach(boton => boton.addEventListener("click", this.eleccionJugador()));

// window.onload = function(){
//     var test =document.querySelectorAll('.botones')
//     for(var i=0;i<test.length;i++){
//         test[i].addEventListener("click", function(){console.log("El id del boton es "+this.id)}); 
//     }
// }







