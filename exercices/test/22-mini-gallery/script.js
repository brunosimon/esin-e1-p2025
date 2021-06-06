const $container = document.querySelector('.mini-gallery')
const $thumbnails = $container.querySelectorAll('.thumbnail')
const $largeImage = $container.querySelector('.large img')

for(const $thumbnail of $thumbnails)
{
    $thumbnail.addEventListener('click', (event) =>
    {
        event.preventDefault()

        $largeImage.src = $thumbnail.href
    })
}

$thumbnails[0].click()