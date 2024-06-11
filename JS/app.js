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

//Notes in each difficulty array
const twoByTwoNotes = [cNote, cNote, cSharpNote, cSharpNote]

const threeByThreeNotes = [cNote, cNote, cSharpNote, cSharpNote, dNote, dNote, dSharpNote, dSharpNote]

const fourByFourNotes = [cNote, cNote, cSharpNote, cSharpNote, dNote, dNote, dSharpNote, dSharpNote, eNote, eNote, fNote, fNote, fSharpNote, fSharpNote, gNote, gNote]

const fiveByFiveNotes = [cNote, cNote, cSharpNote, cSharpNote, dNote, dNote, dSharpNote, dSharpNote, eNote, eNote, fNote, fNote, fSharpNote, fSharpNote, gNote, gNote, gSharpNote, gSharpNote, aNote, aNote, aSharpNote, aSharpNote, bNote, bNote]

/**********Variables**********/
let userSelectionOne = null
let userSelectionTwo = null

/*********Cached DOM elements**********/

//grabs the instruction dialog box
const instructionDialog = document.getElementById('instructionBox')
//grabs the instruction button
const instructionButton = document.querySelector('#instruction')
//grab the restart dialog box 
const restartDialog = document.getElementById('youWin')
//grab the restart button in the restart popup box
const restartButton = document.getElementById('restartButton')
//grab the close button in the instructions popup box
const closeInstructionButton = document.getElementById('continueButton')
//grabs the youLose dialog box
const youLoseBox = document.getElementById('youLose')
//grabs the button in the youLose dialog box
const loseButton = document.getElementById('loseButton')
//grabs the check box
const checkBox = document.getElementById('instructionsCheckBox')
//grabs all the buttons by class name
const allTheButtons = document.querySelectorAll('.difficulty')
//grab all elements by ID
const twoByTwoButton = document.getElementById('practiceDifficulty')
const threeByThreeButton = document.getElementById('easyDifficulty')
const fourByFourButton = document.getElementById('mediumDifficulty')
const fiveByFiveButton = document.getElementById('hardDifficulty')
//grabs the 2x2 grid section
const twoByTwoGrid = document.querySelector('.twoByTwo')
//grabs the 3x3 grid section
const threeByThreeGrid = document.querySelector('.threeByThree')
//grabs the 4x4 grid section
const fourByFourGrid = document.querySelector('.fourByFour')
//grabs the 5x5 grid section
const fiveByFiveGrid = document.querySelector('.fiveByFive')
//grabs each object in the section
const twoByTwoObjects = document.querySelectorAll('game-object-2by2')
//grabs the start button
const startButton = document.querySelector('#start')
//grabs the timer 
const timer = document.getElementById('timer')


/**********Functions**********/

//function for buttons to toggle visibility
function amIHidden() {
    if (this.id === "practiceDifficulty") {
        twoByTwoGrid.classList.toggle('iAmHiddenNow')
    } else if (this.id === "easyDifficulty"){
        threeByThreeGrid.classList.toggle('iAmHiddenNow')
    } else if (this.id === "mediumDifficulty") {
        fourByFourGrid.classList.toggle('iAmHiddenNow')
    } else if (this.id === "hardDifficulty") {
        fiveByFiveGrid.classList.toggle('iAmHiddenNow')
    } 
    return
}

//function for buttons to toggle collor when selected
function toggleColor() {
    if (this.id === "practiceDifficulty") {
        this.classList.toggle('borderColor')
    } else if (this.id === "easyDifficulty"){
        this.classList.toggle('borderColor')
    } else if (this.id === "mediumDifficulty") {
        this.classList.toggle('borderColor')
    } else if (this.id === "hardDifficulty") {
        this.classList.toggle('borderColor')
    } 
    return
}

//function for instruction dialog box w/ instruction button
function toggleInstructions() {
    instructionDialog.showModal();
}

//function to close the instructions. Function only runs of checkbox in dialog is selected 
function closeInstructions() {
        instructionDialog.close();
}



function playGame() {

    if (twoByTwoButton.id === 'practiceDifficulty' && twoByTwoButton.classList.contains('borderColor')) {
        let timeLeft = 15
        let timerId = setInterval(countdown, 1000)
    
        function countdown() {
            if (timeLeft == -1) {
                clearTimeout(timerId);
                youLoseBox.showModal()
                clearTimeout(timerId)
                loseButton.addEventListener('click', function()  {
                    youLoseBox.close();
                    location.reload();
                }) 
            } else {
                timer.innerHTML = `Time Remaining: ${timeLeft}`;
                timeLeft--;
            }
        }
        let shuffleNotesTwoByTwo = twoByTwoNotes.sort(() => (Math.random() > .5) ? 2 : -1);
            for ( let object = 0; object < twoByTwoNotes.length; object++) {
                let musicNote = document.createElement('div');
                musicNote.className = 'game-object-2by2';
                let musicNoteSrc = shuffleNotesTwoByTwo[object]
                if ([object] < 4) { 
                    twoByTwoGrid.appendChild(musicNote);
                    musicNote.addEventListener('click', function() {
                        musicNoteSrc.play()
                        this.classList.add('change')
                            if (userSelectionOne === null) {
                                userSelectionOne = twoByTwoNotes[object].src
                                userSelectedObjectOne = this
                            } else if (userSelectionTwo === null) {
                                userSelectionTwo = twoByTwoNotes[object].src
                                userSelectedObjectTwo = this
                                if (userSelectionOne === userSelectionTwo) {
                                    userSelectedObjectOne.classList.add('vanish');
                                    userSelectedObjectTwo.classList.add('vanish');
                                    userSelectedObjectOne.classList.add('win')
                                    userSelectedObjectTwo.classList.add('win')
                                    userSelectionOne = null
                                    userSelectionTwo = null

                                    if(document.querySelectorAll('.win').length === twoByTwoNotes.length) {
                                        restartDialog.showModal()
                                        clearTimeout(timerId)
                                        restartButton.addEventListener('click', function()  {
                                            restartDialog.close();
                                            location.reload();
                                        })
                                    }   

                                } else if (userSelectionOne !== userSelectionTwo) {
                                    userSelectedObjectOne.classList.remove('change')
                                    userSelectedObjectTwo.classList.remove('change')
                                    userSelectionOne = null
                                    userSelectionTwo = null 

                                }
                            }
                    })
                }
        }
    } else if (threeByThreeButton.id === 'easyDifficulty' && threeByThreeButton.classList.contains('borderColor')) {
        let timeLeft = 15
        let timerId = setInterval(countdown, 1000)
    
        function countdown() {
            if (timeLeft == -1) {
                clearTimeout(timerId);
                youLoseBox.showModal()
                clearTimeout(timerId)
                loseButton.addEventListener('click', function()  {
                    youLoseBox.close();
                    location.reload();
                }) 
            } else {
                timer.innerHTML = `Time Remaining: ${timeLeft}`;
                timeLeft--;
            }
        }
        let shuffleNotesTwoByTwo = threeByThreeNotes.sort(() => (Math.random() > .5) ? 2 : -1);
        for ( let object = 0; object < threeByThreeNotes.length; object++) {
            let musicNote = document.createElement('div');
            musicNote.className = 'game-object-3by3';
            let musicNoteSrc = shuffleNotesTwoByTwo[object]
            if ([object] < 8) { 
                threeByThreeGrid.appendChild(musicNote);
                musicNote.addEventListener('click', function() {
                    musicNoteSrc.play()
                    this.classList.add('change')
                        if (userSelectionOne === null) {
                            userSelectionOne = threeByThreeNotes[object].src
                            userSelectedObjectOne = this
                        } else if (userSelectionTwo === null) {
                            userSelectionTwo = threeByThreeNotes[object].src
                            userSelectedObjectTwo = this
                            if (userSelectionOne === userSelectionTwo) {
                                userSelectedObjectOne.classList.add('vanish');
                                userSelectedObjectTwo.classList.add('vanish');
                                userSelectedObjectOne.classList.add('win')
                                userSelectedObjectTwo.classList.add('win')
                                userSelectionOne = null
                                userSelectionTwo = null

                                if(document.querySelectorAll('.win').length === threeByThreeNotes.length) {
                                    restartDialog.showModal()
                                    clearTimeout(timerId)
                                    restartButton.addEventListener('click', function()  {
                                        restartDialog.close();
                                        location.reload();
                                    })
                                }   

                            } else if (userSelectionOne !== userSelectionTwo) {
                                userSelectedObjectOne.classList.remove('change')
                                userSelectedObjectTwo.classList.remove('change')
                                userSelectionOne = null
                                userSelectionTwo = null 

                            }
                        }
                })
            }
        }
    } else if (fourByFourButton.id === 'mediumDifficulty' && fourByFourButton.classList.contains('borderColor')) {
        let timeLeft = 45
        let timerId = setInterval(countdown, 1000)
    
        function countdown() {
            if (timeLeft == -1) {
                clearTimeout(timerId);
                youLoseBox.showModal()
                clearTimeout(timerId)
                loseButton.addEventListener('click', function()  {
                    youLoseBox.close();
                    location.reload();
                }) 
            } else {
                timer.innerHTML = `Time Remaining: ${timeLeft}`;
                timeLeft--;
            }
        }
        let shuffleNotesTwoByTwo = fourByFourNotes.sort(() => (Math.random() > .5) ? 2 : -1);
        for ( let object = 0; object < fourByFourNotes.length; object++) {
            let musicNote = document.createElement('div');
            musicNote.className = 'game-object-4by4';
            let musicNoteSrc = shuffleNotesTwoByTwo[object]
            if ([object] < 16) { 
                fourByFourGrid.appendChild(musicNote);
            }musicNote.addEventListener('click', function() {
                musicNoteSrc.play()
                this.classList.add('change')
                    if (userSelectionOne === null) {
                        userSelectionOne = fourByFourNotes[object].src
                        userSelectedObjectOne = this
                    } else if (userSelectionTwo === null) {
                        userSelectionTwo = fourByFourNotes[object].src
                        userSelectedObjectTwo = this
                        if (userSelectionOne === userSelectionTwo) {
                            userSelectedObjectOne.classList.add('vanish');
                            userSelectedObjectTwo.classList.add('vanish');
                            userSelectedObjectOne.classList.add('win')
                            userSelectedObjectTwo.classList.add('win')
                            userSelectionOne = null
                            userSelectionTwo = null

                            if(document.querySelectorAll('.win').length === fourByFourNotes.length) {
                                restartDialog.showModal()
                                clearTimeout(timerId)
                                restartButton.addEventListener('click', function()  {
                                    restartDialog.close();
                                    location.reload();
                                })
                            }   

                        } else if (userSelectionOne !== userSelectionTwo) {
                            userSelectedObjectOne.classList.remove('change')
                            userSelectedObjectTwo.classList.remove('change')
                            userSelectionOne = null
                            userSelectionTwo = null 

                        }
                    }
            })
        }
    } else if (fiveByFiveButton.id === 'hardDifficulty' && fiveByFiveButton.classList.contains('borderColor')) {
        let timeLeft = 60
        let timerId = setInterval(countdown, 1000)
    
        function countdown() {
            if (timeLeft == -1) {
                clearTimeout(timerId);
                youLoseBox.showModal()
                clearTimeout(timerId)
                loseButton.addEventListener('click', function()  {
                    youLoseBox.close();
                    location.reload();
                }) 
            } else {
                timer.innerHTML = `Time Remaining: ${timeLeft}`;
                timeLeft--;
            }
        }
        let shuffleNotesTwoByTwo = fiveByFiveNotes.sort(() => (Math.random() > .5) ? 2 : -1);
        for ( let object = 0; object < fiveByFiveNotes.length; object++) {
            let musicNote = document.createElement('div');
            musicNote.className = 'game-object-5by5';
            let musicNoteSrc = shuffleNotesTwoByTwo[object]
            if ([object] < 24) { 
                fiveByFiveGrid.appendChild(musicNote);
                musicNote.addEventListener('click', function() {
                    musicNoteSrc.play()
                    this.classList.add('change')
                        if (userSelectionOne === null) {
                            userSelectionOne = fiveByFiveNotes[object].src
                            userSelectedObjectOne = this
                        } else if (userSelectionTwo === null) {
                            userSelectionTwo = fiveByFiveNotes[object].src
                            userSelectedObjectTwo = this
                            if (userSelectionOne === userSelectionTwo) {
                                userSelectedObjectOne.classList.add('vanish');
                                userSelectedObjectTwo.classList.add('vanish');
                                userSelectedObjectOne.classList.add('win')
                                userSelectedObjectTwo.classList.add('win')
                                userSelectionOne = null
                                userSelectionTwo = null

                                if(document.querySelectorAll('.win').length === fiveByFiveNotes.length) {
                                    restartDialog.showModal()
                                    clearTimeout(timerId)
                                    restartButton.addEventListener('click', function()  {
                                        restartDialog.close();
                                        location.reload();
                                    })
                                }   

                            } else if (userSelectionOne !== userSelectionTwo) {
                                userSelectedObjectOne.classList.remove('change')
                                userSelectedObjectTwo.classList.remove('change')
                                userSelectionOne = null
                                userSelectionTwo = null 

                            }
                        }
                })
            }
        }
    } else {
        return
    }
}

/**********Event Listeners**********/

//forEach loop to iterate through the buttons and add an event listener and a function to each.
allTheButtons.forEach(button => button.addEventListener('click', amIHidden))
allTheButtons.forEach(button => button.addEventListener('touch', amIHidden))
allTheButtons.forEach(button => button.addEventListener('click', toggleColor))
allTheButtons.forEach(button => button.addEventListener('touch', toggleColor))
//adds an event listener to the instructions button 
instructionButton.addEventListener('click', toggleInstructions)
instructionButton.addEventListener('touch', toggleInstructions)
//adds an event listener to the close button 
closeInstructionButton.addEventListener('click', closeInstructions)
closeInstructionButton.addEventListener('touch', closeInstructions)
//add an event listener to the start button
startButton.addEventListener('click', playGame)
startButton.addEventListener('touch', playGame)



