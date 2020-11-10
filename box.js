class Box{
constructor(x,y,width,height){
     
  var box_options={
    isStatic:false,
    restitution:0.8,
    friction:0.3,
    density:1.0
  }
  this.x=x;
  this.y=y;
  this.height=height;
  this.width=width;
  this.body=Bodies.rectangle(x,y,width,height,box_options);
  World.add(myWorld,this.body);
}    
display(){
    var pos=this.body.position;
    var angle=this.body.angle;
    push();
    translate(pos.x,pos.y);
    rotate(angle);
    angleMode(RADIANS);
    rectMode(CENTER);
    rect(0,0,this.width,this.height);
    pop();
}

}