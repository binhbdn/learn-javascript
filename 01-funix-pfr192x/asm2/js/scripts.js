// thực thi trong "chế độ nghiêm ngặt"
"use strict";

// Biến lưu trữ giá trị số thứ nhất:
var myNumber1 = NaN;

// Biến lưu trữ giá trị số thứ hai:
var myNumber2 = NaN;

// Biến lưu trữ kết quả tính toán:
var result = NaN;

// Biến lưu trữ ô nhập liệu hiện hành (nhận giá trị là đối tượng ô nhập liệu thứ nhất hoặc thứ hai):
var curentInputObject;

// Hàm này chạy 1 lần sau khi HTML load xong - đặt các giá trị ngầm định:
function firstInitialization() {
    // Ban đầu, gán Biến lưu trữ ô nhập liệu hiện hành nhận giá trị là đối tượng ô nhập liệu thứ nhất:
    curentInputObject = document.calculator.number1;
    // Đặt màu nền cho ô nhập liệu thứ nhất:
    document.calculator.number1.style.background = "#007bff";
};

// Khi ô nhập liệu thứ nhất được chọn:
function number1Selected() {
    // Gán Biến lưu trữ ô nhập liệu hiện hành nhận giá trị là đối tượng ô nhập liệu thứ nhất:
    curentInputObject = document.calculator.number1;
    // Đặt lại màu nền cho ô nhập liệu thứ nhất, thứ hai và ô hiển thị chung:
    document.calculator.number1.style.background = "#007bff";
    document.calculator.number2.style.background = "inherit";
    document.calculator.display.style.background = "inherit";
};

// Khi ô nhập liệu thứ hai được chọn:
function number2Selected() {
    // Gán Biến lưu trữ ô nhập liệu hiện hành nhận giá trị là đối tượng ô nhập liệu thứ hai:
    curentInputObject = document.calculator.number2;
    // Đặt lại màu nền cho ô nhập liệu thứ nhất, thứ hai và ô hiển thị chung:
    document.calculator.number1.style.background = "inherit";
    document.calculator.number2.style.background = "#007bff";
    document.calculator.display.style.background = "inherit";
};

// Khi Bảng hiển thị chung được chọn:
function displaySelected() {
    // Gán Biến lưu trữ ô nhập liệu hiện hành nhận giá trị là đối tượng Bảng hiển thị chung:
    curentInputObject = document.calculator.display;
    // Đặt lại màu nền cho ô nhập liệu thứ nhất, thứ hai và ô hiển thị chung:
    document.calculator.number1.style.background = "inherit";
    document.calculator.number2.style.background = "inherit";
    document.calculator.display.style.background = "#007bff";
};

// Hàm xóa kết quả tính toán giữa hai số:
function resultReset() {
    // Xóa kết quả tính toán giữa hai số:
    myNumber1 = NaN;
    myNumber2 = NaN;
    result = NaN;
    document.calculator.resultDisplay.value = "";
    // Gọi Hàm đặt màu nền cho một số phần tử về màu mặc định:
    setDefaultBgColor();
};

// Hàm nhập liệu giá trị toán hạng bằng bàn phím số:
function inputNumberByButton(text) {
    curentInputObject.value += text;
    // Gọi Hàm xóa kết quả tính toán giữa hai số:
    if (curentInputObject !== document.calculator.display) {
        resultReset();
    };

};

// Hàm nhập liệu toán tử bằng bàn phím số:
function inputOperator(curentOperator) {
    if (curentInputObject == document.calculator.display) {
        curentInputObject.value += curentOperator;
    };
};

// Hàm xóa dữ liệu nhập vào cho đối tượng hiện hành:
function inputClear() {
    curentInputObject.value = "";
    // Gọi Hàm xóa kết quả tính toán giữa hai số:
    resultReset();
};

// Hàm đổi sang số nghịch đảo:
function inverseToggle() {
    curentInputObject.value = -eval(curentInputObject.value);
};

// Hàm xóa số cuối cùng:
function clearAtLast() {
    let txt = curentInputObject.value;
    let len = txt.length;
    if (len > 0) {
        curentInputObject.value = txt.substring(0, len - 1);
    };
};

// Hàm chèn dấu ngoặc vào trong biểu thức toán học:
function insertParentheses() {
    if (curentInputObject == document.calculator.display) {
        let txt = curentInputObject.value;
        let len = txt.length;
        let lastChar = txt.substring(len - 1, len)

        switch (lastChar) {
            case "":
            case "+":
            case "-":
            case "*":
            case "/":
            case "(":
                inputNumberByButton('(');
                break;
            default:
                inputNumberByButton(')');
        };
    };
};


// Hàm gán giá trị cho hai biến ứng với hai số:
function get2NumberValue() {
    if (document.calculator.number1.value == "") {
        alert("Chưa có giá trị cho số thứ nhất. Vui lòng nhập trước khi thực hiện phép tính");
        myNumber1 = NaN;
    } else {
        myNumber1 = Number(document.calculator.number1.value);
        if (myNumber1 == NaN) { alert("Ô nhập liệu thứ nhất không chứa số hợp lệ. Vui lòng nhập lại"); };
    };

    if (document.calculator.number2.value == "") {
        alert("Chưa có giá trị cho số thứ hai. Vui lòng nhập trước khi thực hiện phép tính");
        myNumber1 = NaN;
    } else {
        myNumber2 = Number(document.calculator.number2.value);
        if (myNumber2 == NaN) { alert("Ô nhập liệu thứ hai không chứa là số hợp lệ. Vui lòng nhập lại"); };
    };
};

// Hàm đặt màu nền cho một số phần tử về màu mặc định:
function setDefaultBgColor() {
    // Đặt lại màu nền cho 4 nút phép toán:
    document.calculator.plus.style.background = "inherit";
    document.calculator.minus.style.background = "inherit";
    document.calculator.times.style.background = "inherit";
    document.calculator.div.style.background = "inherit";
    document.calculator.exp.style.background = "inherit";
    document.calculator.modulus.style.background = "inherit";
    // Đặt lại màu nền cho ô kết quả tính toán:
    document.calculator.resultDisplay.style.background = "inherit";
};

// Khi nút Cộng hai số được chọn:
function plusSelected() {
    // Gọi Hàm đặt màu nền cho một số phần tử về màu mặc định:
    setDefaultBgColor();
    // Đặt lại màu nền cho nút phép Cộng:
    document.calculator.plus.style.background = "yellow";
    // Đặt lại màu nền cho ô kết quả tính toán:
    document.calculator.resultDisplay.style.background = "yellow";
    // Gọi Hàm gán giá trị cho hai biến ứng với hai số:
    get2NumberValue();
    // Tính tổng hai số và lưu vào biến kết quả:
    result = myNumber1 + myNumber2;
    document.calculator.resultDisplay.value = result;
};

// Khi nút Trừ hai số được chọn:
function minusSelected() {
    // Gọi Hàm đặt màu nền cho một số phần tử về màu mặc định:
    setDefaultBgColor();
    // Đặt lại màu nền cho nút phép Trừ:
    document.calculator.minus.style.background = "yellow";
    // Đặt lại màu nền cho ô kết quả tính toán:
    document.calculator.resultDisplay.style.background = "yellow";
    // Gọi Hàm gán giá trị cho hai biến ứng với hai số:
    get2NumberValue();
    // Tính hiệu hai số và lưu vào biến kết quả:
    result = myNumber1 - myNumber2;
    document.calculator.resultDisplay.value = result;
};

// Khi nút Nhân hai số được chọn:
function timesSelected() {
    // Gọi Hàm đặt màu nền cho một số phần tử về màu mặc định:
    setDefaultBgColor();
    // Đặt lại màu nền cho nút phép Nhân:
    document.calculator.times.style.background = "yellow";
    // Đặt lại màu nền cho ô kết quả tính toán:
    document.calculator.resultDisplay.style.background = "yellow";
    // Gọi Hàm gán giá trị cho hai biến ứng với hai số:
    get2NumberValue();
    // Tính tích hai số và lưu vào biến kết quả:
    result = myNumber1 * myNumber2;
    document.calculator.resultDisplay.value = result;
};

// Khi nút Chia hai số được chọn:
function divSelected() {
    // Gọi Hàm đặt màu nền cho một số phần tử về màu mặc định:
    setDefaultBgColor();
    // Đặt lại màu nền cho nút phép Chia:
    document.calculator.div.style.background = "yellow";
    // Đặt lại màu nền cho ô kết quả tính toán:
    document.calculator.resultDisplay.style.background = "yellow";
    // Gọi Hàm gán giá trị cho hai biến ứng với hai số:
    get2NumberValue();
    // Tính thương hai số và lưu vào biến kết quả:
    if (myNumber2 == 0) {
        alert("Không thực hiện được phép chia một số cho số 0. Vui lòng nhập lại giá trị số thứ hai");
        result = "Không thực hiện được phép chia một số cho số 0";
    } else {
        result = myNumber1 / myNumber2;
    };
    document.calculator.resultDisplay.value = result;
};

// Khi nút Lũy thừa được chọn:
function exponentiationSelected() {
    // Gọi Hàm đặt màu nền cho một số phần tử về màu mặc định:
    setDefaultBgColor();
    // Đặt lại màu nền cho nút phép Lũy thừa:
    document.calculator.exp.style.background = "yellow";
    // Đặt lại màu nền cho ô kết quả tính toán:
    document.calculator.resultDisplay.style.background = "yellow";
    // Gọi Hàm gán giá trị cho hai biến ứng với hai số:
    get2NumberValue();
    // Tính lũy thừa và lưu vào biến kết quả:
    result = myNumber1 ** myNumber2;
    document.calculator.resultDisplay.value = result;
};

// Khi nút Chia hai số lấy phần dư được chọn:
function modulusSelected() {
    // Gọi Hàm đặt màu nền cho một số phần tử về màu mặc định:
    setDefaultBgColor();
    // Đặt lại màu nền cho nút phép Chia lấy phần dư:
    document.calculator.modulus.style.background = "yellow";
    // Đặt lại màu nền cho ô kết quả tính toán:
    document.calculator.resultDisplay.style.background = "yellow";
    // Gọi Hàm gán giá trị cho hai biến ứng với hai số:
    get2NumberValue();
    // Chia lấy phần dư và lưu vào biến kết quả:
    if (myNumber2 == 0) {
        alert("Không thực hiện được phép chia lấy phần dư cho số 0. Vui lòng nhập lại giá trị số thứ hai");
        result = "Không thực hiện được phép chia lấy phần dư cho số 0";
    } else {
        result = myNumber1 % myNumber2;
    };
    document.calculator.resultDisplay.value = result;
};

// Hàm tính giá trị biểu thức toán học:
function expressionEval() {
    let myExp = document.calculator.display.value;
    let myEval = eval(myExp);
    document.calculator.display.value = myExp + "=" + myEval;
};