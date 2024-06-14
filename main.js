// richiamo il contenitore dal DOM
let campoMinato = document.querySelector(".campo");
let generateCampo = document.querySelector("button");
let introductioGame = document.querySelector (".intro_play")
//gestione del clicK che genererà la griglia
generateCampo.addEventListener ("click",
    function(){ //tramite un ciclo che mi  genera 100 caselle
        for (i = 1; i <= 100; i++) {

            //creiamo i div rappresenta<nti le caselle
            const bombSquare = document.createElement("div");

            // assegnamo la classe "square" e "show_element"

            // assegnamo a l'elemento introduzioneGioco e al bottone la classe "hidden"
            
            //assegnamo un numero ad ogni casella e stampiamo in pagina il numero

            // creare un click sulle caselle

            // se cliccate prendono la classe "sky_blu"

            // stampare in console il numero

        }
    }
)




            /*campoMinato.innerHTML += bombSquare;
            campoMinato.classList.add("show_element");
            introductioGame.classList.add("hidden");
            generateCampo.classList.add("hidden");

            // gestione delle evento click al click di ogni singola casella essa si colora di azzurro
            bombSquare.addEventListener ("click",
                function() { //colorare le caselle di azzurro e stampa in console il numero
                    bombSquare.classList.toggle("sky_blu");
                    console.log(i);
                }
            )*/