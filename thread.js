class chain {
    constructor(bodya, bodyb, pointx, pointy) {
        this.px = pointx;
        this.py = pointy;
        var option = {
            bodyA: bodya,
            bodyB: bodyb,
            pointA: {
                x: this.px,
                y: this.py
            },
            length: 100
        }
        this.body = Constraint.create(option);
        World.add(world, this.body);
    }
    display() {
        var Pointa = this.body.bodyA.position;
        var Pointb = this.body.bodyB.position;

        strokeWeight(2);
        var Anchorbx = Pointb.x;
        var Anchorby = Pointb.y;

        var Anchorax = Pointa.x + this.px;
        var Anchoray = Pointa.y + this.py;
        line(Anchorax, Anchoray, Anchorbx, Anchorby);
    }
}