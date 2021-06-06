const choices = document.querySelectorAll('.choice')


const resetbutton = document.querySelector('.return')
console.log(resetbutton)
const buttons = document.querySelectorAll('.button')
const Pimage = document.querySelector('.Pimage')
const Cimage = document.querySelector('.Cimage')
const image = document.querySelector('.image')

const PscoreSpan = document.querySelector('.Pscore')
const CscoreSpan = document.querySelector('.Cscore')
let pScore = 0
let cScore = 0


for(const choice of choices)
{

    choice.addEventListener('click', function()
    {
        const Pchoice= choice.dataset.image
        Pimage.src= Pchoice + '.png'
        

        const randomChoiceIndex = Math.floor(Math.random() * choices.length)
        const randomChoice = choices[randomChoiceIndex]
        const Cchoice = randomChoice.dataset.image
        Cimage.src = Cchoice + '.png' 

        console.log(Pchoice, Cchoice)


        if(Pchoice == 'pierre')
        {
            if(Cchoice == 'papier')
            {
                cScore += 1
                console.log('computerworn')
            }
            else if(Cchoice == 'ciseaux')
            {
                pScore += 1
                console.log('computerlose')
            }
            else if(Cchoice == 'pierre')
            {
                console.log('égalité')
            }
        }

        
        if(Pchoice == 'ciseaux')
        {
            if(Cchoice == 'papier')
            {
                pScore += 1
                console.log('computerlose')
            }
            else if(Cchoice == 'pierre')
            {
                cScore += 1
                console.log('computerworn')
            }
            else if(Cchoice == 'ciseaux')
            {
                console.log('égalité')
            }
        }  

        
        if(Pchoice == 'papier')
        {
            if(Cchoice == 'ciseaux')
            {
                cScore += 1
                console.log('computerworn')
            }
            else if(Cchoice == 'pierre')
            {
                pScore += 1
                console.log('computerlose')
            }
            else if(Cchoice == 'papier')
            {
                console.log('égalité')
            }
        }

        PscoreSpan.textContent = pScore
        CscoreSpan.textContent = cScore




        

    })



    resetbutton.addEventListener('click', function()
    {

        
        PscoreSpan.textContent =pScore*0
        CscoreSpan.textContent =cScore*0

    })
}    