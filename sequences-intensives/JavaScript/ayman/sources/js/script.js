// DOM
const menuStart = document.querySelector('.menuStart')
const buttonLaunch = document.querySelector('.buttonLaunch')
let gameRunning = false
let IsMenuStartVisible = true
let gameIsVisible = false

let score = 0

let scorePlayer1 = 0
const scoreTextPlayer1 = document.querySelector('.score.player1')

let scorePlayer2 = 0
const scoreTextPlayer2 = document.querySelector('.score.player2')

let keyPressNumberPlayer1 = 0
let keyPressTextPlayer1 = document.querySelector('.keyPressNumber.player1')

let keyPressNumberPlayer2 = 0
let keyPressTextPlayer2 = document.querySelector('.keyPressNumber.player2')

const beamPlayer1 = document.querySelector('.beam.player1')
const beamPlayer2 = document.querySelector('.beam.player2')
const beam = document.querySelector('.beam')
const result = document.querySelector('.result')
const playerNumber = document.querySelector('.playerNumber')
const buttonNextRound = document.querySelector('.buttonNextRound')
const game = document.querySelector('.game')
const buttonReady = document.querySelector('.buttonReady')
const readyTimerIsVisible = document.querySelector('.readyTimerIsVisible')
let spritePlayer1 = document.querySelector('.spritePlayer1')
let spritePlayer2 = document.querySelector('.spritePlayer2')
let testSprite = 1
const gameFinish = document.querySelector('.gameFinish')
const spriteWin = document.querySelector('.spriteWin')
const buttonReload = document.querySelector('.buttonReload')
const titleReload = document.querySelector('.titleReload')

let levelPlayer1 = 1
let levelPlayer2 = 1



let canPlayPlayer1 = true
let canPlayPlayer2 = true

const timer = document.querySelector('.timer')
let counter = 3

let readyTimerReload = true


// BUTTON NEXT ROUND
buttonNextRound.addEventListener('click', (event) =>
{
    result.classList.toggle('resultIsVisible')
    score = 0
    readyTimerIsVisible.classList.toggle('readyTimerIsVisible')
    counter = 3
    timer.innerText = ''
    spritePlayer1.src = "./sources/images/sprites/goku/spriteGoku1.png"
    spritePlayer2.src = "./sources/images/sprites/vegeta/spriteVegeta1.png"
    spritePlayer1.style.width = "auto"
    spritePlayer1.style.height= "100%"
    spritePlayer2.style.width = "auto"
    spritePlayer2.style.height= "100%"

    const elems = document.querySelectorAll('.boostTouch');
    let index = 0, length = elems.length;
    for ( ; index < length; index++) 
    {
        elems[index].style.background = "#8a8a8a";
    }
    const boostA = document.querySelector('.boostA')
    boostA.style.background = "#7efc6df3";
    const boostP = document.querySelector('.boostP')
    boostP.style.background = "#7efc6df3";

    const player1Scale = (score + 200) / 200
    beamPlayer1.style.transform = `scaleX(${player1Scale})`

    const player2Scale = 2 - player1Scale
    beamPlayer2.style.transform = `scaleX(${player2Scale})`

})

// BUTTON READY
buttonReady.addEventListener('click', (event) =>
{
    const timerFunction = () =>
    {
        spritePlayer1.src = "./sources/images/sprites/goku/spriteGoku2.png"
        spritePlayer2.src = "./sources/images/sprites/vegeta/spriteVegeta2.png"
        timer.innerText = counter
        counter--
        if(counter == 0)
        {
            setTimeout(() => {
                beamPlayer1.classList.toggle('beamIsVisible')
                beamPlayer2.classList.toggle('beamIsVisible')
                spritePlayer1.src = "./sources/images/sprites/goku/spriteGoku3.png"
                spritePlayer2.src = "./sources/images/sprites/vegeta/spriteVegeta3.png"
                readyTimerIsVisible.classList.toggle('readyTimerIsVisible')
                clearInterval(timerTest)
                levelPlayer1 = 1
                levelPlayer2 = 1
            }, 1000);
        }
    }
    let timerTest = setInterval(timerFunction, 1000)
})

// BUTTON START
buttonLaunch.addEventListener('click', (event) =>
{
    menuStart.classList.toggle('menuStartIsVisible')
})

// BUTTON RELOAD
titleReload.addEventListener('click', (event) =>
{
    location.reload(true);
    console.log('ee')
})

buttonReload.addEventListener('click', (event) =>
{
    location.reload(true);
    console.log('ee')
})

// MAP
const bgEarth = document.querySelector('.bgEarth')
bgEarth.addEventListener('click', (event) =>
{
    const background = document.querySelector('.background')
    background.style.background = "url(./sources/images/bg/bgEarth.png)"
})

const bgKaio = document.querySelector('.bgKaio')
bgKaio.addEventListener('click', (event) =>
{
    const background = document.querySelector('.background')
    background.style.background = "url(./sources/images/bg/bgKaio.png)"
})

const bgSpace = document.querySelector('.bgSpace')
bgSpace.addEventListener('click', (event) =>
{
    const background = document.querySelector('.background')
    background.style.background = "url(./sources/images/bg/bgSpace.png)"
})

// GAME
document.addEventListener('keydown', (event) =>
{
    if(beam.classList.contains('beamIsVisible') && beam.classList.contains('beamIsVisible'))
    {
        gameRunning = true
    }

    if(gameRunning == false)
    {
        return
    }

    // PLAYER 1
    switch (event.code)
    {
        case 'KeyQ':
            if(canPlayPlayer1)
            {
                const value = 10 + scorePlayer2 * 5
                canPlayPlayer1 = false
                score += value
                keyPressNumberPlayer1++
                keyPressTextPlayer1.textContent = `Key press : ${keyPressNumberPlayer1} times`

            }
            break

        case 'KeyW':
            if(levelPlayer1 > 1 && canPlayPlayer1)
            {
                const value = 20 + scorePlayer2 * 5
                canPlayPlayer1 = false
                score += value
                keyPressNumberPlayer1++
                keyPressTextPlayer1.textContent = `Key press : ${keyPressNumberPlayer1} times`
            }
            break

        case 'KeyE':
            if(levelPlayer1 > 2 && canPlayPlayer1)
            {
                const value = 30 + scorePlayer2 * 5
                canPlayPlayer1 = false
                score += value
                keyPressNumberPlayer1++
                keyPressTextPlayer1.textContent = `Key press : ${keyPressNumberPlayer1} times`
            }
            break

        case 'KeyR':
            if(levelPlayer1 > 3 && canPlayPlayer1)
            {
                const value = 40 + scorePlayer2 * 5
                canPlayPlayer1 = false
                score += value
                keyPressNumberPlayer1++
                keyPressTextPlayer1.textContent = `Key press : ${keyPressNumberPlayer1} times`
            }
            break

        case 'KeyT':
            if(levelPlayer1 > 4 && canPlayPlayer1)
            {
                const value = 50 + scorePlayer2 * 5
                canPlayPlayer1 = false
                score += value
                keyPressNumberPlayer1++
                keyPressTextPlayer1.textContent = `Key press : ${keyPressNumberPlayer1} times`
            }
            break

        // PLAYER 2
        case 'KeyY':
            if(levelPlayer2 > 4 && canPlayPlayer2)
            {
                const value = 50 + scorePlayer1 * 5
                canPlayPlayer2 = false
                score -= value
                keyPressNumberPlayer2++
                keyPressTextPlayer2.textContent = `Key press : ${keyPressNumberPlayer2} times`
            }
            break

        case 'KeyU':
            if(levelPlayer2 > 3 && canPlayPlayer2)
            {
                const value = 40 + scorePlayer1 * 5
                canPlayPlayer2 = false
                score -= value
                keyPressNumberPlayer2++
                keyPressTextPlayer2.textContent = `Key press : ${keyPressNumberPlayer2} times`
            }
            break

        case 'KeyI':
            if(levelPlayer2 > 2 && canPlayPlayer2)
            {
                const value = 30 + scorePlayer1 * 5
                canPlayPlayer2 = false
                score -= value
                keyPressNumberPlayer2++
                keyPressTextPlayer2.textContent = `Key press : ${keyPressNumberPlayer2} times`
            }
            break

        case 'KeyO':
            if(levelPlayer2 > 1 && canPlayPlayer2)
            {
                const value = 20 + scorePlayer1 * 5
                canPlayPlayer2 = false
                score -= value
                keyPressNumberPlayer2++
                keyPressTextPlayer2.textContent = `Key press : ${keyPressNumberPlayer2} times`
            }
            break

        case 'KeyP':
            if(canPlayPlayer2)
            {
                const value = 10 + scorePlayer1 * 5
                canPlayPlayer2 = false
                score -= value
                keyPressNumberPlayer2++
                keyPressTextPlayer2.textContent = `Key press : ${keyPressNumberPlayer2} times`
            }
            break
    }

    score = Math.max(score, -200)
    score = Math.min(score, 200)

    if(score < -30 && levelPlayer1 == 1)
    {
        levelPlayer1++
        const boostZ = document.querySelector('.boostZ')
        boostZ.style.background = "#7efc6df3";
    }

    if(score < -60 && levelPlayer1 == 2)
    {
        levelPlayer1++
        const boostE = document.querySelector('.boostE')
        boostE.style.background = "#7efc6df3";
    }

    if(score < -90 && levelPlayer1 == 3)
    {
        levelPlayer1++
        const boostR = document.querySelector('.boostR')
        boostR.style.background = "#7efc6df3";
    }

    if(score < -120 && levelPlayer1 == 4)
    {
        levelPlayer1++
        const boostT = document.querySelector('.boostT')
        boostT.style.background = "#7efc6df3";
    }

    if(score > 30 && levelPlayer2 == 1)
    {
        levelPlayer2++
        const boostO = document.querySelector('.boostO')
        boostO.style.background = "#7efc6df3";
    }

    if(score > 60 && levelPlayer2 == 2)
    {
        levelPlayer2++
        const boostI = document.querySelector('.boostI')
        boostI.style.background = "#7efc6df3";
    }

    if(score > 90 && levelPlayer2 == 3)
    {
        levelPlayer2++
        const boostU = document.querySelector('.boostU')
        boostU.style.background = "#7efc6df3";
    }

    if(score > 120 && levelPlayer2 == 4)
    {
        levelPlayer2++
        const boostY = document.querySelector('.boostY')
        boostY.style.background = "#7efc6df3";
    }

    if(score > 150 && levelPlayer2 == 5)
    {
        levelPlayer2++
    }

    if(score == 200)
    {
        gameRunning = false
        result.classList.toggle('resultIsVisible')
        scorePlayer1++
        playerNumber.textContent = "Player 1 win the round !"
        scoreTextPlayer1.textContent = `Score : ${scorePlayer1}`
        spritePlayer1.src = "./sources/images/sprites/goku/spriteGokuWin.png"
        spritePlayer2.src = "./sources/images/sprites/vegeta/spriteVegetaLoose.png"
        spritePlayer2.style.width= "126px"
        spritePlayer2.style.height= "100px"
        beamPlayer1.classList.toggle('beamIsVisible')
        beamPlayer2.classList.toggle('beamIsVisible')
    }

    else if(score == -200)
    {
        gameRunning = false
        result.classList.toggle('resultIsVisible')
        playerNumber.textContent = "Player 2 win the round !"
        scorePlayer2++
        scoreTextPlayer2.textContent = `Score : ${scorePlayer2}`
        spritePlayer2.src = "./sources/images/sprites/vegeta/spriteVegetaWin.png"
        spritePlayer1.src = "./sources/images/sprites/goku/spriteGokuLoose.png"
        spritePlayer1.style.width= "100px"
        spritePlayer1.style.height= "105px"
        beamPlayer1.classList.toggle('beamIsVisible')
        beamPlayer2.classList.toggle('beamIsVisible')
    }

    const player1Scale = (score + 200) / 200
    beamPlayer1.style.transform = `scaleX(${player1Scale})`

    const player2Scale = 2 - player1Scale
    beamPlayer2.style.transform = `scaleX(${player2Scale})`

    if(scorePlayer1 == 3)
    {
        gameFinish.classList.toggle('gameFinishIsVisible')
        spritePlayer1.style.opacity= "0"
        spritePlayer2.style.opacity= "0"
        spriteWin.src = "./sources/images/sprites/goku/spriteGokuWinGame.png"
        result.classList.toggle('resultIsVisible')
        const playerWin = document.querySelector('.playerWin')
        playerWin.textContent = "Player 1 win the Game, GG !"
    }

    if(scorePlayer2 == 3)
    {
        gameFinish.classList.toggle('gameFinishIsVisible')
        spritePlayer1.style.opacity= "0"
        spritePlayer2.style.opacity= "0"
        spriteWin.src = "./sources/images/sprites/vegeta/spriteVegetaWinGame.png"
        result.classList.toggle('resultIsVisible')
        const playerWin = document.querySelector('.playerWin')
        playerWin.textContent = "Player 2 win the Game, GG !"
    }
})

document.addEventListener('keyup', (event) =>
{
    switch(event.code)
    {
        case 'KeyQ':
        case 'KeyW':
        case 'KeyE':
        case 'KeyR':
        case 'KeyT':
            canPlayPlayer1 = true
            break

        case 'KeyY':
        case 'KeyU':
        case 'KeyI':
        case 'KeyO':
        case 'KeyP':
            canPlayPlayer2 = true
            break
    }

})
