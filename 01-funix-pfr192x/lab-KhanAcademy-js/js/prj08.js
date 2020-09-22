var xPositions = [];
var yPositions = [];
var dropSpeeds = [];
var colorR = [];
var colorG = [];
var colorB = [];
var windSpeed = 3;

function setup() {
    createCanvas(400, 400);
    noStroke();
    for (var i = 0; i < 200; i++) {
        xPositions.push(random(-150, 300));
        yPositions.push(random(-300, 0));
        dropSpeeds.push(random(3, 5));
        colorR.push(random(0, 256));
        colorG.push(random(0, 256));
        colorB.push(random(0, 256));
    }
}

function draw() {
    background(33, 33, 33);

    for (var i = 0; i < xPositions.length; i++) {
        fill(colorR[i], colorG[i], colorB[i]);
        ellipse(xPositions[i], yPositions[i], 5, 10);
        xPositions[i] += windSpeed;
        yPositions[i] += dropSpeeds[i];
        if (xPositions[i] > 400) {
            xPositions[i] = random(-150, 400);
        }
        if (yPositions[i] > 400) {
            yPositions[i] = 0;
        }
    }
}