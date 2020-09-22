// Biến lưu trữ vị trí ảnh hiện hành):
var curentPos = 0; /* nhận giá trị từ 0 đến 3 */

// Mảng các Image:
var imgArray = document.getElementsByClassName("myImg");

// Mảng các Button:
var btnArray = document.getElementsByTagName("button");

// Hàm cập nhật hiển thị cho ảnh và nút:
function updateImgDisp(curent, next) {
    // Ẩn ảnh hiện hành:
    imgArray[curent].style.display = "none";
    // Thay đổi hiển thị nút hiện hành:
    btnArray[curent + 1].style.backgroundColor = "hotpink";
    btnArray[curent + 1].style.color = "inherit";
    // Thay đổi hiển thị cho nút tiếp theo:
    btnArray[next + 1].style.backgroundColor = "blue";
    btnArray[next + 1].style.color = "white";
    // Hiện ảnh tiếp theo:
    imgArray[next].style.display = "block";
    myMoveFromRightToLeft(imgArray[next]);
};

// Khi nút số 1 được ấn:
function clickButton1() {
    updateImgDisp(curentPos, 0);
    curentPos = 0;
};

// Khi nút số 2 được ấn:
function clickButton2() {
    updateImgDisp(curentPos, 1);
    curentPos = 1;
};

// Khi nút số 3 được ấn:
function clickButton3() {
    updateImgDisp(curentPos, 2);
    curentPos = 2;
};

// Khi nút số 4 được ấn:
function clickButton4() {
    updateImgDisp(curentPos, 3);
    curentPos = 3;
};

// Khi nút Previous được ấn:
function clickButtonPrevous() {
    // Biến lưu trữ vị trí ảnh được hiển thị tiếp theo):
    let nextPos = curentPos - 1;
    if (nextPos == -1) { nextPos = 3 };
    updateImgDisp(curentPos, nextPos);
    curentPos = nextPos;
};


// Khi nút Next được ấn:
function clickButtonNext() {
    // Biến lưu trữ vị trí ảnh được hiển thị tiếp theo):
    let nextPos = curentPos + 1;
    if (nextPos == 4) { nextPos = 0 };
    updateImgDisp(curentPos, nextPos);
    curentPos = nextPos;
};


// Hàm cho ảnh chuyển động từ Phải sang trái:
function myMoveFromRightToLeft(elem) {
    var pos = 710;
    var id = setInterval(frame, 5);

    function frame() {
        if (pos == 0) {
            clearInterval(id);
        } else {
            elem.style.left = pos + "px";
            pos -= 5;
        }
    }
}