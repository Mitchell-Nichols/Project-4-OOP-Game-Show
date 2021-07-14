/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase{
    constructor(phrase){
        this.phrase = phrase.toLowerCase();
    }

    /**
    * Display phrase on game board
    */
    addPhraseToDisplay(){

        const phraseSection = document.getElementById('phrase');
        const phraseArr = this.phrase.split(' ');

        // Creates letters placeholders with spaces between each word
        let html = `<ul>`;
        phraseArr.forEach( word => {
            for (let i = 0; i < word.length; i += 1){
                html += 
                `<li class="hide letter ${word.charAt(i)}">${word.charAt(i)}</li>`;
            }
            if (phraseArr.indexOf(word) != phraseArr.length-1){
                html +=`<li class="space"> </li>`;
            }
        });
        html+= `</ul>`;
        phraseSection.innerHTML = html;
    }

    /**
    * Checks if passed letter is in phrase
    * @param (string) letter - Letter to check
    * @return {boolean} True if letter exists in phrase, otherwise false
    */
    checkLetter(letter) {
        return this.phrase.includes(letter);
    };

    /**
    * Displays passed letter on screen after a match is found
    * @param (string) letter - Letter to display
    */
    showMatchedLetter(letter) {
        const letters = Array.from(document.getElementsByClassName(letter));
        letters.forEach(match => {
            match.classList.remove('hide');
            match.classList.add('show');
        });
    };
};