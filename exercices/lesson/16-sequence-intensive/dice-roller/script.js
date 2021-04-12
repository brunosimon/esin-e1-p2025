const throwButton = document.querySelector('.throw')
const countInput = document.querySelector('.count')
const facesCountInput = document.querySelector('.facesCount')
const result = document.querySelector('.result')

throwButton.addEventListener('click', () =>
{
    const count = countInput.value
    const facesCount = facesCountInput.value

    result.innerHTML = ''

    for(let i = 0; i < count; i++)
    {
        const dice = document.createElement('div')
        const diceValue = Math.ceil(Math.random() * facesCount)
        dice.classList.add('dice')
        dice.classList.add('face-' + diceValue)

        if(diceValue > 6)
        {
            dice.textContent = diceValue
        }
        result.append(dice)
    }
})