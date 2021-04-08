const ball = document.querySelector('.ball')
let ballX = 200
let ballY = 50
let ballSpeedX = 2
let ballSpeedY = 4
let isEscapeDown = false

const tick = () =>
{
    if(ballX > 400 - 20 || ballX < 0)
    {
        ballSpeedX *= - 1
    }
    if(ballY > 400 - 20 || ballY < 0)
    {
        ballSpeedY *= - 1
    }

    ballSpeedY += 0.3

    ballX += ballSpeedX
    ballY += ballSpeedY

    ball.style.transform = `translate(${ballX}px, ${ballY}px)`

    window.requestAnimationFrame(tick)
}

tick()