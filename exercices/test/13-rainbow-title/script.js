const mainTitle = document.querySelector('.main-title')
let mainTitleHovered = false
// const colors = ['red', 'orange', 'yellow']
const colors = ['purple', 'blue', 'cyan']

mainTitle.addEventListener('mouseenter', () =>
{
    mainTitleHovered = true
})

mainTitle.addEventListener('mouseleave', () =>
{
    mainTitleHovered = false
    mainTitle.style.color = null
})

window.setInterval(() =>
{
    if(mainTitleHovered)
    {
        const randomIndex = Math.floor(Math.random() * colors.length)
        const randomColor = colors[randomIndex]
        mainTitle.style.color = randomColor
        
        // const red = Math.random() * 255
        // const green = Math.random() * 255
        // const blue = Math.random() * 255
        // mainTitle.style.color = `rgb(${red}, ${green}, ${blue})`
    }
}, 100)