/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

let game = "";

document.getElementById("btn__reset").addEventListener("click", () => {
    game = new Game();
    game.startGame();
});

document.addEventListener("keydown", e => {
    game.handleInteraction(e.key);
});

document.querySelectorAll(".key").forEach((key) => {
    key.addEventListener('click', e => {
        game.handleInteraction(e.target);
    })
});


