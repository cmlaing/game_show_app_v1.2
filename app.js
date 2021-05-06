/*
app.js is for Treehouse Unit 6 Project for the "Wheel of Success" game.
May 6/21 start
*/


const overlay = document.querySelector("#overlay");
const qwerty =  document.querySelector("#qwerty");
const phrase = document.querySelector("#phrase");
const btn_reset = document.querySelector(".btn__reset");
let missed = 0;
let phraseUl = document.querySelector("#phrase ul");


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
        
        // actually displays on screen
        if (li == phraseChar ) {
            li.classList.add("letter");
            phraseUl.appendChild(li);


        } else if (li !== phraseChar){
            li.classList.add("space");
            phraseUl.appendChild(li);

        }
    }

};

addPhraseToDisplay(chosenPhrase);