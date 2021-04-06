const sizeLess = document.querySelector('.size-less')
const sizeMore = document.querySelector('.size-more')
const text = document.querySelector('.text')
let fontSize = 18

sizeMore.addEventListener('click', () =>
{
    fontSize += 2

    if(fontSize > 30)
    {
        fontSize = 30
    }

    text.style.fontSize = `${fontSize}px`
})

sizeLess.addEventListener('click', () =>
{
    fontSize -= 2

    if(fontSize < 10)
    {
        fontSize = 10
    }

    text.style.fontSize = `${fontSize}px`
})