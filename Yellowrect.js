class Yellowrect {
    constructor(x,y,width,height,angle){
      var options = {
        'restitution':0.8,
        'friction':0.8,
        'density':1.0
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    World.add(world, this.body);
    
      this.image = loadImage("yellow.png");
      Matter.Body.setAngle(this.body, angle);
    }
    display(){
      var angle = this.body.angle;
      push();
      stroke("white");
      strokeWeight(5);
      translate(this.body.position.x, this.body.position.y);
      rotate(angle);
      imageMode(CENTER);
      image(this.image, 0, 0, this.width, this.height);
      pop();
    }
  }