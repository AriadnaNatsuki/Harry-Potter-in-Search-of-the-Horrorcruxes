window.onload = () => {
  const game = new Game('canvas')
  //let CanvasTwo = document.getElementById('canvas')
  //  CanvasTwo= 'canvasTwo'
 //const battle = new Battle('canvasTwo')
  console.log("hey")

  //Evento que detecta cuando se pulsa una tecla
  document.addEventListener('keydown', (event) => {
    game.onKeyEvent(event)
  })
  //Evento que detecta cuando se deja de pulsar una tecla
  document.addEventListener('keyup', (event) => {
    game.onKeyEvent(event)
  })
  document.addEventListener('keypress', (event) => {
    game.start()
  })
  document.getElementById('continue').onclick = () => {
    console.log("hey 2");
    battle.start();
  }
  //
  //document.addEventListener('keypress', () => {
  //  game.start()
  // })

}