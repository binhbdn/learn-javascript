function setup() {
    createCanvas(400, 400);
    let cokeImg1 = loadImage("images/coke1.jpg");
    let cokeImg2 = loadImage("images/coke2.png");
    let cokeImg3 = loadImage("images/coke3.png");

    fill(255, 0, 0);
    textSize(40);
    text("Coca-Cola", 10, 50);

    fill(0, 0, 214);
    textSize(15);
    text("tasty and unique Cola flavor", 30, 80);

    fill(136, 0, 214);
    text("natural ingredients", 30, 110);

    fill(255, 162, 0);
    textSize(25);
    text("refreshing positive energy", 30, 150);

    draw = function() {
        image(cokeImg1, 0, 170);
        image(cokeImg2, 100, 170);
        image(cokeImg3, 200, 170);
    };
}