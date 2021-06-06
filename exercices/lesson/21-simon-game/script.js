/**
 * Setup
 */
// Elements
const $container = document.querySelector('.simon-game')
const $pads = $container.querySelectorAll('.pad')
const $message = $container.querySelector('.message')
const $start = $container.querySelector('.start')

// Sounds
const sounds = [
    new Audio('sounds/clap.mp3'),
    new Audio('sounds/hi-hat.mp3'),
    new Audio('sounds/kick.mp3'),
    new Audio('sounds/snare.mp3')
]

// Variables
let sequence = []
let playerIndex = 0
let playerTurn = false
let messageTimeout = null

/**
 * Show message and hide it a bit after
 */
const showMessage = (message) =>
{
    $message.classList.add('active')
    $message.textContent = message

    window.clearTimeout(messageTimeout)

    messageTimeout = window.setTimeout(() =>
    {
        $message.classList.remove('active')
    }, 1000)
}

/**
 * Activate pad method
 */
const activatePad = (padIndex) =>
{
    // Update class
    const $pad = $pads[padIndex]
    $pad.classList.add('active')

    window.setTimeout(() =>
    {
        $pad.classList.remove('active')
    }, 500)

    // Play sound
    const sound = sounds[padIndex]
    sound.currentTime = 0
    sound.play()
}

/**
 * Add and play sequence
 */
const addAndPlaySequence = () =>
{
    const randomPadIndex = Math.floor(Math.random() * 4)
    sequence.push(randomPadIndex)

    let padIndex = 0
    const intervalId = window.setInterval(() =>
    {
        activatePad(sequence[padIndex])

        padIndex++

        // Sequence ended
        if(padIndex == sequence.length)
        {
            window.clearInterval(intervalId)

            window.setTimeout(() =>
            {
                playerTurn = true

                showMessage('Your turn')
            }, 1000)
        }
    }, 1000)
}

/**
 * Loose
 */
const loose = () =>
{
    showMessage('You loose!')
    playerIndex = 0
    playerTurn = false
    sequence = []

    window.setTimeout(() =>
    {
        addAndPlaySequence()
    }, 2000)
}

/**
 * Win
 */
const win = () =>
{
    showMessage('You win!')
    playerIndex = 0
    playerTurn = false
    addAndPlaySequence()
} 

/**
 * Player pad press
 */
const playerPadPress = (padIndex) =>
{
    // Not player's turn
    if(!playerTurn)
    {
        return
    }

    // Good pad
    if(padIndex == sequence[playerIndex])
    {
        // Sequence over
        if(playerIndex == sequence.length - 1)
        {
            win()
        }

        // Sequence not over
        else
        {
            playerIndex++
        }
    }

    // Wrong pad
    else
    {
        loose()
    }

    activatePad(padIndex)
}

/**
 * Start
 */
const start = () =>
{
    // Hide start button
    $start.remove()

    // Listen to click on pads
    for(const $pad of $pads)
    {
        $pad.addEventListener('mousedown', () =>
        {
            const padIndex = $pad.dataset.padIndex
            playerPadPress(padIndex)
        })
    }

    // Listen to keyboard events
    document.addEventListener('keydown', (event) =>
    {
        if(event.key == 'ArrowUp')
        {
            playerPadPress(0)
        }
        else if(event.key == 'ArrowRight')
        {
            playerPadPress(1)
        }
        else if(event.key == 'ArrowDown')
        {
            playerPadPress(2)
        }
        else if(event.key == 'ArrowLeft')
        {
            playerPadPress(3)
        }
    })

    // Add first pad to sequence and play it
    addAndPlaySequence()
}

$start.addEventListener('click', start)

// Listen to keyboard events
document.addEventListener('keydown', (event) =>
{
    if(event.key == 'Enter')
    {
        start()
    }
})