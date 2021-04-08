const blocks = document.querySelectorAll('.block')
let playerTurn = 1

for(const block of blocks)
{
    block.addEventListener('click', () =>
    {
        if(!block.classList.contains('choose-by-1') && !block.classList.contains('choose-by-2'))
        {
            if(playerTurn == 1)
            {
                block.classList.add('choose-by-1')
                playerTurn = 2
            }

            else if(playerTurn == 2)
            {
                block.classList.add('choose-by-2')
                playerTurn = 1
            }
        }
    })
}