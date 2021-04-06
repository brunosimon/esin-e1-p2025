const menu = document.querySelector('.menu')
const menuTrigger = document.querySelector('.menu-trigger')

menuTrigger.addEventListener('click', () =>
{
    if(menu.classList.contains('is-visible'))
    {
        menu.classList.remove('is-visible')
    }
    else
    {
        menu.classList.add('is-visible')
    }
})

document.addEventListener('keydown', (event) =>
{
    if(event.code === 'Escape' && menu.classList.contains('is-visible'))
    {
        menu.classList.remove('is-visible')
    }
})