class Ball {
    constructor(ctx, x, y, image, harry) {
        this.ctx = ctx
        this.x = x
        this.vx = SPEED * 3
        this.width = 20
        this.height = 20
        this.y = y
        this.harry = true
        // this.maxY = maxY
        this.vy = SPEED

        this.sprite = new Image()

        this.sprite.src = image
        this.sprite.isReady = false

        this.sprite.onload = () => {
            this.sprite.isReady = true

        }


    }

    isReady() {
        return this.sprite.isReady
    }

    draw() {
        if (this.isReady) {
            this.ctx.drawImage(
                this.sprite,
                this.x,
                this.y,
                this.width,
                this.height
            )


        }
    }

    move() {
        if (this.harry) {
            this.x -= this.vx
        } else {
            this.x += this.vx
        }

        // this.y += this.vy
        // this.vy += GRAVITY

        //  if (this.y >= (this.maxY - this.height)) {
        //        this.vy *= -1;
        //  }
    }


}
