const wordElement = document.querySelector('.word')
const letterElement = document.querySelector('.letter')
const word = 'musique'

wordElement.textContent = word

document.addEventListener('keydown', (event) =>
{
    const letter = event.key
    letterElement.textContent = letter
    
    const index = word.indexOf(letter)
    
    if(index == -1)
    {
        console.log('pas trouvé')
    }
    else
    {
        console.log('trouvé')
    }
})