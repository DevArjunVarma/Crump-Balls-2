class Bin2 {
    constructor(x, y, height, angle) {
      var options = {
          isStatic:true,
          'restitution':0.8,
          'friction':1.0,
          'density':1.0
      }
      this.body = Bodies.rectangle(x, y, 10, height, options);
      this.width = 10;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push();
      translate(pos.x, pos.y);
      rectMode(CENTER);
      fill(225, 0, 0);
      rect(0, 0, 10, this.height);
      pop();
    }
  }