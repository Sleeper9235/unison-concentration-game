

//grabs each object in the section
const myObjects = document.querySelectorAll('.eachObject')
//function for listener below
function changeColor() {
    this.classList.toggle('change')
}
//loops through all the objects and for each objects adds event listeners
myObjects.forEach(object => object.addEventListener('click', changeColor))
myObjects.forEach(object => object.addEventListener('touch', changeColor))

// grabs the 2x2 button (dead due to forEach loop through all difficulty buttons) (keeping for reference)

// const twoByTwoButton = document.querySelector('#practiceDifficulty')

//function for listener below
// function amIHidden() {
//     twoByTwoGrid.classList.toggle('iAmHiddenNow')
// }

//adds an event listener to the button
// twoByTwoButton.addEventListener('click', amIHidden)


//grabs all the buttons by class name
const allTheButtons = document.querySelectorAll('.difficulty')
//grabs the 2x2 grid section
const twoByTwoGrid = document.querySelector('.twoByTwo')
//grabs the 3x3 grid section
const threeByThreeGrid = document.querySelector('.threeByThree')
//function for listener below
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
//forEach loop to iterate through the buttons and add an event listener and a function to each.
allTheButtons.forEach(button => button.addEventListener('click', amIHidden))
allTheButtons.forEach(button => button.addEventListener('touch', amIHidden))

//grabs the parentGrid section 
