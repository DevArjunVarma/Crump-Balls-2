class Bin {
    constructor(x, y, height) {
      var options = {
          isStatic:true,
          'restitution':0.8,
          'friction':1.0,
          'density':1.0
      }
      this.body = Bodies.rectangle(x, y, 100, height, options);
      this.width = 100;
      this.height = height;
      World.add(world, this.body);
      this.image = loadImage("sprites/dustbingreen.png");
    }
    display(){
      var pos =this.body.position;
      push();
      translate(pos.x, pos.y);
      rectMode(CENTER);
      fill(225, 0, 0);
      rect(0, 0, 100, this.height);
      pop();
    }
  }