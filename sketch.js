function setup(){
    createCanvas(2736,1824);
    background("lightblue");
    fill("yellow");
    rect(30, 20, 55, 55);
    fill("red");
    rect(30, 120, 55, 55);  
    fill("black");
    rect(30, 220, 55, 55);
    fill("green");

  

}
function mouseDragged(){
    fill("blue");
    ellipse(mouseX,mouseY,23,23);

    return false;
}
function mouseClicked() {
    if(mouseX > 30 && mouseX < 85 && mouseY > 20 && mouseY < 75 ){

  
     fill("black");  
    }
}
  

