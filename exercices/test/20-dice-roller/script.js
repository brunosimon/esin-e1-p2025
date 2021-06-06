const diceRoller = {}

diceRoller.containerElement = document.querySelector('.dice-roller')
diceRoller.dicesCountElement = diceRoller.containerElement.querySelector('.dices-count')
diceRoller.facesCountElement = diceRoller.containerElement.querySelector('.faces-count')
diceRoller.rollElement = diceRoller.containerElement.querySelector('.roll')
diceRoller.resultsElement = diceRoller.containerElement.querySelector('.results')
// diceRoller.soundElement = diceRoller.containerElement.querySelector('.sound')
diceRoller.soundElement = new Audio()
diceRoller.soundElement.src = './diceRollSound.mp3'

diceRoller.roll = () =>
{
    const dicesCount = diceRoller.dicesCountElement.value
    const facesCount = diceRoller.facesCountElement.value
    
    const rollElement = document.createElement('div')
    rollElement.classList.add('roll')
    diceRoller.resultsElement.prepend(rollElement)

    for(let i = 0; i < dicesCount; i++)
    {
        const randomValue = Math.floor(Math.random() * facesCount) + 1

        const diceElement = document.createElement('div')
        diceElement.classList.add('dice')
        diceElement.textContent = randomValue
        rollElement.append(diceElement)
    }

    diceRoller.soundElement.play()
}

diceRoller.rollElement.addEventListener('click', diceRoller.roll)