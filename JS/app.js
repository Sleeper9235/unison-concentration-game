

//grabs each object in the section
const myObjects = document.querySelectorAll('.eachObject')
//function for listener below
function changeColor() {
    this.classList.toggle('change')
}
//loops through all the objects and for each objects adds event listeners
myObjects.forEach(object => object.addEventListener('click', changeColor))
myObjects.forEach(object => object.addEventListener('touch', changeColor))

//grabs the 2x2 button
const twoByTwoButton = document.querySelector('#practiceDifficulty')
//grabs the 2x2 grid section
const twoByTwoGrid = document.querySelector('.twoByTwo')
//function for listener below
function amIHidden() {
    if (twoByTwoGrid.classList) {
        twoByTwoGrid.classList.toggle('iAmNow')
        console.log(twoByTwoGrid)
    }

}
//adds an event listener to the button
twoByTwoButton.addEventListener('click', amIHidden)
//adds an event listener to the grid section
