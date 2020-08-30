class Roof {
    constructor(x, y, w, h) {
        var options = {
            isStatic: true
        }
        this.body = Bodies.rectangle(x, y, height, width, options);
        this.height = h;
        this.width = w;
        World.add(world, this.body);
    }
    display() {
        var pos_roof = this.body.position;
        fill(195);
        rectMode(CENTER);
        rect(pos_roof.x, pos_roof.y, this.width, this.height);
    }
}