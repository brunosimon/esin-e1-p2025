const textContainer = document.querySelector('.text-container')
const text = textContainer.querySelector('.text')
const less = textContainer.querySelector('.less')
const more = textContainer.querySelector('.more')
const textStyle = window.getComputedStyle(text)
let fontSize = parseInt(textStyle.fontSize)

function increaseFontSize()
{
    fontSize++
    text.style.fontSize = fontSize + 'px'
}

function decreaseFontSize()
{
    fontSize--
    text.style.fontSize = fontSize + 'px'
}

more.addEventListener('click', increaseFontSize)
less.addEventListener('click', decreaseFontSize)

document.addEventListener('keydown', function(event)
{
    if(event.key == '+')
    {
        increaseFontSize()
    }
    else if(event.key == '-')
    {
        decreaseFontSize()
    }
})
