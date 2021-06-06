// alert('Ready To play !?')
// Le jeu se lance automatiquement, en raison de clearInterval, j'ai dû rajouter un alert pour pouvoir en faire la démo 

const game = document.querySelector('.game')
let gameRunning = true

// The sound
const gameSound = document.querySelector('.play-sound')
const sound = document.querySelector('.audio-1')

// Pause game
let playPauseButton = document.querySelector('.pause')


// The state of score
let score1Element = document.querySelector('.first')
let score2Element = document.querySelector('.second')
let marks1 = 0
let marks2 = 0

// Player 1
const playerOne = document.querySelector('.player-1')
let playerOneX = 250
let playerOneY = 0
let rightArrowDown = false
let leftArrowDown = false

// Player 2
const playerTwo = document.querySelector('.player-2')
let playerTwoX = 250
let playerTwoY = 0
let aKeyDown = false
let dKeyDown = false

// The ball
const ball = document.querySelector('.ball')
const ballSound = document.querySelector('.audio-2')
const Lose = document.querySelector('.audio-3')
let ballX = 300
let ballY = 300
let ballSpeedX = Math.random() * 1 + 2
let ballSpeedY = Math.random() * 1 + 2

// Restart button
const buttonReplay = document.querySelector('.replay')

// The count down
let timerElement = document.querySelector('.timer')
let counter = 5

let timer = setInterval(function()
{
    timerElement.textContent = counter
    counter--
    if(counter == 0)
    {
        clearInterval(timer) 
        setTimeout(function()
        {
            timerElement.remove()
            timerElement.textContent = 'GO'
        }, 1000)
    }
}, 1000)

// The stars
for(let i = 0; i < 250; i++)
{
    const star = document.createElement('div')
    star.classList.add('star')
    if(i % 3 == 0)
    {
        star.classList.add('red')
    }
    else if(i % 3 == 1)
    {
        star.classList.add('blue')
    }
    else if(i % 3 == 2)
    {
        star.classList.add('purple')
    }

    star.style.top = Math.random() * 100 + '%'
    star.style.left = Math.random() * 100 + '%'

    game.append(star)
}

// Key down events
document.addEventListener('keydown', (event) =>
{
    // Player 1
    if(event.code == 'ArrowRight')
    {
        rightArrowDown = true
    }
    else if(event.code == 'ArrowLeft')
    {
        leftArrowDown = true
    }
    // Player 2
    if(event.key == 'd')
    {
        dKeyDown = true
    }
    else if(event.key == 'q')
    {
        aKeyDown = true
    }
})

// Keyup events
document.addEventListener('keyup', (event) =>
{
    // Player 1
    if(event.code == 'ArrowRight')
    {
        rightArrowDown = false
    }
    if(event.code == 'ArrowLeft')
    {
        leftArrowDown = false
    }
    // Player 2
    if(event.key == 'd')
    {
        dKeyDown = false
    }
    if(event.key == 'q')
    {
        aKeyDown = false
    }
})

// On clik event
playPauseButton.addEventListener('click', (event) =>
{
    if(gameRunning = true)
    {
        gameRunning = false
    }
})

gameSound.addEventListener('click', () =>
{
    if(sound.play)
    [
        sound.play = false
    ]
})

// Tick
const tick = () =>
{
    if(gameRunning)
    {
        // Player 1
        if(rightArrowDown)
        {
            playerOneX += 15
        }
        if(leftArrowDown)
        {
            playerOneX -= 15
        }
        if(playerOneX < 0)
        {
            playerOneX = 0
        }
        if(playerOneX > 600 - 100)
        {
            playerOneX = 600 - 100
        }

        playerOne.style.transform = `translateX(${playerOneX}px)`

        // Player 2
        if(dKeyDown)
        {
            playerTwoX += 15
        }
        if(aKeyDown)
        {
            playerTwoX -= 15
        }
        if(playerTwoX < 0)
        {
            playerTwoX = 0
        }
        if(playerTwoX > 600 - 100)
        {
            playerTwoX = 600 - 100
        }

        playerTwo.style.transform = `translateX(${playerTwoX}px)`

        // Ball
        if(ballX < 0 || ballX > 580)
        {
            ballSpeedX *= - 1.01
            ballSound.play()
        }

        if(ballY > 580)
        {
            if(ballX > playerOneX + 1 && ballX < playerOneX + 101)
            {
                ballSpeedY *= - 1.1
                ballSound.play()
            }
            else
            {
                ballX = 300
                ballY = 300
                ballSpeedX = Math.random() * 2 + 2
                ballSpeedY = Math.random() * 2 + 2
                score2Element.textContent = marks2
                marks2 ++
                buttonReplay.classList.add('is-visible')
                gameRunning = false
                Lose.play()
            }
        }

        if(ballY < 10)
        {
            if(ballX > playerTwoX + 1 && ballX < playerTwoX + 101)
            {
                ballSpeedY *= - 1.1
                ballSound.play()
            }
            else
            {
                ballX = 300
                ballY = 300
                ballSpeedX = Math.random() * 2 + 2
                ballSpeedY = Math.random() * 2 + 2
                score1Element.textContent = marks1
                marks1 ++
                buttonReplay.classList.add('is-visible')
                gameRunning = false
                Lose.play()
        }
    }

    ballX += ballSpeedX
    ballY += ballSpeedY

    ball.style.transform = `translate(${ballX}px, ${ballY}px)`

    // Continue ticking
    window.requestAnimationFrame(tick)
    }
}
tick()

buttonReplay.addEventListener('click', (event) =>
{
    if(gameRunning = false)
    {
        gameRunning = true
    }
    buttonReplay.classList.remove('is-visible')
})


// Après reflexion, les timer a du être remove ; car le jeu se relançait automatiquement, et ça reste là le principale problème du jeu
// j'ai aussi essayé de mettre un boutton pause avec la space bar, mais ça fesais planter tout le jeu, j'ai du complètement l'enlever.