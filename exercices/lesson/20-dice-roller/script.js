const diceRoller = {}

diceRoller.containerElement = document.querySelector('.dice-roller')
diceRoller.buttonElement = diceRoller.containerElement.querySelector('.roll-button')
diceRoller.dicesCountElement = diceRoller.containerElement.querySelector('.dices-count')
diceRoller.facesCountElement = diceRoller.containerElement.querySelector('.faces-count')
diceRoller.historyElement = diceRoller.containerElement.querySelector('.history')

// // Method 1
// diceRoller.soundElement = diceRoller.containerElement.querySelector('.sound')

// // Method 2
// diceRoller.soundElement = document.createElement('audio')
// diceRoller.soundElement.setAttribute('src', './diceRollSound.mp3')

// // Method 3
// diceRoller.soundElement = new Audio()
// diceRoller.soundElement.src = './diceRollSound.mp3'

// // Method 4
// diceRoller.soundElement = new Audio('./diceRollSound.mp3')

diceRoller.roll = () =>
{
    const dicesCount = diceRoller.dicesCountElement.value
    const facesCount = diceRoller.facesCountElement.value

    const rollElement = document.createElement('div')
    rollElement.classList.add('roll')

    for(let i = 0; i < dicesCount; i++)
    {
        const randomValue = Math.ceil(Math.random() * facesCount)

        const diceElement = document.createElement('div')
        diceElement.textContent = randomValue
        diceElement.classList.add('dice')
        rollElement.appendChild(diceElement)
    }

    diceRoller.historyElement.prepend(rollElement)

    diceRoller.soundElement.play()
}

diceRoller.buttonElement.addEventListener('click', diceRoller.roll)