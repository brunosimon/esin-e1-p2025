const clapButton = document.querySelector('.clap-button')
const clapAudio = document.querySelector('.clap-audio')

clapButton.addEventListener('mousedown', function()
{
    clapAudio.currentTime = 0
    clapAudio.play()
})

const kickButton = document.querySelector('.kick-button')
const kickAudio = document.querySelector('.kick-audio')

kickButton.addEventListener('mousedown', function()
{
    kickAudio.currentTime = 0
    kickAudio.play()
})

const snareButton = document.querySelector('.snare-button')
const snareAudio = document.querySelector('.snare-audio')

snareButton.addEventListener('mousedown', function()
{
    snareAudio.currentTime = 0
    snareAudio.play()
})

const hiHatAudio = document.querySelector('.hi-hat-audio')

window.setInterval(function()
{
    hiHatAudio.currentTime = 0
    hiHatAudio.play()
}, 1000)
