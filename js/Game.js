/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game{
    constructor(){
        this.missed = 0;
        this.phrases = this.createPhrases();
        this.activePhrase = null;
    };

    /**
    * Creates phrases for use in game
    * @return {array} An array of phrases that could be used in the game
    */
    createPhrases(){
        const phrase1 = new Phrase("Be Persistent");
        const phrase2 = new Phrase("Busy your mind with positive thoughts");
        const phrase3 = new Phrase("The power of NOW");
        const phrase4 = new Phrase("Forgive someone who has wronged you");
        const phrase5 = new Phrase("Be yourself");
        return [phrase1, phrase2, phrase3, phrase4, phrase5];
    };

    /**
    * Selects random phrase from phrases property
    * @return {Object} Phrase object chosen to be used
    */
    getRandomPhrase() {
        return this.phrases[Math.floor(Math.random()*this.phrases.length)];
    };

    /**
    * Begins game by selecting a random phrase and displaying it to user
    */
    startGame() {
        const overlay = document.getElementById("overlay");
        overlay.style.display = "none";
        this.activePhrase = this.getRandomPhrase()
        this.activePhrase.addPhraseToDisplay();

        //reset after previous game
        overlay.classList.remove("win");
        overlay.classList.remove("lose");

        //unlock onscreen keyboard buttons
        document.querySelectorAll(".key").forEach((key) => {
            key.classList.remove("chosen");
            key.classList.remove("wrong");
            key.disable = false;
        });
        
        //reset the life icons
        document.querySelectorAll('.tries').forEach((life) => {
            life.firstElementChild.src = 'images/liveHeart.png';
            life.firstElementChild.alt = 'Heart Icon';
        });
    };

    /**
    * Checks for winning move
    * @return {boolean} True if game has been won, false if game wasn't won
    */
    checkForWin() {
        const hiddenLetters = document.querySelectorAll('#phrase ul li.hide');
        if (hiddenLetters.length === 0) return true;
        else return false;
        
    };

    /**
    * Increases the value of the missed property
    * Removes a life from the scoreboard
    * Checks if player has remaining lives and ends game if player is out
    */
    removeLife() {
        const tries = document.querySelectorAll('.tries');
        tries[this.missed].firstElementChild.src = 'images/lostHeart.png';
        tries[this.missed].firstElementChild.alt = 'Letter not matched - lost one Heart Icon';
        this.missed++;
        if (this.missed === 5) {
            this.gameOver(false);
        }
    };

    /**
    * Displays game over message
    * @param {boolean} gameWon - Whether or not the user won the game
    */
    gameOver(gameWon) {
        const message = document.querySelector("#game-over-message");
        const winLose = document.querySelector("#overlay");
        winLose.style.display = "";
        winLose.className = "";
        if (gameWon) {
            message.textContent = "Winner!"
            winLose.classList.add("win");
        } else {
            message.textContent = "Dang! Try Again!"
            winLose.classList.add("lose");
            this.resetGame();
        };        

    };

    /**
    * Handles onscreen keyboard button clicks
    * @param (HTMLButtonElement) button - The clicked button element
    */
    handleInteraction(button) {
        if (!button.hasAttribute("disabled")){
            button.setAttribute("disabled","true");
  
            if (this.activePhrase.checkLetter(button.textContent)) {
                button.classList.add("chosen");
                this.activePhrase.showMatchedLetter(button.textContent);
                if(this.checkForWin()) {
                    this.gameOver(true)
                };
            
            } else {
                button.classList.add("wrong");
                this.removeLife();

            };
        };
    };

    resetGame() {
        //remove li from phrase section
        const ul = document.querySelector('#phrase ul');
        ul.innerHTML = '';
    };
};
