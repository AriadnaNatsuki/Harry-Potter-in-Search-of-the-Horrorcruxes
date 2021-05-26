class Forest {
    constructor(ctx) {
        this.ctx = ctx
        this.width = this.ctx.canvas.width
        this.height = this.ctx.canvas.height
        this.x = 0
        this.y = this.height - 300;



        this.img = new Image()
        this.img.src = './img/black-forest2.jpg'

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
            this.ctx.drawImage(this.img, this.x, this.y, this.width, this.height * 1 / 3)
        }
        //  wall.forEach(element=>this.ctx.fillRect(element[0],element[1],1,1))
    }
}

