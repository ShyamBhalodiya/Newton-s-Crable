class Roof {
    constructor(x, y, w, h) {
        var options = {
            isStatic: true
        }
        this.height = h;
        this.width = w;
        this.body = Bodies.rectangle(x, y, height, width, options);
        World.add(world, this.body);
    }
    display() {
        var pos_roof = this.body.position;
        push();
        fill(195);
        translate(pos_roof.x,pos_roof.y)
        rectMode(CENTER);
        rect(0,0, this.width, this.height);
        pop();
    }
}