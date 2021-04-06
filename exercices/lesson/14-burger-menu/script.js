const menuElement = document.querySelector('.menu')
const menuTriggerElement = document.querySelector('.menu-trigger')

menuTriggerElement.addEventListener('click', function()
{
    menuElement.classList.toggle('is-visible')
})

document.addEventListener('keydown', function(event)
{
    if(event.code == 'Escape')
    {
        menuElement.classList.remove('is-visible')
    }
})