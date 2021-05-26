class Voldemort {
    constructor(ctx, x, y) {
        this.ctx = ctx
        this.VoldemortX = x
        this.VoldemortY = y
        this.width = 60
        this.height = 90
        //this.fountain = new Audio('./sounds/fountain.wav')


        // const fountain = new Audio('../sounds/fountain.wav')
        //this.sound = {
        //  fountain
        //}

        this.sprite = new Image()
        this.sprite.src = './img/lord voldemort.png'
        this.sprite.isReady = false
        //this.scale=0.5

        this.sprite.onload = () => {
            this.sprite.isReady = true
        }
        //Barra vida Voldemort
        // ctx.beginPath()
        this.balls2 = []
    }
    isReady() {
        return this.sprite.isReady
    }
    draw() {
        if (this.isReady()) {
            this.ctx.drawImage(this.sprite, this.VoldemortX,
                this.VoldemortY,
                this.width,
                this.height
            )
        }
        this.balls2.push(new Ball(this.ctx, this.VoldemortX + this.width, this.VoldemortY, './img/v-ball.png', false))
        this.balls2.forEach(balls2 => balls2.draw())
        //Barra vida
        this.ctx.fillStyle = 'red'
        this.ctx.fillRect(100, 700, 200, 100)


    }
    clear() {
        //Como pasar posicion Harry en tiempo real??

        this.balls2 = this.balls2.filter(ball2 => ball2.x <= 480)
    }
    shoot() {
        //   this.bullets.forEach(bullet => bullet.move())
    }
    move() {
        this.balls2.forEach(balls2 => balls2.move())
    }
    CollidesWith(element) {
        return this.VoldemortX < element.x + element.width &&
            this.VoldemortX + this.width > element.x &&
            this.VoldemortY < element.y + element.height &&
            this.VoldemortY + this.height > element.y
    }

}