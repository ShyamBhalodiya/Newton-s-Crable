class bob {
    constructor(x, y,r) {
        var options = {
            isStatic:false,
            restitution:1,
            friction:0,
            density:0.8,
        }
        this.r = r;
        this.body = Bodies.circle(x, y, r/2,options);
        World.add(world, this.body);
    }
    display() {
        var pospaper = this.body.position;
        push();
        fill(255, 0, 225);
        translate(pospaper.x, pospaper.y);
        //rotate(angle)
        ellipseMode(CENTER); 
        //stroke(0, 100, 0);
        ellipse(0, 0, this.r);
        pop();
    }
}