class Box{
  constructor(x, y, width, height) {
      var options = {
          'restitution':0.8,
          'friction':0.3,
          'density':0.2
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.image = loadImage("images.png");
      this.width = width;
      this.height = height;
      this.Visiblity = 255;
      World.add(world, this.body);
    }

    score(){
      if(this.visibility<0 && this.visibility>-105){
        score++;
      }
   }
   
    display(){

      if(this.body.speed < 3){
        var pos = this.body.position

        fill("black");
      var angle = this.body.angle;
      push();
      translate(this.body.position.x, this.body.position.y);
      rotate(angle);
      rectMode(CENTER);
      rect(0, 0, this.width, this.height);
      pop();
       }
       else{
         World.remove(world, this.body);
         
         push();
         this.Visibility = this.Visibility-5;
         tint(255,this.Visibility);
         rect(this.body.position.x, this.body.position.y, 50, 50);
         pop();
       }




}
}