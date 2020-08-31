class bob {
    constructor(x, y) {
        var options = {
            isStatic:false,
            restitution:1,
            friction:0,
            density:0.8
        }
        this.body = Bodies.circle(x, y, 50,options);
        World.add(world, this.body);
    }
    display() {
        var pospaper = this.body.position;
        push();
        fill(55, 0, 0);
        translate(pospaper.x, pospaper.y);
        //rotate(angle)
        ellipseMode(CENTER);
        //stroke(0, 100, 0);
        ellipse(0, 0, 50,50);
        pop();
    }
}