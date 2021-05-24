class Horrocrux {
    constructor(ctx, name, image, position) {
        this.ctx = ctx;
        this.name = name;
        this.image = image;
      this.position = position;
         //this.scale=0.5
       // this.isReady = false
      //Establecemos tamaño de los horrocruxes a 40x40
        this.width = 40
        this.height = 40
        this.x = this.position[0]
        this.y = this.position[1]
      //  this.image.onload = () => {
    //        this.image.isReady = true
      //  }
    }
    //isReady() {
        //return this.image.isReady
   // }
    draw() {
       // if (this.isReady()) {
           this.ctx.drawImage(this.image, this.x, this.y,this.width,this.height)
      //  }
   }
}