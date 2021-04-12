const game = document.querySelector('.game')

for(let i = 0; i < 10; i++)
{
    const target = document.createElement('div')
    target.classList.add('target')
    target.style.top = Math.random() * 100 + '%'
    target.style.left = Math.random() * 100 + '%'

    target.addEventListener('mouseenter', () =>
    {
        target.remove()
    })

    game.append(target)
}