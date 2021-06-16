const playerElement = document.querySelector('.player')
let playerX = 0
let playerY = 0

document.addEventListener('keydown', (event) =>
{
    if(event.code == 'ArrowRight')
    {
        playerX += 10
    }
    else if(event.code == 'ArrowLeft')
    {
        playerX -= 10
    }
    else if(event.code == 'ArrowUp')
    {
        playerY -= 10
    }
    else if(event.code == 'ArrowDown')
    {
        playerY += 10
    }
    
    playerElement.style.transform = `translate(${playerX}px, ${playerY}px)`
})
