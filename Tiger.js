class Tiger extends BaseClass {
  constructor(x, y, velocityX, velocityY){
    super(x,y,50,50);
    this.velocityX = velocityX;
    this.velocityY = velocityY;
    //this.image = loadImage("sprites/enemy.png");
    Matter.Body.setVelocity(this.body, {x: velocityX, y: velocityY});
    console.log(this.body);
  }
display(){
  this.velocityX = Math.round(random(-50,50))
  this.velocityY = Math.round(random(2,5))
  Matter.Body.setVelocity(this.body, {x: this.velocityX, y: this.velocityY});
  super.display()
}
};
