class Harry {
    constructor(ctx, x, y) {
        this.ctx = ctx
        this.x = x
        this.y = y
        this.vx = 2
        this.vy = 2
        //this.width = 0
        //this.height=0
        //rgb(88,121,90) 
        this.movements = {
            right: false,
            left: false,
            up: false,
            down: false
        }
        const fountain = new Audio('../sounds/fountain.wav')
        this.sound = {
            fountain
        }
        
        this.sprite = new Image()
        this.sprite.src = '../img/harry_walking.png'
        this.sprite.isReady = false
        //this.scale=0.5
        //En horizontal tengo 9 sprites (9 columnas) y en vertical 2 (2 filas)
        this.sprite.horizontalFrames = 9
        this.sprite.verticalFrames = 2
        //Posicion sprite por defecto al inicio del juego
        this.sprite.horizontalFrameIndex = 0
        this.sprite.verticalFrameIndex = 0
        this.sprite.drawCount = 0
        this.sprite.onload = () => {
            this.sprite.isReady = true
            //El ancho de la foto lo adquiere por defecto sin tener que hacer nosotros nada
            //De tal forma que si accedemos a la propiedad width nos lo dara
            //Para imprimir el correspondiente a 1 sprite, divide el ancho de la foto entre el numero de sprites por columna y
            //luego el alto entre el numero de sprite por fila, de esta manera lo sacamos en cuadriculas
            this.sprite.frameWidth = Math.floor(this.sprite.width / this.sprite.horizontalFrames)
            this.sprite.frameHeight = Math.floor(this.sprite.height / this.sprite.verticalFrames)
            this.width = this.sprite.frameWidth
            this.height = this.sprite.frameHeight

        }



    }
    isReady() {
        return this.sprite.isReady
    }
    draw() {
        if (this.isReady()) {
            this.ctx.drawImage(this.sprite,
                this.sprite.horizontalFrameIndex * this.sprite.frameWidth,
                this.sprite.verticalFrameIndex * this.sprite.frameHeight,
                this.sprite.frameWidth,
                this.sprite.frameHeight,
                this.x,
                this.y,
                this.width,
                this.height
                )
        }
    }
    move() {
        //condicion que afecta a todas las sentencias
        //si el sprite toca por algun stio el color negro del laberinto se pare if (getImageData)
        //this.vx=0
        if (this.movements.right) {
            this.x += this.vx

        } else if (this.movements.left) {
            this.x -= this.vx
        } else if (this.movements.up) {
            this.y -= this.vy
        } else {
            this.y += this.vy
        }
    }
    sound() {
        if ((this.y > 250 || this.y < 350) && (this.x > 400 || this.y < 540)) {
            fountain.play()
        }
    }
    onkeyEvent(event) {
        const status = event.type == 'keydown'
        switch (event.keyCode) {
            //Si presionamos la tecla UP esta obtendra valor keydown (true)
            case KEY_RIGHT:
                this.movement.right = status
                break
            case KEY_LEFT:
                this.movement.left = status
                break
            case KEY_UP:
                this.movement.up = status
                break
            case KEY_DOWN:
                this.movement.down = status
                break
            case KEY_FIRE:
                this.movement.right = status
                break
        }
    }
}