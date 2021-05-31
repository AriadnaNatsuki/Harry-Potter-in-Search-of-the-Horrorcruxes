class Background {
    constructor(ctx) {
        this.ctx = ctx
        this.x = 0
        this.y = 0

        this.width = this.ctx.canvas.width
        this.height = this.ctx.canvas.height

        this.img = new Image()
        this.img.src = './img/laberinto_retocado.jpg'

        this.img.isReady = false
        this.img.onload = () => {
            this.img.isReady = true
        }

    }
    isReady() {
        return this.img.isReady
    }
    draw() {
        if (this.isReady()) {
            this.ctx.drawImage(this.img, this.x, this.y, this.width, this.height)
        }
      //  wall.forEach(element=>this.ctx.fillRect(element[0],element[1],1,1))
    }
}