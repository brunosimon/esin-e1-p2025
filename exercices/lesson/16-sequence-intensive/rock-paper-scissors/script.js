const choices = document.querySelectorAll('.choice')
const myChoice = document.querySelector('.my-choice')
const computerChoice = document.querySelector('.computer-choice')

for(const choice of choices)
{
    choice.addEventListener('click', function()
    {
        myChoice.textContent = choice.textContent

        const randomChoiceIndex = Math.floor(Math.random() * choices.length)
        const randomChoice = choices[randomChoiceIndex]
        computerChoice.textContent = randomChoice.textContent
    })
}
