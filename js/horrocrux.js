class Horrocrux {
    constructor(ctx, name, image, position) {
        this.ctx = ctx;
        this.name = name;
        this.image = image;
      this.position = position;
         //this.scale=0.5
       // this.isReady = false
        this.width = this.ctx.canvas.width
        this.height = this.ctx.canvas.height
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
           this.ctx.drawImage(this.image, this.x, this.y,40,40)
      //  }
   }
}