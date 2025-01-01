let x = document.querySelector(".x");
let o = document.querySelector(".o");
let boxes = document.querySelectorAll(".box");
let buttons = document.querySelectorAll("#button-container button");
let messageContainer = document.querySelector("#message");
let massageText = document.querySelector("#message p");
let secondPlayer;


// Contador de Jogadas para Cada Player

let player1 = 0;
let player2 = 0;

// Adicionando evento de Click

for(let i = 0; i < boxes.length; i++) {

    let el = checkEl(player1, player2);

    // Quando um player clica em uma caixa
    boxes[i].addEventListener('click', function() {

        // (IF) verifica se já existe elemento na caixa.
        // Se tiver pula pra proxima e add o Elemento, senão adiciona o elemento na caixa .
    if(this.childNodes.length == 0) {
         //clonando o elemento pra usar ele depois.
        let cloneEl = el.cloneNode(true);

         // Adicionado um elemento dentro da caixa selecionada (x) ou (o);
         // This = caixa ou bonx clicado ou selecionado;
        this.appendChild(cloneEl);

         //Computando a jogada
        if(player1 == player2) {
            player1++;
        } else {
            player2++;
        }
    }
    });
}

// Definindo quem vai jogar;
let checkEl = (player1, player2) => {
    if(player1 == player2) {

        // x
        el = x;

    } else {

        // o
        el = o;
    }

    return el;
}




