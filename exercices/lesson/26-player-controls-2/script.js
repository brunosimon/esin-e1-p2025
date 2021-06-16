const playerElement = document.querySelector('.player')

const position = {
    x: 0,
    y: 0
}

const keysDown = {
    up: false,
    right: false,
    down: false,
    left: false
}

const speed = 4
let scaleX = - 1

window.addEventListener('keydown', (event) =>
{
    if(event.code == 'ArrowUp')
        keysDown.up = true

    if(event.code == 'ArrowRight')
    {
        keysDown.right = true
        scaleX = - 1
    }

    if(event.code == 'ArrowDown')
        keysDown.down = true

    if(event.code == 'ArrowLeft')
    {
        keysDown.left = true
        scaleX = 1
    }
})

window.addEventListener('keyup', (event) =>
{
    if(event.code == 'ArrowUp')
        keysDown.up = false

    if(event.code == 'ArrowRight')
        keysDown.right = false

    if(event.code == 'ArrowDown')
        keysDown.down = false

    if(event.code == 'ArrowLeft')
        keysDown.left = false
})

const tick = () =>
{
    // Position
    if(keysDown.up)
        position.y -= speed

    if(keysDown.right)
        position.x += speed

    if(keysDown.down)
        position.y += speed

    if(keysDown.left)
        position.x -= speed

    // Update
    playerElement.style.transform = `translate(${position.x}px, ${position.y}px) scaleX(${scaleX})`

    window.requestAnimationFrame(tick)
}

tick()