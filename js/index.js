window.onload = () => {
    const game=new Game('canvas')
    console.log("hey")
   game.start()
    //Evento que detecta cuando se pulsa una tecla
    document.addEventListener('keydown', (event) => {
        game.onKeyEvent(event)
    })
    //Evento que detecta cuando se deja de pulsar una tecla
   document.addEventListener('keyup', (event) => {
        game.onKeyEvent(event)
    }) 
    //
   //document.addEventListener('keypress', () => {
    //  game.start()
   // })
    
}