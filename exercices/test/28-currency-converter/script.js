// Get all DOM elements
const input = document.querySelector('.converter .input')
const baseRate = document.querySelector('.converter .base.rate')
const destinationRate = document.querySelector('.converter .destination.rate')
const output = document.querySelector('.converter .output')

// Fetch currencies from API from https://api.exchangeratesapi.io/latest
window
    .fetch('http://api.exchangeratesapi.io/v1/latest?access_key=3e7e75614376b03329e048d414dd0492')
    .then(_response => _response.json())
    .then(_data =>
    {
        const rates = Object.keys(_data.rates)
        rates.push('EUR')
        rates.sort()
        
        for(const _rate of rates)
        {
            const option = document.createElement('option')
            option.value = _rate
            option.textContent = _rate
            
            baseRate.appendChild(option)
            destinationRate.appendChild(option.cloneNode(true))
        }

        baseRate.value = 'EUR'
        destinationRate.value = 'USD'
    })

const updateOutput = () =>
{
    const inputValue = input.value.replace(',', '.')
    const baseRateValue = baseRate.value
    const destinationRateValue = destinationRate.value
    const url = `http://api.exchangeratesapi.io/v1/latest?access_key=3e7e75614376b03329e048d414dd0492&base=${baseRateValue}&symbols=${destinationRateValue}`

    if(baseRateValue === destinationRateValue)
    {
        output.textContent = '1.0'
        return
    }

    window
        .fetch(url)
        .then(_response => _response.json())
        .then(_data => 
        {
            console.log(_data)
            const rate = _data.rates[destinationRateValue]
            const result = inputValue * rate

            if(isNaN(result))
            {
                output.textContent = '(ノಠ益ಠ)ノ彡┻━┻'
            }
            else
            {
                output.textContent = result
            }
        })
}

input.addEventListener('input', updateOutput)
baseRate.addEventListener('input', updateOutput)
destinationRate.addEventListener('input', updateOutput)