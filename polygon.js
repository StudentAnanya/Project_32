class Polygon{
    constructor(x,y,r){
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
      this.body = Bodies.circle(x,y,r,options);
      this.r=r;
      World.add(world,this.body);
    }
    display(){
    var Polypos = this.body.position;
    push();
    translate(Polypos.x,Polypos.y);
    ellipseMode(RADIUS);
    circle(0,0,this.r);
    pop();
    }
    }
      