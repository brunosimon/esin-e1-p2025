const result = document.querySelector('.result')

document.addEventListener('keydown', (event) =>
{
    const keySpan = document.createElement('span')
    keySpan.textContent = event.key
    keySpan.classList.add('key')
    result.append(keySpan)
})