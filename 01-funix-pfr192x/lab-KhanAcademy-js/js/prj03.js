function setup() {
    createCanvas(400, 400);
}

var bodyX = 200;
var bodyY = 240;
var bodyW = 340;
var faceW = bodyW / 2;

var direction = 1;
var footSize = bodyW / 4;
var leftEyeSize = 10;
var rightEyeSize = 10;

function draw() {
    faceW = bodyW / 2;
    footSize = bodyW / 4;

    background(42, 168, 143);

    fill(112, 79, 14); // body
    ellipse(bodyX, bodyY, bodyW, 0.9 * bodyW);
    ellipse(bodyX, bodyY - faceW, faceW, 0.8 * faceW); // face


    fill(137, 32, 153); // foots
    ellipse(bodyX - bodyW * 0.4, bodyY - bodyW * 0.35, footSize * 0.9, footSize);
    ellipse(bodyX + bodyW * 0.4, bodyY - bodyW * 0.35, footSize * 0.9, footSize);
    ellipse(bodyX - bodyW * 0.4, bodyY + bodyW * 0.35, footSize, footSize * 0.9);
    ellipse(bodyX + bodyW * 0.4, bodyY + bodyW * 0.35, footSize, footSize * 0.9);

    fill(168, 30, 25); // mouth
    ellipse(bodyX, bodyY - faceW * 0.8, faceW / 2, faceW / 5);

    fill(107, 59, 8); // nose
    ellipse(bodyX, bodyY - faceW, faceW / 5, faceW / 10);

    fill(0, 0, 0); // eye
    ellipse(bodyX - faceW / 4, bodyY - faceW * 1.2, leftEyeSize, leftEyeSize);
    ellipse(bodyX + faceW / 4, bodyY - faceW * 1.2, rightEyeSize, rightEyeSize);

    // Attack!
    if (bodyW === 341) {
        direction = -1;
    } else {
        if (bodyW === 100) {
            direction = 1;
        }
    }

    bodyW += direction;

    leftEyeSize += direction * 0.2;
    rightEyeSize -= direction * 0.01;
};