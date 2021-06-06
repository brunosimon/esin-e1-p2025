const $hero = document.querySelector('.hero')
const $heroImages = [...$hero.querySelectorAll('img')]
const $heroLayers = [...$hero.querySelectorAll('.layer')]

// Lazy load
$heroImages.forEach(($image) =>
{
    if($image.complete)
    {
        $image.classList.add('loaded')
    }
    else
    {
        $image.addEventListener('load', () =>
        {
            $image.classList.add('loaded')
        })
    }
})

// Cursor parallax
window.addEventListener('mousemove', (event) =>
{
    const mouseX = event.clientX
    const mouseY = event.clientY

    const normalizedX = mouseX / window.innerWidth - 0.5
    const normalizedY = mouseY / window.innerHeight - 0.5

    $heroImages.forEach(($image, index) =>
    {
        const translateX = - normalizedX * 10 * index
        const translateY = - normalizedY * 10 * index

        $image.style.transform = `translate(${translateX}px, ${translateY}px)`
    })
})

// Scroll parallax
window.addEventListener('scroll', () =>
{
    const scrollY = window.scrollY

    if(scrollY < window.innerHeight)
    {
        $heroLayers.forEach(($layer, index) =>
        {
            const invertedIndex = 8 - index
            const translateY = scrollY * invertedIndex / 8
            $layer.style.transform = `translateY(${translateY}px)`
        })
    }
})