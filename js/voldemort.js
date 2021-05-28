class Voldemort {
    constructor(ctx, x, y) {
        this.ctx = ctx
        this.VoldemortX = x
        this.VoldemortY = y
        this.width = 60
        this.height = 90
        this.livesVoldemort = []
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
        setTimeout(() => {

            this.balls2.forEach(balls2 => balls2.draw())
            //   this.clear()
        }, 6000)

        //Barra vida
        this.ctx.fillStyle = 'red'
        this.ctx.fillRect(10, 680, 154, 30)
        //Rectangulos de vida
        for (let x = 0; x < 5; x++) {
            //  for (let j = 0; j < array[i].length; j++){
            //let x = array[i]
            this.ctx.strokeStyle = 'red'
            this.ctx.beginPath()
            this.ctx.strokeRect(12 + 30 * x, 682, 30, 26)
            this.ctx.closePath()
            this.ctx.fillStyle = 'black'
            this.ctx.fillRect(12 + 30 * x, 682, 30, 26)
            this.livesVoldemort.push(12 + 30 * x)
            //    }
            /**   */
        }

    }
    clear() {
        //Como pasar posicion Harry en tiempo real??

        this.balls2 = this.balls2.filter(ball2 => ball2.x <= 100)
    }
    shoot() {
        //   this.bullets.forEach(bullet => bullet.move())
    }
    move() {
        this.balls2.forEach(balls2 => balls2.move())
    }
    // this.square.collidesWith(pipe))) {
    collidesWith(element) {
        //  if (this.balls2.some(balls2 => {
        return this.VoldemortX < element.x + element.width &&
            this.VoldemortX + this.width > element.x &&
            this.VoldemortY < element.y + element.height &&
            this.VoldemortY + this.height > element.y
        //  })){
        console.log("colision voldemort")
    }

}

/** */