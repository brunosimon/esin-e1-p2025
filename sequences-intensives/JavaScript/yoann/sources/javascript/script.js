const body = document.body
const gameOverBox = document.querySelector('.game-over-box')
const buttonReplay = document.querySelector('.button-replay')
const game = document.querySelector('.game')
const player = document.querySelector('.player')
const timerElement = document.querySelector('.timer')
const nextLevelBox = document.querySelector('.next-level-box')
const buttonNext = document.querySelector('.button-next')
const levelName = document.querySelector('.subtitle')
const winnerBox =document.querySelector('.winner-box')
const buttonWin =document.querySelector('.button-win')
const playerXSpeed = 2
const playerXBoost = 20

let gameRunning = true
let playerX = 0
let playerY = 0
let rightArrowDown = false
let leftArrowDown = false
let shiftDown = false
let numberCounter = 7
let counter = numberCounter
let projectiles = []
let level = 1
let enterDown = false

// SURVEY KEYDOWN
document.addEventListener('keydown', (event) =>
{
    if(event.code == 'ArrowRight')
    {
        rightArrowDown = true
    }

    else if(event.code == 'ArrowLeft')
    {
        leftArrowDown = true
    }

    else if(event.key == 'Shift')
    {
        shiftDown = true
    }
})

// SURVEY KEYUP
document.addEventListener('keyup', (event) =>
{
    if(event.code == 'ArrowRight')
    {
        rightArrowDown = false
    }

    else if(event.code == 'ArrowLeft')
    {
        leftArrowDown = false
    }

    else if(event.key == 'Shift')
    {
        shiftDown = false
    }
})

// ADD PROJECTILE IN OBJECT
function addProjectile()
{
    const projectile = {}

    projectile.x = Math.floor(Math.random() * (game.offsetWidth - player.offsetWidth))
    projectile.y = Math.random()

    projectile.speedX = 0
    projectile.speedY = 1

    projectile.element = document.createElement('div')
    // CHANGE THE PROJETILE WITH LEVEL NUMBER
    projectile.element.classList.add(`projectile-${level}`)
    game.append(projectile.element)

    projectiles.push(projectile)
}

// CALL "ADDPROJECTILE" FUNCTION
let projectileInterval = window.setInterval(addProjectile, 1000)
// window.setInterval(addProjectile, 1000)


const tick = () =>
{
    if(gameRunning)
    {
        // MANAGE PLAYER MOVE
        if(rightArrowDown)
        {
            if(shiftDown)
            {
                playerX += playerXBoost
                player.classList.remove('player-back')
                player.classList.add('player')
            }
            else
            {
                playerX += playerXSpeed
                player.classList.remove('player-back')
                player.classList.add('player')
            }
        }

        if(leftArrowDown)
        {
            if(shiftDown)
            {
                playerX -= playerXBoost
                player.classList.remove('player')
                player.classList.add('player-back')
            }
            else
            {
                playerX -= playerXSpeed
                player.classList.remove('player')
                player.classList.add('player-back')
            }
        }

        if(playerX < 0)
        {
            playerX = 0
        }

        if(playerX > game.offsetWidth - player.offsetWidth)
        {
            playerX = game.offsetWidth - player.offsetWidth
        }
        
        // MANAGE PROJECTILE MOVE
        let i = 0
        for(const projectile of projectiles)
        {
            projectile.x += projectile.speedX
            projectile.y += projectile.speedY
            
            projectile.element.style.transform = `translate(${projectile.x}px, ${projectile.y}px)`
            
            if(projectile.y > game.offsetHeight - projectile.element.clientHeight)
            {
                projectile.element.remove()
                projectiles.splice(i, 1)
            }
            
            // if(projectile.x > playerX - 5 && projectile.x < playerX + 40 && projectile.y > 360)
            if(projectile.x >(playerX - projectile.element.clientWidth) && projectile.x < (playerX + player.offsetHeight) && projectile.y > (game.offsetHeight - player.offsetHeight - 35))
            {
                gameOverBox.classList.add('visible')
                gameRunning = false
                clearInterval(timer)
                clearInterval(projectileInterval)
                projectile.element.remove()
                projectiles.splice(i, 1)
            }
            i++
        }
    }
    player.style.transform = `translateX(${playerX}px)`
    window.requestAnimationFrame(tick)
}
tick()

// MANAGE CLICK REPLAY BUTTON
buttonReplay.addEventListener('click', (event) =>
{
    gameOverBox.classList.remove('visible')
    gameRunning = true
    level = 1
    levelName.textContent = `level : ${level}`
    game.style.background = `no-repeat url('./sources/images/pixel-1.jpg')`
    game.style.backgroundSize = 'cover'

    // Remove all projectiles and empty array
    for(const projective of projectiles)
    {
        projective.element.remove()
    }
    projectiles = []

    counter = numberCounter
    timerElement.textContent = counter

    timer = setInterval(timerCallback , 1000)
    projectileInterval = window.setInterval(addProjectile, 1000)
})

// MANAGE TIMER AND ACTIONS
const timerCallback = () =>
{
    timerElement.textContent = counter 
    counter--
    if(counter == 0)
    {
            nextLevelBox.classList.add('visible')
            gameRunning = false
            timerElement.textContent = `it's over`
            clearInterval(timer)
            clearInterval(projectileInterval)
    }
    if(counter == 0 && level == 10)
    {
        nextLevelBox.classList.remove('visible')
        gameOverBox.classList.remove('visible')
        winnerBox.classList.add('visible')
        buttonWin.addEventListener('click', () =>
        {
            winnerBox.classList.remove('visible')
            gameRunning = true
            level = 1
            levelName.textContent = `level : ${level}`
            game.style.background = `no-repeat url('./sources/images/pixel-1.jpg')`
            game.style.backgroundSize = 'cover'

            // Remove all projectiles and empty array
            for(const projective of projectiles)
            {
                projective.element.remove()
            }
            projectiles = []
            counter = numberCounter
            timerElement.textContent = counter
            timer = setInterval(timerCallback , 1000)
            projectileInterval = window.setInterval(addProjectile, 1000)
        })
    }
}
let timer = setInterval(timerCallback , 1000)


// MANAGE NEXT LEVELS AND ACTIONS
buttonNext.addEventListener('click', () =>
{
    nextLevelBox.classList.remove('visible')
    gameRunning = true
    
    // Remove all projectiles and empty array
    for(const projective of projectiles)
    {
        projective.element.remove()
    }
    projectiles = []

    timer = setInterval(timerCallback , 1000)
    counter = numberCounter
    timerElement.textContent = counter
    level++
    levelName.textContent = `level : ${level}`


    if(level == 1)
    {
        game.style.background = `no-repeat url('./sources/images/pixel-${level}.jpg')`
        game.style.backgroundSize = 'cover'
        projectileInterval = window.setInterval(addProjectile, 1000)
        console.log(level)
    }
    if(level == 2)
    {
        game.style.background = `no-repeat url('./sources/images/pixel-${level}.jpg')`
        game.style.backgroundSize = 'cover'
        projectileInterval = window.setInterval(addProjectile, 900)
    }
    if(level == 3)
    {
        game.style.background = `no-repeat url('./sources/images/pixel-${level}.jpg')`
        game.style.backgroundSize = 'cover'
        projectileInterval = window.setInterval(addProjectile, 800)
    }
    if(level == 4)
    {
        game.style.background = `no-repeat url('./sources/images/pixel-${level}.jpg')`
        game.style.backgroundSize = 'cover'
        projectileInterval = window.setInterval(addProjectile, 700)
    }
    if(level == 5)
    {
        game.style.background = `no-repeat url('./sources/images/pixel-${level}.jpg')`
        game.style.backgroundSize = 'cover'
        projectileInterval = window.setInterval(addProjectile, 600)
    }
    if(level == 6)
    {
        game.style.background = `no-repeat url('./sources/images/pixel-${level}.jpg')`
        game.style.backgroundSize = 'cover'
        projectileInterval = window.setInterval(addProjectile, 500)
    }
    if(level == 7)
    {
        game.style.background = `no-repeat url('./sources/images/pixel-${level}.jpg')`
        game.style.backgroundSize = 'cover'
        projectileInterval = window.setInterval(addProjectile, 400)
    }
    if(level == 8)
    {
        game.style.background = `no-repeat url('./sources/images/pixel-${level}.jpg')`
        game.style.backgroundSize = 'cover'
        projectileInterval = window.setInterval(addProjectile, 300)
    }
    if(level == 9)
    {
        game.style.background = `no-repeat url('./sources/images/pixel-${level}.jpg')`
        game.style.backgroundSize = 'cover'
        projectileInterval = window.setInterval(addProjectile, 200)
    }
    if(level == 10 )
    {
        game.style.background = `no-repeat url('./sources/images/pixel-${level}.jpg')`
        game.style.backgroundSize = 'cover'
        projectileInterval = window.setInterval(addProjectile, 100)
    }
})

