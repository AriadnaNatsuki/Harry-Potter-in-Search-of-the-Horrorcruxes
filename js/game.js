class Game {
    constructor(canvasId) {
        this.canvas = document.getElementById(canvasId)
        this.ctx = this.canvas.getContext('2d')
        //Creamos atributo background, haciendo instancia de la clase Background
        this.background = new Background(this.ctx)
        
        this.harry = new Harry(this.ctx, 480, 400)
        this.horrocruxes = HORROCRUXES.map(
            horrocrux => new Horrocrux(this.ctx, horrocrux.name, horrocrux.image, horrocrux.position))
        //  this.harry = new Harry(this.ctx,664,335)
        this.canvas.width = 877
        this.canvas.height = 959
        //Renderizacion
        this.FPS = 1000 / 60
        this.drawInterval = undefined

        //theme.addEventListener("canplay", event => {
        /* the audio is now playable; play it if permissions allow */
        // theme.play();
        // });
        //  theme.volume = 0.2

        this.sounds = {
            theme: new Audio('./sounds/Harry Potter Theme Song.mp3'),
            //    fountain: { audio: new Audio('./sounds/fountain.wav'), volume: fountain.volume = 0.2 },
            fountain: new Audio('./sounds/fountain.wav'),

            sparkling: new Audio('./sounds/Sparkle.mp3')
        }
        //fountain.volume=0.2
    }

    start() {

        if (!this.drawInterval) {
            this.drawInterval = setInterval(() => {
                //   this.sounds.theme.play()
                this.clear()
                this.move()
                this.draw()
                this.checkCapture()
                this.sounds.theme.play()
                //  this.sounds.fountain.play()
            }, this.FPS)
        }
    }
    clear() {

        this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height)
    }
    draw() {
        this.background.draw()
        this.harry.draw()
        this.horrocruxes.forEach(element => element.draw())

        //this.ctx.save()
    }
    onKeyEvent(event) {
        this.harry.onKeyEvent(event)
    }
    move() {
        this.harry.move()
    }
    checkCapture() {
        //  this.horrocruxes.forEach(horrocrux => {

        //   if (this.harry.catchHorrocrux(horrocrux)) {
        //       this.sounds.sparkling.play()
        //   }
        //  })
        //Array con los horrocruxes pendientes de recoger
        let restHorrocruxes = this.horrocruxes.filter(horrocrux => !this.harry.catchHorrocrux(horrocrux))
        //let restHorrocruxes =5


        //Pewndiente añadir sonido tras la captura
        let board = document.querySelector('#counter span').textContent = restHorrocruxes.length
        //Para comprobar si se ha cogido algun horrocruxes, restaremos la longitud del array inicial de horrocruxes (this.horrocruxes: sin modificar) y 
        //y el nuevo donde estan los pendientes de recoger
        //1: partimos de 6, si no se ha recogido ninguno la diferencia es 0 (falsy), no ejecuta el volumen
        //2: partimos de 6, recogemos 1, 6-1=5 (por ser distinto de 0, ya es truthy)
        //3: partimos de 5, si recogemos 1, 5-1=4 (por ser distinto de 0, ya es truthy)
        //Y así sucesivamente dependiendo de si cogemos  o no, será truthy o false la resta
        if (this.horrocruxes.length - restHorrocruxes.length) {
            this.sounds.sparkling.play()
        }
        if (restHorrocruxes.length === 4) {
            this.clear()
            //  this.background.draw()
        }
        // restHorrocruxes.forEach(document.querySelector('.horrocruxes #ring')
        this.horrocruxes = restHorrocruxes
    }

}