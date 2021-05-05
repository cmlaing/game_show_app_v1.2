
const overlay = document.querySelector("#overlay");
const qwerty =  document.querySelector("#qwerty");
const phrase = document.querySelector("#phrase");
const btn_reset = document.querySelector(".btn__reset");
let missed = 0;


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



function getRandomPhraseAsArray(){
    // choose 1 random phrase to be the phrase for the game

    // store random number based on the length of the array
    let randomNumber = phraseList.length; 
    //Use the variable to select an index inside of the array.
    phraseList[i] = randomNumber;
    

};