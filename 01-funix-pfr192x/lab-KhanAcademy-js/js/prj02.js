function setup() {
    createCanvas(400, 400);
}

var xPos = 15;
var yPos = 325;

function draw() {
    background(7, 12, 48);
    fill(255, 242, 0); // moon color
    ellipse(70 + (xPos - 15) / 4, 100 + (yPos - 325), 50, 50); // moon

    fill(145, 94, 5); // fixed stars color

    ellipse(314, 36, 6, 6); // fixed stars
    ellipse(270, 184, 9, 9);
    ellipse(59, 321, 3, 3);
    ellipse(92, 352, 4, 4);
    ellipse(104, 327, 6, 6);

    fill(255, 170, 0); // moving stars color

    ellipse(xPos, yPos, 10, 10); // moving stars
    ellipse(xPos - 15, yPos - 100, 5, 5);
    ellipse(400 - xPos * 1.2, 400 - yPos * 0.9, 7, 7);
    ellipse(400 - xPos - 80, 400 - yPos + 20, 3, 3);

    xPos += 0.25;
    yPos -= 0.1;

    if (xPos > 400) { xPos = 15; }
    if (yPos < 0) { xPos = 325; }
};