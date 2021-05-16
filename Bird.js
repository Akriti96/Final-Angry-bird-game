class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    
    this.smokeImage = loadImage("sprites/smoke.png");
    this.trajectory =[];
    this.Visibility=255;


    this.bird1 = loadImage("sprites/bird.png");
    this.bird2 = loadImage("sprites/yellowbird.png");
    this.bird3 = loadImage("sprites/bluebird.png");
  }

 //displaying red bird
 displaybird1(){
	var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.bird1, 0, 0, this.width, this.height);
        pop();
      }



  displaybird2(){
    var angle = this.body.angle;
          push();
          translate(this.body.position.x, this.body.position.y);
          rotate(angle);
          imageMode(CENTER);
          image(this.bird2, 0, 0, this.width, this.height);
          pop();
            }
      


  displaybird3(){
    var angle = this.body.angle;
          push();
          translate(this.body.position.x, this.body.position.y);
          rotate(angle);
          imageMode(CENTER);
          image(this.bird3, 0, 0, this.width, this.height);
          pop();
        }
                   

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;

    super.display();

    if(this.body.velocity.x > 10 && this.body.position.x > 200){
      var position = [this.body.position.x, this.body.position.y];
      this.trajectory.push(position);
    }
   

    for(var i=0; i<this.trajectory.length; i++){
      push();
      this.Visibility= this.Visibility-0.2;
      tint(255, this.Visibility);
      image(this.smokeImage, this.trajectory[i][0], this.trajectory[i][1]);
      pop();
    }
  }
}
