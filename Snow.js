class Snow {
    constructor(x,y,r){
        var options ={
            'restitution' : 0.5
        }
        this.r = r;
        this.body = Bodies.circle(x, y,this.r,options) ;
        this.image = loadImage("snow4.webp");
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle; 
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.r*4,this.r*4);
        pop();


    }
}