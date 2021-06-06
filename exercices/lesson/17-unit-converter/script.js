// Setup
const inputElement = document.querySelector('.input')
const operationElement = document.querySelector('.operation')
const outputElement = document.querySelector('.output')

// Calculate ouput function
const calculateOutput = () =>
{
    // Setup
    const inputValue = inputElement.value
    const operationValue = operationElement.value
    let outputValue = 0

    // Calculate the ouput according to the operation
    if(operationValue == 'kgs-to-lbs')
    {
        outputValue = inputValue * 2.20462
    }
    else if(operationValue == 'lbs-to-kgs')
    {
        outputValue = inputValue / 2.20462
    }

    // Put back in DOM and limit decimals
    outputElement.value = outputValue.toFixed(4)
}

// Listen to events
inputElement.addEventListener('input', calculateOutput)
operationElement.addEventListener('change', calculateOutput)