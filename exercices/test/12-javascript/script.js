const foo = document.querySelector('.foo')

// foo.onclick = (event) =>
// {
//     console.log('Click !')
//     console.log(event)
// }

// foo.onmouseover = () =>
// {
//     console.log('Mouse over !')
// }

// foo.onmousemove = () =>
// {
//     console.log('Mouse move !')
// }


// const input = document.querySelector('input')
// input.onfocus = () =>
// {
//     console.log('focus')
// }
// input.onblur = () =>
// {
//     console.log('focus')
// }
// console.log(input)


foo.onclick = () =>
{
    console.log('click 1')
}

foo.onclick = () =>
{
    console.log('click 2')
}