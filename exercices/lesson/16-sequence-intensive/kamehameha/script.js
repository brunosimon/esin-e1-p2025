const score = - 50
const beamPlayer1 = document.querySelector('.beam.player-1')
const beamPlayer2 = document.querySelector('.beam.player-2')

const player1Scale = (score + 100) / 100
beamPlayer1.style.transform = `scaleX(${player1Scale})`

const player2Scale = 2 - player1Scale
beamPlayer2.style.transform = `scaleX(${player2Scale})`

// Score va de - 100 à + 100
// Scale va de 0 à 2