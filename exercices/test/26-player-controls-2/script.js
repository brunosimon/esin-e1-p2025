const player = document.querySelector('.player')
const position = {}
position.x = 0
position.y = 0

const keysDown = {}
keysDown.up = false
keysDown.right = false
keysDown.down = false
keysDown.left = false

const speed = 4

window.addEventListener('keydown', (event) =>
{
    if(event.code === 'ArrowUp')
        keysDown.up = true
    else if(event.code === 'ArrowRight')
        keysDown.right = true
    else if(event.code === 'ArrowDown')
        keysDown.down = true
    else if(event.code === 'ArrowLeft')
        keysDown.left = true
})

window.addEventListener('keyup', (event) =>
{
    if(event.code === 'ArrowUp')
        keysDown.up = false
    else if(event.code === 'ArrowRight')
        keysDown.right = false
    else if(event.code === 'ArrowDown')
        keysDown.down = false
    else if(event.code === 'ArrowLeft')
        keysDown.left = false
})

const tick = () =>
{
    if(keysDown.up)
        position.y -= speed
    if(keysDown.right)
        position.x += speed
    if(keysDown.down)
        position.y += speed
    if(keysDown.left)
        position.x -= speed

    player.style.transform = `translate(${position.x}px, ${position.y}px)`

    window.requestAnimationFrame(tick)
}

tick()