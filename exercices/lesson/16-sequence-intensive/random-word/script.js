const words = ['casually', 'mad', 'box', 'a', 'b', 'c', 'd']
const button = document.querySelector('.button')
const word = document.querySelector('.word')

button.addEventListener('click', function()
{
    const randomIndex = Math.round(Math.random() * (words.length - 1))
    const randomWord = words[randomIndex]
    
    word.textContent = randomWord
})