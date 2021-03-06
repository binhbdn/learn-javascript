function setup() {
    createCanvas(1350, 600);
    background(16, 180, 230);

    var drawRandomFish = function() {
        var bodyWidth = random(40, 80);
        var bodyHeight = random(bodyWidth / 5, bodyWidth / 2);
        var tailWidth = bodyWidth / random(3, 6);
        var tailHeight = bodyWidth / random(1.5, 3);

        noStroke();
        rotate(random(0, 360));

        // body
        fill(color(random(0, 255), random(0, 255), random(0, 255)));
        ellipse(0, 0, bodyWidth, bodyHeight);

        // tail &
        triangle(-bodyWidth / 2 + tailWidth / 4, 0, -bodyWidth / 2 - tailWidth, tailHeight / 2, -bodyWidth / 2 - tailWidth, -tailHeight / 2);

        // eye
        strokeWeight(1);
        stroke(33, 33, 33);
        fill(color(random(0, 255), random(0, 255), random(0, 255)));
        ellipse(bodyWidth / 4, 0, bodyHeight / 5, bodyHeight / 5);
    };


    var drawBubbles = function() {
        var bubbleSize = random(5, 10);

        resetMatrix();
        translate(random(0, 1350), random(0, 600));
        rotate(random(-45, 45));

        stroke(19, 153, 194);
        strokeWeight(1);
        fill(69, 198, 237);
        //lipse(0, 0, bubbleSize,bubbleSize*0.9);
        ellipse(0, -1, bubbleSize, bubbleSize * 0.85);

        rotate(random(30, 60));
        noStroke();
        fill(255, 255, 255);
        ellipse(0, -bubbleSize * 0.25, bubbleSize * 0.5, bubbleSize * 0.35);
    };

    for (var i = 0; i < 1000; i++) {
        drawBubbles();
    }

    for (var i = 0; i < 100; i++) {
        resetMatrix();
        translate(random(0, 1350), random(0, 600));
        drawRandomFish(0, 0);
    }

    mouseReleased = function() {
        resetMatrix();
        translate(mouseX, mouseY);
        drawRandomFish();
    };
}

function draw() {};