const $container = document.querySelector('.mini-carousel')
const $mover = $container.querySelector('.mover')
const $thumbnails = [...$container.querySelectorAll('.thumbnail')]

for(const $thumbnail of $thumbnails)
{
    $thumbnail.addEventListener('click', (event) =>
    {
        event.preventDefault()

        const index = $thumbnails.indexOf($thumbnail)
        const translateX = - index * 600

        $mover.style.transform = `translateX(${translateX}px)`
    })
}