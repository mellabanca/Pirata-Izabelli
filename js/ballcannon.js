class BallCannon {
    constructor(x, y){

        var options = {
            isStatic: true
        }

        this.raio = 30;
        this.image = loadImage("./assets/cannonball.png");
        this.body = Bodies.circle(x, y, this.raio, options);
        World.add(world,this.body);
    }

    show(){
        var pos = this.body.position;
        push();
        imageMode(CENTER);
        image(this.image, pos.x, pos.y, this.raio, this.raio);
        pop();
    }
}