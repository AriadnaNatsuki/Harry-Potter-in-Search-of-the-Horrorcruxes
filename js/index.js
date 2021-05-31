window.onload = () => {
  const game = new Game('canvas')
  //const CanvasTwo = document.getElementById('canvasTwo')
  const CanvasTag = document.querySelector('canvas')
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
  const endPanel = document.querySelector('.Ending-Screen')
  document.querySelector('.start-button').onclick = () => {
    // pantallaInicio.style.display = "none"

    horrocruxesPanel.setAttribute('style', 'display:block')
    pantallaInicio.setAttribute('style', 'display:none')
    CanvasAtribute.setAttribute('style', 'display:block')

    game.start(1)
    //Llamo al metodo horrocruxes parpadenando 
    //Esta separado del resto de draw() para que no le interfiera la renderizacion de 60FPS
    game.drawBlinking()

  }
  document.querySelector('.restart').onclick = () => {
   // endPanel.setAttribute('style', 'display:none')
   // pantallaInicio.setAttribute('style', 'display:block')
  //  game.start(1)
   // console.log("restart")
    location.reload()
    
    

  }
  const on = document.document.querySelector('#on')
  const off = document.document.querySelector('#off')
  on.onclick = () => {
    /*on.className.toggle('volumen-off')*/
    on.setAttribute('style', 'display:none')
    off.setAttribute('style', 'display:block')
  }
  /* document.querySelector('.linkedin-button').onclick = () => {
     window.location = "https://www.linkedin.com/in/elizabeth-colastra-gómez-tejedor";
   }*/


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