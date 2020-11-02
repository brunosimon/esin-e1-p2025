const title = document.querySelector('.title')
let isTitleHover = false

title.addEventListener('mouseenter', function()
{
    isTitleHover = true
})

title.addEventListener('mouseleave', function()
{
    isTitleHover = false
})

window.setInterval(function()
{
    if(isTitleHover)
    {
        const randomHue = Math.random() * 360
        title.style.color = `hsl(${randomHue}deg, 100%, 50%)`
    }
}, 100)
