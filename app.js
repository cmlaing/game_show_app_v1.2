/*
app.js is for Treehouse Unit 6 Project for the "Wheel of Success" game.
May 6/21 start
*/

//Variable List
const overlay = document.querySelector("#overlay");
const qwerty =  document.querySelector("#qwerty");
const phrase = document.querySelector("#phrase");
const btn_reset = document.querySelector(".btn__reset");
let missed = 0;
let phraseUl = document.querySelector("#phrase ul");
let liveHeart = document.querySelectorAll(".tries img");


// Phrase list, one per game to guess
const phraseList = [
    "The sky is blue",
    "One flew over the cuckoos nest",
    "It is always something",
    "I think therefore I am",
    "This project has been a success",
    "A snail says hello",
    "I will believe it when I see it",
    "Thank you for dinner"

];

btn_reset.addEventListener('click', () => {
    //hide the overlay when button is clicked
    if (btn_reset.textContent === 'Start Game') {
        overlay.style.display = "none";
    } 

});



function getRandomPhraseAsArray(arr){
    // choose 1 random phrase to be the phrase for the game

    // store random number based on the length of the array
    let randomNumber = Math.floor(Math.random() * arr.length);
    
    //Use the variable to select an index inside of the array.
    //Function returns a randomly selected phrase from phraseList
    return arr[randomNumber];

};



/*
Use the randomly generated phrase from getRandomPhraseAsArray() and
display it on the screen using addPhraseToDisplay()
*/
let chosenPhrase = getRandomPhraseAsArray(phraseList);
function addPhraseToDisplay(chosenPhrase) {
    //attach each char in phrase as a list item
    for (i = 0; i < chosenPhrase.length; i++){
        let li = document.createElement("li");
        phraseChar = chosenPhrase[i];
        li.textContent = phraseChar.toUpperCase();
        
        /* The part that displays it on the screen. Checks if the phrase character
        is a letter or a space, gives it a class of letter or space, then 
        attaches it to the list item in order for it to display.
        */
        if (li == phraseChar ) {
            li.classList.add("letter");
            phraseUl.appendChild(li);
        } else if (li !== phraseChar){ //not a letter, aka a space
            li.classList.add("space");
            phraseUl.appendChild(li);
        }
    }

};

addPhraseToDisplay(chosenPhrase);

/*
Loop over the letters and check if they match the letter in the button the player has chosen.
If there’s a match, the function should add the “show” class to the list item containing that letter, 
store the matching letter inside of a variable, and return that letter.
If a match wasn’t found, the function should return null.
*/

const letters = document.querySelectorAll('.letter');



function checkLetter(button){

    let matched = null; //no matches to start
    
    for (i = 0; i < letters.length; i++) {
        if (button === letters[i].textContent.toLowerCase()) {
            letters[i].classList.add("show");
            matched = true;
        }
    } 

    return matched;


};

/*
Event listener for keyboard.
A letter clicked on gets the "chosen" class and it is disabled so it cannot be selected again.
The clicked letter gets passed to checkLetter() and the result is stored in a variable letterFound.
If letterFound is not in the phrase, a heart life gets lost and the missed counter goes up.
*/


qwerty.addEventListener('click', e => {
    

    // when you click the button, the chosen class gets added so the tile gets dark and you can't click it again
    if (e.target.tagName === 'BUTTON'){
        e.target.className = "chosen";
        e.target.disabled = true;

        let letterFound = checkLetter(e.target.textContent.toLowerCase()); //buttons are lowercase
        if (letterFound === null) {
            liveHeart[missed].src = 'images/lostHeart.png'; // change heart to a dud
            missed++;

        }
        checkWin();

    }


});


/*
checkWin function to check if the phrase has been correctly guessed.

to check if the number of letters with class “show” is equal to the number of letters with class “letters”.
If they’re equal, show the overlay screen with the “win” class and appropriate text.
Otherwise, if the number of misses is equal to or greater than 5, show the overlay screen with the “lose” class and appropriate text.
*/

function checkWin() {
    const show = document.querySelectorAll('.show');  
    let endGameMessage = document.querySelector('.title');
    if (letters.length === show.length) { //all clicks are defaulting to this?

        // display win overlay
        overlay.className = "win";
        endGameMessage.textContent = "You Win!";
        overlay.style.display = "flex";
    } else if (missed > 4){
        overlay.className = "lose";
        endGameMessage.textContent = "You Lose!";
        overlay.style.display = "flex";
        //game over
    }


};
