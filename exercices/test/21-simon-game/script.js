/**
 * Set up
 */
// Elements
const $container = document.querySelector('.simon-game')
const $pads = $container.querySelectorAll('.pad')
const $message = $container.querySelector('.message')
const $start = $container.querySelector('.message.start')

// Variables
let sequence = []
let playerTurn = false
let playerIndex = 0
let messageTimeout = null

// Sounds
const sounds = [
    new Audio('./sounds/clap.mp3'),
    new Audio('./sounds/hi-hat.mp3'),
    new Audio('./sounds/kick.mp3'),
    new Audio('./sounds/snare.mp3')
]

/**
 * Show message method
 */
const showMessage = (message) =>
{
    $message.textContent = message
    $message.style.display = 'block'

    window.clearTimeout(messageTimeout)

    messageTimeout = window.setTimeout(() =>
    {
        $message.style.display = 'none'
    }, 1000)
}

/**
 * Activate pad method
 */
const activatePad = (padIndex) =>
{
    const $pad = $pads[padIndex]

    // Update classes
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
    // Add random from 0 to 3
    sequence.push(Math.floor(Math.random() * 4))

    // Start interval with index at 0
    let index = 0
    const interval = window.setInterval(() =>
    {
        // Find pad
        const padIndex = sequence[index]
        activatePad(padIndex)

        // Increment
        index++

        // Stop
        if(index >= sequence.length)
        {
            window.clearInterval(interval)

            // Wait a little and start player turn
            window.setTimeout(() =>
            {
                showMessage('Your turn')

                playerTurn = true
                playerIndex = 0
            }, 800)
        }
    }, 1000)
}

/**
 * Win method
 */
const win = () =>
{
    playerTurn = false
    
    showMessage('Good job')

    addAndPlaySequence()
}

/**
 * Loose method
 */
const loose = () =>
{
    playerTurn = false
    
    showMessage('You loose!')

    window.setTimeout(() =>
    {
        sequence = []
        addAndPlaySequence()
    }, 1000)
}

/**
 * 
 * Player pad press method
 */
const playerPadPress = (playerPadIndex) =>
{
    // Not player turn
    if(!playerTurn)
    {
        return
    }

    // Activate pad
    activatePad(playerPadIndex)

    // Test and compare pad pressed to sequence
    const sequencePadIndex = sequence[playerIndex]

    if(playerPadIndex != sequencePadIndex)
    {
        loose()
    }
    else
    {
        if(playerIndex == sequence.length - 1)
        {
            win()
        }
    }

    playerIndex++
}

/**
 * Event listening
 */
for(const $pad of $pads)
{
    $pad.addEventListener('mousedown', () =>
    {
        playerPadPress(parseInt($pad.dataset.index))
    })
}

window.addEventListener('keydown', (event) =>
{
    switch(event.code)
    {
        case 'ArrowUp':
            playerPadPress(0)
            break
        case 'ArrowRight':
            playerPadPress(1)
            break
        case 'ArrowDown':
            playerPadPress(2)
            break
        case 'ArrowLeft':
            playerPadPress(3)
            break
    }
})

/**
 * Start
 */
$start.addEventListener('click', () =>
{
    $start.remove()
    addAndPlaySequence()
})