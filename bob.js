class bob {
    constructor(x, y) {
        this.body = Bodies.circle(x, y, 50);
        World.add(world, this.body);
    }
    display() {
        var pos = this.body.position;
        fill(55, 0, 0);
        ellipseMode(CENTER);
        stroke(0,100,0);
        ellipse(pos.x, pos.y, 50);
    }
}