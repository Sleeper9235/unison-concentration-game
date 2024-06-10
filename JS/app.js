
let userSelectionOne = {}
let userSelectionTwo = {}
let segmentEnd

//audio

const c = new Audio("")


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
const myObjects = document.querySelectorAll('.eachObject')


//function to change object color and play sound
function changeColor() {
    //to change the objects color
    this.classList.toggle('change');
    //to play the sound from the chosen object
    if (segmentEnd && c.currentTime <= segmentEnd) {
        c.play();
    }   
    console.log(c.currentTime);


}

function playSegment(startTime, endTime){
    segmentEnd = endTime;
    c.currentTime = startTime;
    c.play();
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
console.log(myObjects)


//forEach loop to iterate through the buttons and add an event listener and a function to each.
allTheButtons.forEach(button => button.addEventListener('click', amIHidden))
allTheButtons.forEach(button => button.addEventListener('touch', amIHidden))
//loops through all the objects and for each objects adds event listeners
myObjects.forEach(object => object.addEventListener('click', changeColor))
myObjects.forEach(object => object.addEventListener('touch', changeColor))
//adds an event listener to the instructions button 
instructionButton.addEventListener('click', toggleInstructions)
instructionButton.addEventListener('touch', toggleInstructions)
//adds an event listener to the close button 
closeInstructionButton.addEventListener('click', closeInstructions)
closeInstructionButton.addEventListener('touch', closeInstructions)

