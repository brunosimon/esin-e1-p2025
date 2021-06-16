class Clock
{
    constructor()
    {
        this.$clock = document.querySelector('.clock')
        this.$hours = this.$clock.querySelector('.hours')
        this.$minutes = this.$clock.querySelector('.minutes')
        this.$seconds = this.$clock.querySelector('.seconds')

        window.setInterval(() =>
        {
            this.tick()
        }, 1000)
    }

    tick()
    {
        const date = new Date()

        const seconds = date.getSeconds()
        const secondsAngle = seconds / 60 * 360
        this.$seconds.style.transform = `rotate(${secondsAngle}deg)`

        const minutes = date.getMinutes() + seconds / 60
        const minutesAngle = minutes / 60 * 360
        this.$minutes.style.transform = `rotate(${minutesAngle}deg)`

        const hours = date.getHours() + minutes / 60
        const hoursAngle = hours / 12 * 360
        this.$hours.style.transform = `rotate(${hoursAngle}deg)`
    }
}

const clock = new Clock()


