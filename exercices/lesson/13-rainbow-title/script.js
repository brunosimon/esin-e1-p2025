const mainTitleElement = document.querySelector('.main-title')
let mainTitleHovered = false
const colors = ['#9932CC', '#8B008B', '#9400D3', '#4B0082', '#800080']

mainTitleElement.addEventListener('mouseenter', () =>
{
    mainTitleHovered = true
})

mainTitleElement.addEventListener('mouseleave', () =>
{
    mainTitleHovered = false
    mainTitleElement.style.color = null
})

window.setInterval(() =>
{
    if(mainTitleHovered)
    {
        const colorIndex = Math.floor(Math.random() * colors.length)
        const color = colors[colorIndex]
        mainTitleElement.style.color = color

        // const hue = Math.random() * 360
        // mainTitleElement.style.color = `hsl(${hue}deg, 100%, 50%)`
    }
}, 200)
