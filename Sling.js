class Sling {

    constructor(bodyA,pointB) {

        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 5
        }
        this.bodyA = bodyA
        this.pointB = pointB;
        this.body = Constraint.create(options);

        World.add(world,this.body);
    }

    fly(){
        this.body.bodyA = null
    }

    attach() {
        this.body.bodyA = body
    }

    display(){
        if (this.body.bodyA){
        var pointA = this.body.bodyA.position
        var pointB = this.pointB
        //push();
        stroke("green")
        strokeWeight(5)
        line(pointA.x,pointA.y,pointB.x,pointB.y)
        //pop();
        }
    }
}