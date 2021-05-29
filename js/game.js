class Game {
    constructor(canvasId) {
        this.canvas = document.getElementById(canvasId)
        this.ctx = this.canvas.getContext('2d')
        //Creamos atributo background, haciendo instancia de la clase Background
        //ESCENARIOS
        this.background = new Background(this.ctx)
        this.backgroundTwo = new BackgroundTwo(this.ctx)
        this.forest = new Forest(this.ctx)
        //ELEMENTOS ESCENARIOS
        this.horrocruxes = HORROCRUXES.map(
            horrocrux => new Horrocrux(this.ctx, horrocrux.name, horrocrux.image, horrocrux.position))
        //SPRITES
        //  this.harry = new Harry(this.ctx, 480, 400)
        //Le pasamos un booleano a Harry, ya que en funcion de si es true o false se deshabilitaran/habilitaran algunas opciones
        this.harry = new Harry(this.ctx, 480, 400, './img/harry_walking.png', false)
        this.harryBattle = new Harry(this.ctx, 480, 900, './img/prueba.png', true)
        this.voldemort = new Voldemort(this.ctx, 100, 880)

        //  this.harry = new Harry(this.ctx,664,335)
        this.canvas.width = 877
        this.canvas.height = 959
        //Renderizacion
        this.FPS = 1000 / 60
        this.drawInterval = undefined
        this.level = 1
        this.voldemortBallsCount = 0



        const battle = new Battle('canvas')
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
                if (this.level === 1) {
                    //   this.sounds.theme.play()
                    this.clear()
                    this.move()
                    this.draw()
                    this.checkCapture()
                    this.sounds.theme.play()
                    //  this.sounds.fountain.play()
                } else {
                    this.clear()
                    this.draw(true)
                    this.move()
                    this.checkColission()
                    this.voldemortBallsCount++
                    if (this.voldemortBallsCount % BALL_FRAMES === 0) {
                        this.voldemort.shoot()
                        this.voldemortBallsCount = 0


                    }
                }
            }, this.FPS)
        }
    }


    clear() {

        this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height)
        this.harryBattle.clear()
        this.voldemort.clear()
    }
    draw(bool) {
        if (bool) {
            this.backgroundTwo.draw()
            this.forest.draw()
            this.voldemort.draw(bool)
            this.harryBattle.draw()

        } else {
            this.background.draw()
            this.harry.draw()
            //  const blinking = setTimeout(() => {
            //    if
            this.horrocruxes.forEach(element => element.draw())
            //  }, 5000)


            //this.ctx.save()
        }

    }
    drawBlinking() {
        //setTimeout(() => {
        //  setInterval(() => {
        //    this.horrocruxes.forEach(element => {
        //      element.draw()
        // }, 15)
        //}, 5000)
        //})
    }

    onKeyEvent(event) {
        this.harry.onKeyEvent(event)
        this.harryBattle.onKeyEvent(event)
    }
    move() {
        this.harry.move()
        this.harryBattle.move()
        this.voldemort.move()
    }
    checkColission() {
        //  this.harry.collidesWith()
        //   let bolaColisionadaVoldemort = this.harryBattle.balls.find(ball => this.voldemort.collidesWith(ball))
        //COLISION BOLAS DE HARRY CON VOLDEMORT
        if (this.harryBattle.balls.some(ball => this.voldemort.collidesWith(ball))) {
            // this.voldemort.draw(true)
            this.harryBattle.balls.filter(ball => !this.harryBattle.balls.find(ball => this.voldemort.collidesWith(ball)))
            console.log("colisione con voldemort")
            // for (let i = 0; i < 5; i--){
            //   clearRect(this.voldemort.livesVoldemort[i], 682, 30, 26)
            //}
        }
        //COLISION BOLAS DE VOLDEMORT CON HARRY
        else if (this.voldemort.balls2.some(ball2 => this.harry.collidesWith(ball2))) {
            console.log("colisione con harry")
        }
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
        if (restHorrocruxes.length === 5) {

            this.clear()
            this.level = 2
            // this.save()
            // this.battle.start()
        }
        // restHorrocruxes.forEach(document.querySelector('.horrocruxes #ring')
        this.horrocruxes = restHorrocruxes
    }

}