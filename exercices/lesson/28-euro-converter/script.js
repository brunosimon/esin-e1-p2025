// Setup
const $converter = document.querySelector('.converter')
const $input = $converter.querySelector('.input')
const $rate = $converter.querySelector('.rate')
const $output = $converter.querySelector('.output')

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
            $option.textContent = rateName
            $option.value = rateValue

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
        $output.textContent = '(┛◉Д◉)┛彡┻━┻'
    }
    else
    {
        $output.textContent = result
    }
}

$input.addEventListener('input', convert)
$rate.addEventListener('input', convert)