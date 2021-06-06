const $container = document.querySelector('.mini-gallery')
const $thumbnails = $container.querySelectorAll('.thumbnail')
const $largeImage = $container.querySelector('.large img')

for(const $thumbnail of $thumbnails)
{
    $thumbnail.addEventListener('click', function(event)
    {
        event.preventDefault()
        
        // const href = $thumbnail.getAttribute('href')
        const href = $thumbnail.href

        // $largeImage.setAttribute('src', href)
        $largeImage.src = href
    })
}

// $largeImage.src = $thumbnails[0].href
$thumbnails[0].click()
