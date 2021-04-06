const player = document.querySelector('.player')
let playerX = 0
let rightArrowDown = false
let leftArrowDown = false

document.addEventListener('keydown', (event) =>
{
    if(event.code == 'ArrowRight')
    {
        rightArrowDown = true
    }
    if(event.code == 'ArrowLeft')
    {
        leftArrowDown = true
    }
})

document.addEventListener('keyup', (event) =>
{
    if(event.code == 'ArrowRight')
    {
        rightArrowDown = false
    }
    if(event.code == 'ArrowLeft')
    {
        leftArrowDown = false
    }
})

const tick = () =>
{
    if(rightArrowDown)
    {
        playerX += 10
    }
    if(leftArrowDown)
    {
        playerX -= 10
    }

    if(playerX < 0)
    {
        playerX = 0
    }
    if(playerX > 400 - 60)
    {
        playerX = 400 - 60
    }

    player.style.transform = `translateX(${playerX}px)`

    window.requestAnimationFrame(tick)
}

tick()