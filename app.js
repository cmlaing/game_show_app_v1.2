/*
app.js is for Treehouse Unit 6 Project for the "Wheel of Success" game.
6-8 hours total
*/

// Variable List
const overlay = document.querySelector("#overlay");
const qwerty =  document.querySelector("#qwerty");
const phrase = document.querySelector("#phrase");
const btn_reset = document.querySelector(".btn__reset");
let phraseUl = document.querySelector("#phrase ul");
let liveHeart = document.querySelectorAll(".tries img");
let chosen = document.querySelectorAll(".chosen");
let missed = 0; // lives are at full health!



/*
    An array of phrases. One phrase will be chosen from this list to act as the phrase
    to guess in the game.
*/
const phraseList = [
    "I am a cat",
    "Hello friend",
    "It is always something",
    "I enjoy pizza",
    "Photosynthesis is important",
    "A snail says hello",
    "I will believe it when I see it",
    "Thank you for dinner",
    "Wow that was awesome",
    "Claustrophobia is not a myth"

];

/*
    Event listener for clicking on the "Start Game" and "Play Again" buttons.
    "Start Game" hides overlay and "Play Again" refreshes the page.

*/

btn_reset.addEventListener('click', () => {
    //hide the overlay when button is clicked
    if (btn_reset.textContent === 'Start Game') {
        overlay.style.display = "none";
    } else if (btn_reset.textContent === 'Play Again') {
        location.reload(); // reset the game by refreshing the page
    }
        

});



/*
    A function to select a random phrase from phraseList based on a random number.
    The random number is generated based on the length of the phraseList array.
    Returns an index value of phraseList based on the random number, which is a string for a given phrase.
*/

function getRandomPhraseAsArray(arr){
    // choose 1 random phrase to be the phrase for the game

    // store random number based on the length of the array
    let randomNumber = Math.floor(Math.random() * arr.length);
    
    //Use the variable to select an index inside of the array.
    //Function returns a randomly selected phrase from phraseList
    return arr[randomNumber];

};



/*
    addPhraseToDisplay() function

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
        if (!li.textContent == phraseChar.toUpperCase() ) {
            li.classList.add("space");
            phraseUl.appendChild(li);
        } else if (li.textContent == phraseChar.toUpperCase()){ //not a letter, aka a space
            li.classList.add("letter");
            phraseUl.appendChild(li);
        }
    }

};

addPhraseToDisplay(chosenPhrase);

/*
    checkLetter() function
    Loops over the letters and check if they match the letter in the button the player has chosen.
    If there’s a match, the function adds the “show” class to the list item containing that letter, 
    stores the matching letter inside of a variable, and returns that letter.
    If a match wasn’t found, the function returns null.
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
    Event listener for on screen keyboard.
    A letter clicked on gets the "chosen" class and it is disabled so it cannot be selected again.
    The clicked letter gets passed to checkLetter() and the result is stored in a variable letterFound.
    If letterFound is not in the phrase, a heart life gets lost and the missed counter goes up.
    After every letter is clicked, a checkWin() function is called to see if the player has won or lost the game.
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
    It checks if the number of letters with class “show” is equal to the number of letters with class “letters”.
    If they’re equal, it shows the overlay screen with the “win” class and appropriate text.
    Otherwise, if the number of misses is greater than 4, it shows the overlay screen with the “lose” class and appropriate text.
*/

function checkWin() {
    const show = document.querySelectorAll('.show');  
    let endGameMessage = document.querySelector('.title');
    if (letters.length === show.length) { // display win overlay
        overlay.className = "win";
        endGameMessage.textContent = "You win kitten boots!";
        overlay.style.display = "flex";
        btn_reset.textContent = "Play Again";

        var kitten = new Image();
        kitten.src = 'images/kittens2.jpg';
        document.getElementById("overlay").appendChild(kitten);
   
        
        


    } else if (missed > 4){ // display loser overlay, game over
        overlay.className = "lose";
        endGameMessage.textContent = "You Lose!";
        overlay.style.display = "flex";
        btn_reset.textContent = "Play Again";
        
        
    }


};






