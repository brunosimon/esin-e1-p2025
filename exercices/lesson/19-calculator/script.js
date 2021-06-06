const calculator = {}

calculator.operands = [...document.querySelectorAll('.operand')]
calculator.operation = document.querySelector('.operation')
calculator.output = document.querySelector('.output')

calculator.calculate = () =>
{
    const valueA = calculator.operands[0].value
    const valueB = calculator.operands[1].value
    const operation = calculator.operation.value

    const formula = `${valueA} ${operation} ${valueB}`

    try
    {
        const result = eval(formula)
        calculator.output.value = result.toFixed(4)
    }
    catch(error){}
}

for(const operand of calculator.operands)
{
    operand.addEventListener('input', calculator.calculate)
}

calculator.operation.addEventListener('input', calculator.calculate)
