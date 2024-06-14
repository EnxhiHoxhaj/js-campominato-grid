// richiamo il contenitore dal DOM
let campoMinato = document.querySelector(".campo");
let generateCampo = document.querySelector("button");
//gestione del clicK che genererà la griglia
generateCampo.addEventListener ("click",
    function(){ //tramite un ciclo che mi  genera 100 caselle
        let bombSquare;
        for (i = 1; i <= 100; i++) {
            let number = i;
            let bombSquare = `<div class="square"> ${number}</div>`;
            campoMinato.innerHTML = bombSquare;
            campoMinato.classList.add("show_element");
            introductioGame.classList.add("hidden");
            generateCampo.classList.add("hidden");

            // gestione delle evento click al click di ogni singola casella essa si colora di azzurro
            bombSquare.addEventListener ("click",
                function() { //colorare le caselle di azzurro e stampa in console il numero
                    bombSquare.classList.toggle("sky_blu");
                    console.log(i);
                }
            )
        }
    }
)



