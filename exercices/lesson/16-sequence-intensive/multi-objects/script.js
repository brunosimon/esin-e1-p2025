const game = document.querySelector('.game')
const projectiles = []

function addProjectile()
{
    const projectile = {}

    projectile.x = 0
    projectile.y = 0
    
    projectile.speedX = Math.random()
    projectile.speedY = Math.random()

    projectile.element = document.createElement('div')
    projectile.element.classList.add('projectile')
    game.append(projectile.element)

    projectiles.push(projectile)
}

window.setInterval(addProjectile, 500)

function tick()
{
    for(const projectile of projectiles)
    {
        projectile.x += projectile.speedX
        projectile.y += projectile.speedY

        projectile.element.style.transform = `translate(${projectile.x}px, ${projectile.y}px)`
    }

    window.requestAnimationFrame(tick)
}
tick()