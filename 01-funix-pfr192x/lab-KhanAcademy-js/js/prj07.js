function setup() {
    createCanvas(400, 400);
    let imgRoof = loadImage("images/RoofSouth.png");
    let imgWood = loadImage("images/WoodBlock.png");
    let imgDoor = loadImage("images/DoorTallClosed.png");
    let imgStone = loadImage("images/StoneBlockTall.png");
    let imgGrass = loadImage("images/GrassBlock.png");
    let imgTree = loadImage("images/TreeUgly.png");
    background(219, 255, 255);
    draw = function() {
        //roof
        for (var i = 0; i < 6; i++) {
            for (var j = 0; j < i + 2; j++) {
                image(imgRoof, 185 + j * 30, 15 + i * 21, 30, 30);
                image(imgRoof, 185 - j * 30, 15 + i * 21, 30, 30);
            }
        }
        fill(219, 255, 255);
        noStroke();
        rect(0, 0, 400, 28);
        quad(0, 28, 0, 150, 50, 150, 200, 28);
        quad(400, 28, 400, 150, 350, 150, 200, 28);

        noFill();
        stroke(0, 0, 0);
        triangle(200, 28, 350, 150, 50, 150);

        //wood wall
        for (var i = 0; i < 14; i++) {
            for (var j = 0; j < 5; j++) {
                image(imgWood, 60 + i * 20, 133 + j * 41, 20, 60);
            }
        }
        noFill();
        rect(60, 150, 280, 207);

        //windows
        fill(184, 253, 255);
        for (var i = 0; i < 3; i++) {
            rect(85 + i * 90, 170, 50, 60);
            for (var j = 1; j < 5; j++) {
                line(85 + i * 90 + j * 10, 170, 85 + i * 90 + j * 10, 230);
            }
            for (var j = 0; j < 5; j++) {
                line(85 + i * 90, 180 + j * 10, 135 + i * 90, 180 + j * 10);
            }
        }

        //door
        fill(120, 80, 19);
        rect(180, 280, 40, 77);
        image(imgDoor, 160, 245, 80, 120);

        //fence wall
        image(imgStone, 0, 310, 60, 50);
        image(imgStone, 340, 310, 60, 50);

        // grass & tree
        for (var i = 0; i < 8; i++) {
            //grass
            image(imgGrass, i * 50, 340, 50, 60);
            if (i < 3 || i > 4) {
                //tree
                image(imgTree, i * 50 + 10, 290, 30, 90);
            }
        }
    }
}