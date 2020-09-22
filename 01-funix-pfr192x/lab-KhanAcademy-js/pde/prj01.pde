void setup(){
    size(400, 400);
    background(186, 145, 20); // wooden table

    fill(255, 255, 255);
    ellipse(200, 200, 350, 350); // plate
    ellipse(200, 200, 300, 300);

    ellipse(150, 250, 100, 150); //1st egg
    fill(255, 235, 0);
    ellipse(150, 280, 65, 75);

    fill(255, 255, 255);
    ellipse(260, 240, 100, 150); //2nd egg
    fill(255, 235, 0);
    ellipse(260, 270, 65, 75);

    fill(99, 59, 59); // 3 biscuss
    ellipse(265, 110, 60, 60);
    ellipse(250, 105, 60, 60);
    ellipse(235, 120, 60, 60);

    fill(200, 255, 0); //an apple
    ellipse(110, 145, 55, 60);
    fill(0, 0, 0);
    ellipse(125, 130, 5, 5);

    fill(166, 9, 219); // grapes
    ellipse(152, 88, 20, 30);
    ellipse(165, 105, 20, 30);
    ellipse(176, 125, 20, 30);
    ellipse(168, 78, 20, 30);
    ellipse(179, 98, 20, 30);
    ellipse(185, 75, 20, 30);
    strokeWeight(5);
    stroke(110, 101, 112);
    line(190, 99, 205, 97);

    stroke(181, 63, 0); // cheese
    strokeWeight(10);
    line(133, 139, 217, 195);
    strokeWeight(7);
    line(120, 245, 220, 196);
    noStroke();
    fill(224, 119, 0);
    triangle(116, 247, 214, 197, 128, 138);
};
void draw(){};