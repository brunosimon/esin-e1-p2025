const inputElement = document.querySelector('.input')
const operationElement = document.querySelector('.operation')
const outputElement = document.querySelector('.output')

const calculateOutput = () =>
{
    const inputValue = inputElement.value
    const operationValue = operationElement.value
    let outputValue = null

    if(operationValue === 'kgs-to-lbs')
    {
        outputValue = inputValue * 2.20462
    }
    else if(operationValue === 'lbs-to-kgs')
    {
        outputValue = inputValue / 2.20462
    }

    outputElement.value = outputValue.toFixed(4)
}

inputElement.addEventListener('input', calculateOutput)
operationElement.addEventListener('change', calculateOutput)