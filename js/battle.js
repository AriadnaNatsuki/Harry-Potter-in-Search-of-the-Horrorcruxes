class Battle {
    constructor(canvasId) {
        console.log(canvasId)
        this.canvas = document.getElementById(canvasId)
        
        this.ctx = this.canvas.getContext('2d')
        //Creamos atributo background, haciendo instancia de la clase Background
        this.ctx.fillStyle = 'red'
        this.ctx.fillRect(100, 700, 200, 100)
     //   this.backgroundTwo = new BackgroundTwo(this.ctx)
     //   this.harry = new Harry(this.ctx, 480, 400)

        this.canvas.width = 877
        this.canvas.height = 959
        //Renderizacion
        this.FPS = 1000 / 60
        this.drawInterval = undefined

        this.sounds = {


        }

    }

    start() {

        if (!this.drawInterval) {
            this.drawInterval = setInterval(() => {
                //   this.sounds.theme.play()
                this.clear()
                this.move()
                this.draw()
console.log("estoy en el siguiente nivel")
                //  this.sounds.fountain.play()
            }, this.FPS)
        }
    }
    clear() {

        this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height)
    }
    draw() {
        this.backgroundTwo.draw()
        this.harry.draw()


        //this.ctx.save()
    }
    onKeyEvent(event) {
        this.harry.onKeyEvent(event)
    }
    move() {
        this.harry.move()
    }

}
