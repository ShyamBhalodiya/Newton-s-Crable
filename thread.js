class chain {
    constructor(bodya, bodyb, pointx, pointy) {
        this.px = pointx;
        this.py = pointy;
        var option = {
            bodyA: bodya,
            bodyB: bodyb,
            pointB: {
                x: this.px,
                y: this.py
            },
            length: 400,
            stiffness: 1
        }
        this.rope = Constraint.create(option);
        World.add(world, this.rope);
    }
    display() {
        var Pointa = this.rope.bodyA.position;
        var Pointb = this.rope.bodyB.position;

        strokeWeight(2);
        var Anchorax = Pointa.x ;
        var Anchoray = Pointa.y ;

        var Anchorbx = Pointb.x + this.px;
        var Anchorby = Pointb.y + this.py;

        line(Anchorax, Anchoray, Anchorbx, Anchorby);
    }
}