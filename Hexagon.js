class Hexagon  {
  constructor(x,y){
    var options = {
      'restitution':0.8,
      'friction':1.0,
      'density':1.0
  }
        this.body = Bodies.rectangle(x, y, 50, 50, options);
        this.image = loadImage("hexagon.png");
        World.add(world, this.body);
    
    
    
    
   
  }

  display() {
    var angle = this.body.angle;
    push();
    translate(this.body.position.x, this.body.position.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image, 0, 0, 50, 50);
    pop();
  }
}
