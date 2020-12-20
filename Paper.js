class Bob {
  constructor(x,y,width,height) {
    var options = {
        isStatic: false,
        restitution: 0.1
    }
    this.body = Bodies.rectangle(x,y,width,height,options);
    this.width = width;
    this.height = height;
    this.image = loadImage("hi/hi.jpg")
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    rectMode(CENTER);
    fill("lightgreen");
    rect(pos.x, pos.y, this.width, this.height);
  }
};