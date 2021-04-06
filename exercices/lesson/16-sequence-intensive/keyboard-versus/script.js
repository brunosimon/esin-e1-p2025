let player1Score = 0
const player1ScoreElement = document.querySelector('.player-1 .score')

let player2Score = 0
const player2ScoreElement = document.querySelector('.player-2 .score')

document.addEventListener('keydown', function(event)
{
    if(event.key == 'q')
    {
        player1Score++
        player1ScoreElement.textContent = player1Score
    }

    if(event.key == 'm')
    {
        player2Score++
        player2ScoreElement.textContent = player2Score
    }

    if(player1Score > player2Score)
    {
        console.log('Joueur 1 gagne!')
    }
    else if(player2Score > player1Score)
    {
        console.log('Joueur 2 gagne!')
    }
    else
    {
        console.log('Égalité')
    }
})