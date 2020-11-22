class Box{
constructor(x,y,width,height){
  var options={
    restitution : 0.04,
    friction : 0,
    isStatic : false
  }
  this.body = Bodies.rectangle(x,y,width,height);
  this.width = width;
  this.height = height;
  this.visibility=255;
  World.add(world,this.body);
}

display(){
if(this.body.speed < 2){
  var angle = this.body.angle;
  var pos = this.body.position;
  push();
  translate(pos.x,pos.y);
  rotate(angle);
  rectMode(CENTER);
  rect(0,0,this.width, this.height);
  pop();
}else{
  World.remove(world,this.body);
   push();
   this.visibility = this.visibility-5;
   tint(255,this.visibility);
   pop();
}
}

score(){
  if(this.visibility<0 && this.visibility>-105){
    score++;
  }
}
}
  