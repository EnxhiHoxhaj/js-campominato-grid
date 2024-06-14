// richiamo il contenitore dal DOM
let campoMinato = document.querySelector(".campo");
let introductioGame = document.querySelector(".intro_play")
let generateCampo = document.querySelector("button");
//gestione del clicK che genererà la griglia
generateCampo.addEventListener ("click",
    function(){ //tramite un ciclo che mi  genera 100 caselle
        for (i = 0; i <= 99; i++) {
            let bombSquare = `<div class="square"></div>`;
            campoMinato.innerHTML += bombSquare;
            console.log(bombSquare);
        }
        campoMinato.classList.add("show_element");
        introductioGame.classList.add("hidden");
        generateCampo.classList.add("hidden");
    }
)

// al click di ogni singola casella essa si colora di azzurro
// gestione delle evento click
//colorare le caselle di azzurro tramite l'aggiunta di una classe
    // creo una classe per far stampare i numeri in console

    //for (i= 0 , 1 <= 99; i++) {}
    //tramite un ciclo genero un array di numeri
    // tramite un ciclo inserisco i numeri neglle caselle in modo progressivo da 1 a 100
    // creo una classe per nascondere nascondere i numeri
