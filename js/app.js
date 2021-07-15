/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

let game = "";

document.getElementById("btn__reset").addEventListener("click", () => {
    game = new Game();
    game.startGame();
});

const keys = document.getElementsByClassName("key");
document.addEventListener("keydown", e => {
    for(let i = 0; i < keys.length; i++){
        if(keys[i].innerHTML === e.key){
            game.handleInteraction(keys[i]);
        }
    };
    
});

document.querySelectorAll(".key").forEach((key) => {
    key.addEventListener('click', e => {
        game.handleInteraction(e.target);
    })
});


