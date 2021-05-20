class Game {
    constructor(canvasId) {
        this.canvas = document.getElementById(canvasId)
        this.ctx = this.canvas.getContext('2d')
        this.background = new Background(this.ctx)
        this.harry=new Harry(this.ctx,400,400)
        this.canvas.width = 1000
        this.canvas.height = 1000
        //Renderizacion
        this.FPS = 1000 / 60
        //this.drawInterval=undefined
        const theme = new Audio("../sounds/Harry Potter Theme Song.mp3")
        //theme.addEventListener("canplay", event => {
        /* the audio is now playable; play it if permissions allow */
        // theme.play();
        // });
        theme.volume = 0.2
        theme.play()
        //this.sounds = {
        //  theme
        // }
    }
    start() {
        // if (!this.drawInterval) {
        //  this.drawInterval = setInterval(() => {

        this.interval = setInterval(() => {
            //   this.sounds.theme.play()
            this.clear()
            this.draw()
        }, this.FPS)

    }
    clear() {
        this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height)
    }
    draw() {
        this.background.draw()
        this.harry.draw()
    }
    move() {
        //this.harry.move()
    }
}