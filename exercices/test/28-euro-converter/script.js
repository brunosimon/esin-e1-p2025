// Setup
const $converter = document.querySelector('.converter')
const $input = $converter.querySelector('.converter .input')
const $rate = $converter.querySelector('.converter .rate')
const $output = $converter.querySelector('.converter .output')

const url = 'http://api.exchangeratesapi.io/v1/latest?access_key=3e7e75614376b03329e048d414dd0492'

window
    .fetch(url)
    .then(response => response.json())
    .then(data =>
    {
        const rates = data.rates

        for(const rateName in rates)
        {
            const rateValue = rates[rateName]
            
            const $option = document.createElement('option')
            $option.value = rateValue
            $option.textContent = rateName
            
            $rate.append($option)
        }
    })

const convert = () =>
{
    const inputValue = parseFloat($input.value)
    const rateValue = parseFloat($rate.value)
    const result = inputValue * rateValue

    if(isNaN(result))
    {
        $output.textContent = '(┛ಠ_ಠ)┛彡┻━┻'
    }
    else
    {
        $output.textContent = result.toFixed(2)
    }
}

$input.addEventListener('input', convert)
$rate.addEventListener('input', convert)