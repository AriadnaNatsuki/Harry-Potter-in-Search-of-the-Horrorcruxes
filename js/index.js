window.onload = () => {
  const game = new Game('canvas')
  //const CanvasTwo = document.getElementById('canvasTwo')
  const CanvasTag=document.querySelector('canvas')
 const CanvasAtribute = document.getElementById('canvas')
  //  
 
  console.log("hey")

  //Evento que detecta cuando se pulsa una tecla
  document.addEventListener('keydown', (event) => {
    game.onKeyEvent(event)
  })
  //Evento que detecta cuando se deja de pulsar una tecla
  document.addEventListener('keyup', (event) => {
    game.onKeyEvent(event)
  })
  //DECLARAMOS LAS CONSTANTES QUE ACCEDAN A LOS SELECTORES ID
  //Y SELECTORES DE CLASES QUE QUERAMOS QUE VAYAN APARECIENDO
  //Y DESAPARECIENDO EN FUNCION DE LOS EVENTOS
  const pantallaInicio = document.querySelector('#Starting-Screen')
  const horrocruxesPanel = document.querySelector('#counter')

  //const pantallaInicioAtributo=pantallaInicio.getAttribute('style')

  //const CanvasAtributo = Canvas.getAttribute('style')
  //const battleButton=document.querySelector('#continue')
  document.querySelector('.start-button').onclick = () => {
    // pantallaInicio.style.display = "none"
    horrocruxesPanel.setAttribute('style', 'display:block')
    pantallaInicio.setAttribute('style', 'display:none')
    CanvasAtribute.setAttribute('style', 'display:block')

    game.start()
    //Llamo al metodo horrocruxes parpadenando 
    //Esta separado del resto de draw() para que no le interfiera la renderizacion de 60FPS
    game.drawBlinking()
  }
  //document.querySelector('#continue'). onclick = () => {
    //CanvasTag.remove()
    //const canvasTwo2 = document.createElement('canvas')
   // canvasTwo2.id = 'canvasTwo'
    //canvasTwo2.width = '877'
    //canvasTwo2.height = '959'
    
   // CanvasTag.setAttribute('id', 'canvasTwo')
  //  const battle = new Battle('canvasTwo')
    // CanvasTwo.setAttribute('style', 'display:block')
    //console.log("hey 2");
   // battle.start();
  //}
  //document.addEventListener('keypress', (event) => {

  //})

  // document.getElementById('continue').onclick = () => {


  //}
  //
  //document.addEventListener('keypress', () => {
  //  game.start()
  // })

}