class Bob{

    constructor(x,y,radius){

        var options={
            restitution:1
        }
    this.body=Bodies.circle(x,y,radius,options);
    World.add(world,this.body);

    this.radius=radius;
    }
    display(){
        ellipseMode(RADIUS)
        stroke(250,0,0);
        strokeWeight(5);
        ellipse(this.body.position.x,this.body.position.y,this.radius,this.radius);
    }
}