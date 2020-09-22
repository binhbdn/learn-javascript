function setup() {
    createCanvas(400, 400);
    fill(0, 0, 0);
    ellipse(200, 200, 375, 375);
    fill(60, 0, 255);
    triangle(200, 104, 280, 280, 120, 280);
    fill(255, 255, 255);
    var answer = floor(random(1, 5));
    if (answer === 1) {
        fill(255, 0, 0);
        text("No.1", 176, 200);
        text("MESSAGE 1", 159, 229);
    } else if (answer === 2) {
        fill(0, 255, 0);
        text("No.2", 176, 200);
        text("MESSAGE 2", 159, 229);
    } else if (answer === 3) {
        fill(0, 255, 255);
        text("No.3", 176, 200);
        text("MESSAGE 3", 159, 229);
    } else if (answer === 4) {
        fill(255, 255, 0);
        text("No.4", 176, 200);
        text("MESSAGE 4", 159, 229);
    }
}

function draw() {};