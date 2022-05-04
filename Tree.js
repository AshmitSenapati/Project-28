class Tree {

    constructor(x,y,width,height){
        var options = {
            isStatic: true
        }
        this.width = width;
        this.height = height;
        this.image = loadImage("tree.png");
        this.body = Bodies.rectangle(x,y,width,height,options)
        
        World.add(world,this.body);
    }

    display(){
        var posBottom=this.body.position;
        push()
        translate(posBottom.x, posBottom.y+10);
        fill(255)
        imageMode(CENTER);
        image(this.image, 0,-this.height/2,this.hidth, this.height)
        pop()
        
}

}