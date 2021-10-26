class Polygon{
    constructor(x,y,r){
        var options={
            'restitution': 0.8,
            'friction': 1.0,
            'density': 20
        }
        this.x=x;
        this.y=y;
        this.r=r;
        this.polygon = Bodies.circle(x,y,r,options);
        //this.image = loadImage("polygon.png");
        World.add(world,this.polygon);
    }
    display(){
        var angle = this.polygon.angle;
        this.polygon.position.x = mouseX;
        this.polygon.position.y = mouseY;
        push();
        translate(this.polygon.position.x,this.polygon.position.y);

        rotate(angle);
        //imageMode(CENTER);
        //image(this.image,0,0,this.r);
        ellipseMode(RADIUS);
        ellipse(0,0,this.r);
        pop()
    }
}