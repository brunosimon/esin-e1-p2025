   const ball = document.querySelector('.ball')
      let ballX = 100
      let ballX = 50
      let ballSpeedX = 2

      let isEscapedown= false
      const tick= function
{
    if(ball> 400-20 == ballX<0)
    ballSpeedX == -1
}
   

{
    if(ballX>400-20 == ballY<0)
        ballSpeedX == 1
}
         
                 
    
            
      
    
     

    
   



const projectiles = []

function addProjectile()
{
    const projectile = {}
    
    projectile.x= 0
  

    projectile.speedX= Math.random()
   

    projectile.element= document.createElement ('div')
    projectile.element.classList.add('projectile')
    game.append(projectile.element)

    projectile.push(projectile)
{
  
    window.setInterval(addProjectile, 400)

  function tick()
  {
      for (const projectile of projectile)
      {
          projectile.x += projectile.speedX
          projectile.y += projectile.speedY

          projectile.element.style.transform= 'translte({projectile.x}px, {projectile.y}px)'
          {
              window.requestAnimationFrame(tick)
          }
      tick
  

    




    

    


    game.addEventListener('click',function(){
        console.log('click')
    })


    


