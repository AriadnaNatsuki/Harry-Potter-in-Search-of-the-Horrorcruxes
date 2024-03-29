class Harry {
    constructor(ctx, x, y, image, level2) {
        this.ctx = ctx
        this.x = x
        this.y = y
        this.image = image
        this.level2 = level2
        this.vx = 0
        this.vy = 0
        this.maxX = this.ctx.canvas.width
        this.maxY = this.ctx.canvas.height
        this.fountain = new Audio('./sounds/fountain.wav')
        this.balls = []
        this.livesHarry = []
        this.lives_H = 5
        //this.width = 0
        //this.height=0
        //rgb(88,121,90) 
        if (this.level2) {
            this.movements = {
                up: false
            }
            this.isJumping = false
            this.canFire = true
            //Array de bolas de energia que se ira generando cuando se hagamos la instancia del objeto energyBalls


        } else {
            this.movements = {
                right: false,
                left: false,
                up: false,
                down: false,
            }
        }

        // const fountain = new Audio('../sounds/fountain.wav')
        //this.sound = {
        //  fountain
        //}
        this.sprite = new Image()
        this.sprite.src = image

        // this.sprite.src = './img/harry_walking.png'
        this.sprite.isReady = false

        if (this.level2) {
            //this.scale=0.5
            //En horizontal tengo 9 sprites (9 columnas) y en vertical 2 (2 filas)
            this.sprite.horizontalFrames = 20
            this.sprite.verticalFrames = 1

        } else {
            //this.scale=0.5
            //En horizontal tengo 9 sprites (9 columnas) y en vertical 2 (2 filas)
            this.sprite.horizontalFrames = 9
            this.sprite.verticalFrames = 2
        }

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
            if (this.level2) {
                this.width = this.sprite.frameWidth * 1.5
                this.height = this.sprite.frameHeight * 1.5
            } else {
                this.width = this.sprite.frameWidth
                this.height = this.sprite.frameHeight
            }


        }



    }
    isReady() {
        return this.sprite.isReady
    }
   // start() {
     //   this.lives_H = 5
   // }
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
        } this.sprite.drawCount++
        this.balls.forEach(balls => balls.draw())
        this.animate()
        if (this.level2) {
            //Barra vida
            this.ctx.fillStyle = 'black'
            this.ctx.fillRect(400, 680, 154, 30)
            //Rectangulos de vida
            for (let x = 0; x < this.lives_H; x++) {
                //  for (let j = 0; j < array[i].length; j++){
                //let x = array[i]
                this.ctx.strokeStyle = 'black'
                this.ctx.beginPath()
                this.ctx.strokeRect(402 + 30 * x, 682, 30, 26)
                this.ctx.closePath()
                this.ctx.fillStyle = '#fb3700'
                this.ctx.fillRect(402 + 30 * x, 682, 30, 26)
                this.livesHarry.push(402 + 30 * x)
                //    }
            }


        }
       
    }

    //Quedate con las bolas que estan del 130 en adelante
    clear() {
        //this.balls = this.balls.filter(ball => ball.x >= 130)
    }
    onKeyEvent(event) {
        const status = event.type === 'keydown'
        if (this.level2) {
            switch (event.keyCode) {
                case KEY_FIRE:
                    if (this.canFire) {
                        console.log(this.canFire)
                        this.balls.push(new Ball(this.ctx, this.x - this.width, this.y, './img/h-ball.png', true))
                        this.canFire = false
                        setTimeout(() => {

                            this.canFire = true

                        }, 500);


                    }
                    break;
                case KEY_UP:
                    this.movements.up = status
                    break;
            }

        } else {
            switch (event.keyCode) {
                //Si presionamos la tecla UP esta obtendra valor keydown (true)

                case KEY_RIGHT:
                    //if(this.level2=false)
                    this.movements.right = status
                    // console.log("true right")
                    break;
                case KEY_LEFT:
                    this.movements.left = status
                    //  console.log("true left")
                    break;
                case KEY_UP:
                    this.movements.up = status
                    break;
                case KEY_DOWN:
                    this.movements.down = status
                    break;
            }


        }

    }
    move() {


        //condicion que afecta a todas las sentencias
        //si el sprite toca por algun stio el color negro del laberinto se pare if (getImageData)
        //this.vx=0
        if (this.canFire) {
            if (this.movements.up && !this.isJumping) {
                //   console.log(this.isJumping)
                this.isJumping = true
                //   console.log(this.isJumping)
                this.vy = -12
            } else if (this.isJumping) {
                this.vy += GRAVITY
            } else {
                this.vx = 0
                this.vy = 0
            }

        } else {
            if (this.movements.right) {
                this.vx = SPEED
            } else if (this.movements.left) {
                this.vx = -SPEED
            } else if (this.movements.up) {
                this.vy = -SPEED
            } else if (this.movements.down) {
                this.vy = SPEED
            } else {
                this.vx = 0
                this.vy = 0
            }

        }

        if (this.checkColisionWall()) {
            //checkColisionWall()
            this.vx = 0
            this.vy = 0
        }
        this.x += this.vx
        // console.log(this.x)
        this.y += this.vy
        //Restriccion para no salirse del canvas
        //Ancho de 1 sprite (aprox 33 px)
        if (this.x >= this.maxX - this.sprite.frameWidth) {
            this.x = this.maxX - this.sprite.frameWidth
        } else if (this.x <= 0) {
            this.x = 0
        }
        //Alto de 1 sprite (aprox 72)
        if (this.y >= this.maxY - this.sprite.frameHeight) {
            this.isJumping = false
            this.vy = 0
            // this.y = this.maxY - this.sprite.frameHeight
            this.y = 900

        } else if (this.y <= 0) {
            //this.y=0
            //He tenido que permitir que se le corte un poco la cabeza
            //para no bajar la linea del muro que entraba en conflicto al no
            //permitirle entrar por los corredores superiores

            this.y = 0
        }
        this.balls.forEach(balls => balls.move())
    }
    animate() {
        /**if (this.canFire = false) {
            this.sprite.verticalFrameIndex = 0

            // this.sprite.verticalFrameIndex = 0
            if ((this.sprite.horizontalFrameIndex >= this.sprite.horizontalFrames - 1)) {
                this.sprite.horizontalFrameIndex = 0
            } else {
                this.sprite.horizontalFrameIndex++
            }
        }  */
        if (this.movements.right) {

            //  this.animateSprite("right")
            this.sprite.verticalFrameIndex = 1
             if (this.sprite.drawCount % MOVEMENT_FRAMES === 0) {
            if ((this.sprite.horizontalFrameIndex >= this.sprite.horizontalFrames - 1)) {
                this.sprite.horizontalFrameIndex = 1
            } else {
                this.sprite.horizontalFrameIndex++
            }this.sprite.drawCount=0
             }
            // this.animateSprite()
        } else if (this.movements.left) {
            this.sprite.verticalFrameIndex = 0
            if (this.sprite.drawCount % MOVEMENT_FRAMES === 0) {
            if ((this.sprite.horizontalFrameIndex >= this.sprite.horizontalFrames - 1)) {
                this.sprite.horizontalFrameIndex = 0
            } else {
                this.sprite.horizontalFrameIndex++
                } this.sprite.drawCount = 0
            }
        }
    }


    resetAnimation() {
        this.sprite.horizontalFrameIndex = 0
        this.sprite.verticalFrameIndex = 1
    }
    //animateSprite() {
    //Reseteamos la posicion del sprite
    //  if (this.sprite.verticalFrameIndex != 0) {
    //     this.resetAnimation()
    //  }  
    //Estoy en un frame que le toca cambio de foto
    // if (this.sprite.drawCount & MOVEMENT_FRAMES === 0) {
    //Sprites derecha, horizontalFrameIndex=1
    // if (value === "right") {
    //   if (this.movements.right) {
    //    console.log("right");
    //Si incremento más de los sprites que tengo por fila, vuelve al inicio o si al recibir value derecha esta en otra columna
    //o si empiezo a recorrerlo en la fila equivocada
    // if ((this.sprite.verticalFrameIndex != 1) || (this.sprite.horizontalFrameIndex >= this.sprite.horizontalFrames - 1)) {
    // this.sprite.horizontalFrameIndex = 1
    // } else {
    //Recorro toda la fila
    // this.sprite.horizontalFrameIndex++
    //  }


    /**sound() {
        if ((this.y > 250 || this.y < 350) && (this.x > 400 || this.y < 540)) {
            fountain.play()
        }
    } */
    spritePosition() {
        //Nos declaramos un array con la posicion de nuestro sprite. 
        //Dado que por derfecto la posici
        //this.x += this.vx
        // console.log(this.x)
        // this.y += this.vy

        this.positionFeetLeft = [this.x + this.vx, this.y + this.vy + this.sprite.frameHeight]

        this.positionFeetRight = [this.x + this.vx + this.sprite.frameWidth, this.y + this.vy + this.sprite.frameHeight]
        //  this.fountain.play()
        this.fountain.volume = 0.3
        //La propiedad volume solo admite 2 decimales
        //Fuente (400,500)
        //Si me muevo a la derecha y me alejo a partir de this.x 500, el sonido disminuye
        if (this.movements.right && this.x > 500) {
            this.fountain.volume = 0.10
            //Si muevo a la izquierda y me acerco a la fuente (intervalo desde [500,ancho del canvas]), el sonido aumenta
        } else if (this.movements.left && (this.x > 0 && this.x < 500)) {
            this.fountain.volume = 0.2
        } else if (this.movements.right && (this.x < this.ctx.canvas.width && this.x > 500)) {
            this.fountain.volume = 0.2
        } else if (this.movements.left && this.x > 500) {
            this.fountain.volume = 0.1
        } else if (this.movements.up && this.y < 600) {
            this.fountain.volume = 0.1
            //Si muevo a la izquierda y me acerco a la fuente (intervalo desde [500,ancho del canvas]), el sonido aumenta
        } else if (this.movements.down && (this.y > 0 && this.y < 600)) {
            this.fountain.volume = 0.2
        } else if (this.movements.up && (this.y > this.ctx.canvas.height && this.x < 600)) {
            this.fountain.volume = 0.2
        } else if (this.movements.down && this.y > 600) {
            this.fountain.volume = 0.1
        }
        // this.fountain.play()
        // for (let i = 1; i > 0; i = (i - 0.02)*100/100) {
        //     console.log("entro") 
        //     // this.fountain.play()

        //     this.fountain.volume = i

        // }
        //this.fountain.volume = 0.02
        //  if ((this.x > 500 && this.y > 600 ) || (this.x < 500) && (this.y < 600)) {
        //    console.log("entro")
        //this.fountain.volume =1
        // for (let i = 1; i <= 0; i = i - 0.02){
        // this.fountain.play()
        //  this.fountain.volume = i
        // console.log(this.fountain.volume)
        // }

        // }

    }
    checkColisionWall() {
        this.spritePosition()
        return wall.some(coordenate => {
            if (((this.positionFeetLeft[0] === coordenate[0]) && (this.positionFeetLeft[1] === coordenate[1])) || ((this.positionFeetRight[0] === coordenate[0]) && (this.positionFeetRight[1] === coordenate[1]))) {
                return true
            }

        })
    }
    catchHorrocrux(element) {
        //Devuelve true o false
        return this.x < element.x + element.width &&
            this.x + this.width > element.x &&
            this.y < element.y + element.height &&
            this.y + this.height > element.y

    }
    collidesWith(element) {
        //  if (this.balls2.some(balls2 => {
        return this.x < element.x + element.width &&
            this.x + this.width > element.x &&
            this.y < element.y + element.height &&
            this.y + this.height > element.y
        //  })){
        console.log("colision voldemort")
    }
}

