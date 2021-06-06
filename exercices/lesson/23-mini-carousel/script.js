const miniCarousel = {}
miniCarousel.$container = document.querySelector('.mini-carousel')
miniCarousel.$mover = miniCarousel.$container.querySelector('.mover')
miniCarousel.$thumbnails = [...miniCarousel.$container.querySelectorAll('.thumbnail')]

miniCarousel.init = () =>
{
    for(const index in miniCarousel.$thumbnails)
    {
        const $thumbnail = miniCarousel.$thumbnails[index]

        $thumbnail.addEventListener('click', (event) =>
        {
            event.preventDefault()

            const translateX = - index * 600

            miniCarousel.$mover.style.transform = `translateX(${translateX}px)`
        })
    }
}

miniCarousel.init()