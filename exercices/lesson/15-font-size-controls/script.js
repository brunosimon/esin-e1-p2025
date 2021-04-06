const lessButton = document.querySelector('.font-size-less')
const moreButton = document.querySelector('.font-size-more')
const text = document.querySelector('.text')
let fontSize = 16

moreButton.addEventListener('click', () =>
{
    fontSize += 2
    text.style.fontSize = fontSize + 'px'
})

lessButton.addEventListener('click', () =>
{
    fontSize -= 2
    text.style.fontSize = fontSize + 'px'
})