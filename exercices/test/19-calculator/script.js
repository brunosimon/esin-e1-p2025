const calculator = {}

calculator.$container = document.querySelector('.calculator')
calculator.$operands = calculator.$container.querySelectorAll('.operand')
calculator.$operation = calculator.$container.querySelector('.operation')
calculator.$output = calculator.$container.querySelector('.output')

calculator.calculate = () =>
{
    const valueA = calculator.$operands[0].value
    const valueB = calculator.$operands[1].value
    const operation = calculator.$operation.value

    const formula = `${valueA} ${operation} ${valueB}`

    try
    {
        const result = eval(formula)
        calculator.$output.value = result
    }
    catch (error)
    {
        console.log('error')
    }
}

for(const $operand of calculator.$operands)
{
    $operand.addEventListener('input', calculator.calculate)
}
calculator.$operation.addEventListener('input', calculator.calculate)
