const buttons = document.querySelectorAll('.button')
const image = document.querySelector('.image')

for(const button of buttons)
{
    button.addEventListener('click', () =>
    {
        const color = button.dataset.color
        image.setAttribute('src', `${color}.png`)
    })
}
