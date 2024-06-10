/**********Constants**********/
//audio constants
const cNote = new Audio("assets/audio/C.mp3")
const cSharpNote = new Audio("assets/audio/Cs.mp3")
const dNote = new Audio("assets/audio/D.mp3")
const dSharpNote = new Audio("assets/audio/Ds.mp3")
const eNote = new Audio("assets/audio/E.mp3")
const fNote = new Audio("assets/audio/F.mp3")
const fSharpNote = new Audio("assets/audio/Fs.mp3")
const gNote = new Audio("assets/audio/G.mp3")
const gSharpNote = new Audio("assets/audio/Gs.mp3")
const aNote = new Audio("assets/audio/A.mp3")
const aSharpNote = new Audio("assets/audio/As.mp3")
const bNote = new Audio("assets/audio/B.mp3")

//Notes in an array
const allTheNotes = [cNote, cSharpNote, dNote, dSharpNote, eNote, fNote, fSharpNote, gNote, gSharpNote, aNote, aSharpNote, bNote]


/**********Variables**********/
let userSelectionOne = {}
let userSelectionTwo = {}
let segmentEnd
let randomNote

//2x2 

let noteOne = null
let noteTwo = null
let noteThree = null
let noteFour = null

let twoByTwoMatches = []
let threeByThreeMatches

/*********Cached DOM elements**********/

//grabs the instruction dialog box
const dialog = document.getElementById('instructionBox')
//grabs the instruction button
const instructionButton = document.querySelector('#instruction')
//grab the close button in the instructions popup box
const closeInstructionButton = document.getElementById('continueButton')
//grabs the check box
const checkBox = document.getElementById('instructionsCheckBox')
//grabs all the buttons by class name
const allTheButtons = document.querySelectorAll('.difficulty')
//grabs the 2x2 grid section
const twoByTwoGrid = document.querySelector('.twoByTwo')
//grabs the 3x3 grid section
const threeByThreeGrid = document.querySelector('.threeByThree')
//grabs each object in the section
const myGridObjects = document.querySelectorAll('.eachObject')

/**********Functions**********/

//Function to grab a random index from the Notes array and create a new index with the randomly generated number
//2x2
function randomNotesArrayTwoByTwo(length = 2) {
    return Array.from(Array(length), () => Math.floor(Math.random() * allTheNotes.length));

}

//3x3
function randomNotesArrayThreeByThree(length = 4) {
    return Array.from(Array(length), () => Math.floor(Math.random() * allTheNotes.length))
}


//function to change object color and play sound
function changeColor() {
    //to change the objects color
    this.classList.toggle('change');
}

function playIdx() {
    
}

//function for buttons to toggle visibility
function amIHidden() {
    if (this.id === "practiceDifficulty") {
        twoByTwoGrid.classList.toggle('iAmHiddenNow')
    } else if (this.id === "easyDifficulty"){
        threeByThreeGrid.classList.toggle('iAmHiddenNow')
    } else if (this.id === "mediumDifficulty") {
        console.log('4')
    } else if (this.id === "hardDifficulty") {
        console.log('5')
    } 
    return
}

//function to shuffle array 
function shuffleArray () {
    for (let i = allTheNotes.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i+1));
        [allTheNotes[i], allTheNotes[j]] = [allTheNotes[j], allTheNotes[i]]
    }
    return
}


//function for instruction dialog box w/ instruction button
function toggleInstructions() {
    dialog.showModal();
}

//function to close the instructions. Function only runs of checkbox in dialog is selected 
function closeInstructions() {
    if(checkBox.checked === true) {
        dialog.close();
    } else {
        return
    }
}



/**********Event Listeners**********/

//forEach loop to iterate through the buttons and add an event listener and a function to each.
allTheButtons.forEach(button => button.addEventListener('click', amIHidden))
allTheButtons.forEach(button => button.addEventListener('touch', amIHidden))
allTheButtons.forEach(button => button.addEventListener('click', shuffleArray))
allTheButtons.forEach(button => button.addEventListener('touch', shuffleArray))
//loops through all the objects and for each objects adds event listeners
myGridObjects.forEach(gridObject => gridObject.addEventListener('click', changeColor))
myGridObjects.forEach(gridObject => gridObject.addEventListener('touch', changeColor))
//adds an event listener to the instructions button 
instructionButton.addEventListener('click', toggleInstructions)
instructionButton.addEventListener('touch', toggleInstructions)
//adds an event listener to the close button 
closeInstructionButton.addEventListener('click', closeInstructions)
closeInstructionButton.addEventListener('touch', closeInstructions)

//attempt to iterate through the array and each object and assign a sound to each object

function whichNote() {
    randomNote = (allTheNotes[Math.floor(Math.random() * allTheNotes.length)])
    noteIdx = Number(randomNote)
    console.log(randomNote)
    console.log(noteIdx)
}


