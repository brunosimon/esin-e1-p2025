const eyeElements = document.querySelectorAll('.eye')

window.addEventListener('mousemove', (_event) =>
{
    const mouseX = _event.clientX
    const mouseY = _event.clientY

    for(const eye of eyeElements)
    {
        const eyeX = eye.offsetLeft + eye.offsetWidth / 2
        const eyeY = eye.offsetTop + eye.offsetHeight / 2
        const deltaX = mouseX - eyeX
        const deltaY = mouseY - eyeY
        const angle = Math.atan2(deltaY, deltaX)
        let distance = Math.hypot(deltaX, deltaY) * 0.2
        distance = Math.min(distance, 60)
        const x = Math.cos(angle) * distance
        const y = Math.sin(angle) * distance

        eye.children[0].style.transform = `translate(${x}px, ${y}px)`
    }
})