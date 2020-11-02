class Roof{
    constructor(x,y,width){
        var optionsground ={
            isStatic: true
        }
        this.x = x;
        this.y = y;
        this.width = width;
        this.body = Bodies.rectangle(this.x,this.y,this.width, 40, optionsground);
        World.add (world ,  this.body);
        

    }
    display(){
        push();
        rectMode(CENTER);
        strokeWeight(3);
        fill("grey");
        rect(this.x , this.y, this.width, 40);
        pop ();
               
    }
}