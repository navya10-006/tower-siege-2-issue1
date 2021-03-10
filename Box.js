class Box{
    constructor(x,y,width,height){
        var options={
            'restitution':0.8,
            'friction':1.0,
            'density':0.0008,
            isStatic:false
        }
        this.body=Bodies.rectangle(x,y,width,height,options);
        this.width=width;
        this.height=height;
        this.visibility = 255;
        World.add(world,this.body);
    }

    fly(){
        this.sling.bodyA=null;
    }

    attach(body){
        this.sling.bodyA=body;
    }
    display(){
        if(this.body.speed){
            var angle = this.body.angle;
            push();
            translate(this.body.position.x, this.body.position.y);
            rotate(angle);
            rectMode(CENTER);
            fill("pink");
            rect(0, 0, this.width, this.height);
            pop();
        }
        else{
            World.remove(world,this.body);
            push();
            this.visibility=this.visibility-5;
            tint(255,this.visibility);
            rect(this.body.position.x,this.body.position.y,50,50);
            pop();
        }
        //console.log(this.body.speed);
    }
}