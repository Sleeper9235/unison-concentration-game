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
const twoByTwoNotes = [cNote, cNote, dNote, dNote]
const threeByThreeNotes = [cNote, cNote, dNote, dNote, eNote, eNote, fNote, fNote]
const fourByFourNotes = [cNote, cNote, dNote, dNote, dSharpNote, dSharpNote, eNote, eNote, fNote, fNote, gNote, gNote, aNote, aNote,]
const fiveByFiveNotes = [cNote, cNote, cSharpNote, cSharpNote, dNote, dNote, dSharpNote, dSharpNote, eNote, eNote, fNote, fNote, fSharpNote, fSharpNote, gNote, gNote, gSharpNote, gSharpNote, aNote, aNote, aSharpNote, aSharpNote, bNote, bNote]

/**********Variables**********/
let userSelectionOne = null
let userSelectionTwo = null

/*********Cached DOM elements**********/
//grabs the instruction dialog box one
const instructionDialogOne = document.getElementById('instructionBoxOne')
//grabs the instruction dialog box two
const instructionDialogTwo = document.getElementById('instructionBoxTwo')
//grabs the instruction dialog box three
const instructionDialogThree = document.getElementById('instructionBoxThree')
//grabs the instruction dialog box four
const instructionDialogFour = document.getElementById('instructionBoxFour')
//grabs the instruction dialog box five
const instructionDialogFive = document.getElementById('instructionBoxFive')
//grabs the instruction button
const instructionButton = document.querySelector('#instruction')
//grab the win dialog box 
const winDialog = document.getElementById('youWin')
//grab the continue button in the win popup box
const winButton = document.getElementById('winButton')
//grab the restart button
const restartButton = document.getElementById('restartButton')
//grab the close button in the 1st instructions popup box
const closeInstructionButtonOne = document.getElementById('continueButtonOne')
//grab the close button in the 2nd instructions popup box
const closeInstructionButtonTwo = document.getElementById('continueButtonTwo')
//grab the close button in the 3rd instructions popup box
const closeInstructionButtonThree = document.getElementById('continueButtonThree')
//grab the close button in the 4th instructions popup box
const closeInstructionButtonFour = document.getElementById('continueButtonFour')
//grabs the close button in the 5th instructions popup box
const closeInstructionButtonFive = document.getElementById('continueButtonFive')
//grabs the youLose dialog box
const youLoseBox = document.getElementById('youLose')
//grabs the button in the youLose dialog box
const loseButton = document.getElementById('loseButton')
//grabs the check box
const checkBox = document.getElementById('instructionsCheckBox')
//grabs all the buttons by class name
const allTheButtons = document.querySelectorAll('.difficulty')
//grab all button elements by ID
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
//function restart button 
function restart() {
    location.reload();
}

// simplified toggleColor and amIHidden to the difficultyButtons function. Also prevents overlapping of pressed buttons
function difficultyButtons() {
    let pressedButton = this.id
    if (pressedButton === "practiceDifficulty") {
        twoByTwoButton.classList.toggle('borderColor')
        twoByTwoGrid.classList.toggle('iAmHiddenNow')

        threeByThreeButton.classList.remove('borderColor')
        threeByThreeGrid.classList.add('iAmHiddenNow')

        fourByFourButton.classList.remove('borderColor')
        fourByFourGrid.classList.add('iAmHiddenNow')

        fiveByFiveButton.classList.remove('borderColor')
        fiveByFiveGrid.classList.add('iAmHiddenNow')
        
    } else if (pressedButton === "easyDifficulty") {
        threeByThreeButton.classList.toggle('borderColor')
        threeByThreeGrid.classList.toggle('iAmHiddenNow')

        twoByTwoButton.classList.remove('borderColor')
        twoByTwoGrid.classList.add('iAmHiddenNow')

        fourByFourButton.classList.remove('borderColor')
        fourByFourGrid.classList.add('iAmHiddenNow')

        fiveByFiveButton.classList.remove('borderColor')
        fiveByFiveGrid.classList.add('iAmHiddenNow')

    } else if (pressedButton === "mediumDifficulty") {
        fourByFourButton.classList.toggle('borderColor')
        fourByFourGrid.classList.toggle('iAmHiddenNow')

        twoByTwoButton.classList.remove('borderColor')
        twoByTwoGrid.classList.add('iAmHiddenNow')

        threeByThreeButton.classList.remove('borderColor')
        threeByThreeGrid.classList.add('iAmHiddenNow')

        fiveByFiveButton.classList.remove('borderColor')
        fiveByFiveGrid.classList.add('iAmHiddenNow')

    } else if (pressedButton === "hardDifficulty") {
        fiveByFiveButton.classList.toggle('borderColor')
        fiveByFiveGrid.classList.toggle('iAmHiddenNow')

        twoByTwoButton.classList.remove('borderColor')
        twoByTwoGrid.classList.add('iAmHiddenNow')

        threeByThreeButton.classList.remove('borderColor')
        threeByThreeGrid.classList.add('iAmHiddenNow')

        fourByFourButton.classList.remove('borderColor')
        fourByFourGrid.classList.add('iAmHiddenNow')
    }
}

//function for instruction dialog box w/ instruction button
function toggleInstructions() {
    instructionDialogOne.showModal();
}

//function to close the instructions. Function only runs of checkbox in dialog is selected 
function closeInstructions() {
    if (this.id === "continueButtonOne") {
        instructionDialogTwo.showModal();
        instructionDialogOne.close();
    } else if (this.id === "continueButtonTwo") {
        instructionDialogThree.showModal();
        instructionDialogTwo.close();      
    } else if (this.id === "continueButtonThree") {
        instructionDialogThree.close();
        instructionDialogFour.showModal();
    } else if (this.id === "continueButtonFour") {
        instructionDialogFour.close();
        instructionDialogFive.showModal();
    } else {
        instructionDialogFive.close();
    }
}

function playGame() {
    startButton.classList.add('prevent');
    let timeLeft = 0
    if (twoByTwoButton.classList.contains('borderColor') || threeByThreeButton.classList.contains('borderColor')) {
        timeLeft = 15
    } else if (fourByFourButton.classList.contains('borderColor')) {
        timeLeft = 30
    } else {
        timeLeft = 45
    }
    let timerId = setInterval(countdown, 1000)
    function countdown() {
        if (timeLeft == -1) {
            clearTimeout(timerId);
            youLoseBox.showModal()
            loseButton.addEventListener('click', function()  {
                youLoseBox.close();
                location.reload();
            }) 
        } else {
            timer.innerHTML = `Time Remaining: ${timeLeft} seconds`;
            timeLeft--;
        }
    } 
    function increaseTimer() {
        if (twoByTwoButton.classList.contains('borderColor') || threeByThreeButton.classList.contains('borderColor')) {
            timeLeft += 2
        } else if (fourByFourButton.classList.contains('borderColor')) {
            timeLeft += 3
        } else {
            timeLeft += 4
        }
    }
    if (twoByTwoButton.id === 'practiceDifficulty' && twoByTwoButton.classList.contains('borderColor')) {
        let shuffleNotesTwoByTwo = twoByTwoNotes.sort(() => (Math.random() > .5) ? 2 : -1);
        for (let object = 0; object < twoByTwoNotes.length; object++) {
            let musicNote = document.createElement('div');
            musicNote.className = 'game-object-2by2';
            let musicNoteSrc = shuffleNotesTwoByTwo[object]
            twoByTwoGrid.appendChild(musicNote);
            musicNote.addEventListener('click', function() {
                musicNoteSrc.play()
                this.classList.add('change')
                if (userSelectionOne === null && userSelectionTwo === null) {
                    userSelectionOne = twoByTwoNotes[object].src
                    userSelectedObjectOne = this
                } else if (userSelectionTwo === null  && this !== userSelectedObjectOne) {
                    userSelectionTwo = twoByTwoNotes[object].src
                    userSelectedObjectTwo = this
                    if (userSelectionOne === userSelectionTwo) {
                        userSelectedObjectOne.classList.add('vanish');
                        userSelectedObjectTwo.classList.add('vanish');
                        userSelectedObjectOne.classList.add('win')
                        userSelectedObjectTwo.classList.add('win')
                        increaseTimer();
                        userSelectionOne = null
                        userSelectionTwo = null

                        if(document.querySelectorAll('.win').length === twoByTwoNotes.length) {
                            winDialog.showModal()
                            clearTimeout(timerId)
                            winButton.addEventListener('click', function()  {
                                winDialog.close();
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
    } else if (threeByThreeButton.id === 'easyDifficulty' && threeByThreeButton.classList.contains('borderColor')) {
        let shuffleNotesThreeByThree = threeByThreeNotes.sort(() => (Math.random() > .5) ? 2 : -1);
        for ( let object = 0; object < threeByThreeNotes.length; object++) {
            let musicNote = document.createElement('div');
            musicNote.className = 'game-object-3by3';
            let musicNoteSrc = shuffleNotesThreeByThree[object]
            threeByThreeGrid.appendChild(musicNote);
            musicNote.addEventListener('click', function() {
                musicNoteSrc.play()
                this.classList.add('change')
                if (userSelectionOne === null) {
                    userSelectionOne = threeByThreeNotes[object].src
                    userSelectedObjectOne = this
                } else if (userSelectionTwo === null  && this !== userSelectedObjectOne) {
                    userSelectionTwo = threeByThreeNotes[object].src
                    userSelectedObjectTwo = this
                    if (userSelectionOne === userSelectionTwo) {
                        userSelectedObjectOne.classList.add('vanish');
                        userSelectedObjectTwo.classList.add('vanish');
                        userSelectedObjectOne.classList.add('win')
                        userSelectedObjectTwo.classList.add('win')
                        userSelectionOne = null
                        userSelectionTwo = null
                        increaseTimer();
                        if(document.querySelectorAll('.win').length === threeByThreeNotes.length) {
                            winDialog.showModal()
                            clearTimeout(timerId)
                            winButton.addEventListener('click', function()  {
                                winDialog.close();
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
    } else if (fourByFourButton.id === 'mediumDifficulty' && fourByFourButton.classList.contains('borderColor')) {
        let shuffleNotesFourByFour = fourByFourNotes.sort(() => (Math.random() > .5) ? 2 : -1);
        for ( let object = 0; object < fourByFourNotes.length; object++) {
            let musicNote = document.createElement('div');
            musicNote.className = 'game-object-4by4';
            let musicNoteSrc = shuffleNotesFourByFour[object]
            if ([object] < 16) { 
                fourByFourGrid.appendChild(musicNote);
            }musicNote.addEventListener('click', function() {
                musicNoteSrc.play()
                this.classList.add('change')
                if (userSelectionOne === null) {
                    userSelectionOne = fourByFourNotes[object].src
                    userSelectedObjectOne = this
                } else if (userSelectionTwo === null  && this !== userSelectedObjectOne) {
                    userSelectionTwo = fourByFourNotes[object].src
                    userSelectedObjectTwo = this
                    if (userSelectionOne === userSelectionTwo) {
                        userSelectedObjectOne.classList.add('vanish');
                        userSelectedObjectTwo.classList.add('vanish');
                        userSelectedObjectOne.classList.add('win')
                        userSelectedObjectTwo.classList.add('win')
                        increaseTimer();
                        userSelectionOne = null
                        userSelectionTwo = null

                        if(document.querySelectorAll('.win').length === fourByFourNotes.length) {
                            winDialog.showModal()
                            clearTimeout(timerId)
                            winButton.addEventListener('click', function()  {
                                winDialog.close();
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
        let shuffleNotesFiveByFive = fiveByFiveNotes.sort(() => (Math.random() > .5) ? 2 : -1);
        for ( let object = 0; object < fiveByFiveNotes.length; object++) {
            let musicNote = document.createElement('div');
            musicNote.className = 'game-object-5by5';
            let musicNoteSrc = shuffleNotesFiveByFive[object]
            fiveByFiveGrid.appendChild(musicNote);
            musicNote.addEventListener('click', function() {
                musicNoteSrc.play()
                this.classList.add('change')
                if (userSelectionOne === null) {
                    userSelectionOne = fiveByFiveNotes[object].src
                    userSelectedObjectOne = this
                } else if (userSelectionTwo === null  && this !== userSelectedObjectOne) {
                    userSelectionTwo = fiveByFiveNotes[object].src
                    userSelectedObjectTwo = this
                    if (userSelectionOne === userSelectionTwo) {
                        userSelectedObjectOne.classList.add('vanish');
                        userSelectedObjectTwo.classList.add('vanish');
                        userSelectedObjectOne.classList.add('win')
                        userSelectedObjectTwo.classList.add('win')
                        increaseTimer();
                        userSelectionOne = null
                        userSelectionTwo = null

                        if(document.querySelectorAll('.win').length === fiveByFiveNotes.length) {
                            winDialog.showModal()
                            clearTimeout(timerId)
                            winButton.addEventListener('click', function()  {
                                winDialog.close();
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
} 

function checkIfGameShouldStart() {
    if (startButton.classList == "button") {
        playGame();
    } else if (startButton.classList == "prevent"){
        return;
    }
}

/**********Event Listeners**********/
//forEach loop to iterate through the buttons and add an event listener and a function to each.
allTheButtons.forEach(button => button.addEventListener('click', difficultyButtons))
allTheButtons.forEach(button => button.addEventListener('touch', difficultyButtons))
//adds an event listener to the instructions button 
instructionButton.addEventListener('click', toggleInstructions)
instructionButton.addEventListener('touch', toggleInstructions)
//adds an event listener to the close button One
closeInstructionButtonOne.addEventListener('click', closeInstructions)
closeInstructionButtonOne.addEventListener('touch', closeInstructions)
//adds an event listener to the close button two
closeInstructionButtonTwo.addEventListener('click', closeInstructions)
closeInstructionButtonTwo.addEventListener('touch', closeInstructions)
//adds an event listener to the close button three
closeInstructionButtonThree.addEventListener('click', closeInstructions)
closeInstructionButtonThree.addEventListener('touch', closeInstructions)
//adds an event listener to the close button four
closeInstructionButtonFour.addEventListener('click', closeInstructions)
closeInstructionButtonFour.addEventListener('touch', closeInstructions)
//adds an event listener to the close button five
closeInstructionButtonFive.addEventListener('click', closeInstructions)
closeInstructionButtonFive.addEventListener('touch', closeInstructions)
//add an event listener to the start button
startButton.addEventListener('click', checkIfGameShouldStart)
startButton.addEventListener('touch', checkIfGameShouldStart)
//add an event listener to the restart button 
restartButton.addEventListener('click', restart)
restartButton.addEventListener('touch', restart)