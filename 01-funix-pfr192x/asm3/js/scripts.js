// Hàm kiểm tra form nhập vào có hợp lệ hay không:
function checkRegistrationForm() {
    // Biến kiểm tra form có hợp lệ hay không:
    let isFormCorrect;
    // Biến lưu trữ chuỗi ký tự hoặc giá trị nhập vào:
    let inputStr;

    // Tạo nhãn (lable) cho khối lệnh kiểm tra:
    checkList: {
        // Kiểm tra Chuỗi Họ:
        inputStr = document.registrationForm.lastName.value;
        // Kiểm tra Chuỗi Họ có chứa 2-30 ký tự hay không:
        isFormCorrect = checkNumberOfCharacters(inputStr, 2, 30);
        if (!isFormCorrect) {
            alert('Vui lòng nhập Họ với tối thiểu 2 ký tự và tối đa 30 ký tự!');
            // document.registrationForm.lastName.focus();
            break checkList;
        };
        // Kiểm tra Chuỗi Họ có phải chỉ chứa chữ cái và ký tự khoảng trắng ' ' hay không:
        isFormCorrect = isAlpha(inputStr);
        if (!isFormCorrect) {
            alert('Vui lòng nhập Họ chỉ với chữ cái và có thể thêm ký tự khoảng trắng!');
            break checkList;
        };

        // Kiểm tra Chuỗi Tên:
        inputStr = document.registrationForm.firstName.value;
        // Kiểm tra Chuỗi Tên có chứa 2-30 ký tự hay không:
        isFormCorrect = checkNumberOfCharacters(inputStr, 2, 30);
        if (!isFormCorrect) {
            alert('Vui lòng nhập Tên với tối thiểu 2 ký tự và tối đa 30 ký tự!');
            break checkList;
        };
        // Kiểm tra Chuỗi Tên có phải chỉ chứa chữ cái và ký tự khoảng trắng ' ' hay không:
        isFormCorrect = isAlpha(inputStr);
        if (!isFormCorrect) {
            alert('Vui lòng nhập Tên chỉ với chữ cái và có thể thêm ký tự khoảng trắng!');
            break checkList;
        };

        // Kiểm tra Chuỗi địa chỉ email:
        inputStr = document.registrationForm.email.value;
        // Kiểm tra Chuỗi địa chỉ email bằng Hàm tự lập:
        isFormCorrect = checkEmail(inputStr);
        // if (!isFormCorrect) { break checkList; };

        // Kiểm tra lại Chuỗi địa chỉ email bằng cách sử dụng RegExp:
        isFormCorrect = checkEmailValidateByUseRegExp(inputStr);
        if (!isFormCorrect) {
            alert('Vui lòng nhập địa chỉ email theo định dạng username@subdomain.domain');
            break checkList;
        };

        // Kiểm tra Chuỗi Mật khẩu:
        inputStr = document.registrationForm.password.value;
        // Kiểm tra Chuỗi Mật khẩu có chứa 6-30 ký tự hay không:
        isFormCorrect = checkNumberOfCharacters(inputStr, 6, 30);
        if (!isFormCorrect) {
            alert('Vui lòng nhập Mật khẩu với tối thiểu 6 ký tự và tối đa 30 ký tự!');
            break checkList;
        };
        // Kiểm tra Chuỗi Mật khẩu nhập lại:
        const rePass = document.registrationForm.reInputPassword.value;
        if (rePass == "") {
            alert('Vui lòng nhập lại Mật khẩu!');
            break checkList;
        } else {
            if (inputStr !== rePass) {
                alert('Mật khẩu chưa khớp, vui lòng nhập lại!');
                break checkList;
            };
        };

        // Kiểm tra Năm sinh đã được nhập vào hay chưa:
        inputStr = document.registrationForm.yearOfBirth.value;
        if (inputStr == '0') {
            alert('Vui lòng chọn năm sinh!');
            break checkList;
        };

        // Giới tính không bắt buộc nhập vào nên không kiểm tra

        // Kiểm tra Thành phố đã được nhập vào hay chưa:
        inputStr = document.registrationForm.city.value;
        if (inputStr == '0') {
            alert('Vui lòng chọn thành phố!');
        } else {
            alert('Chúc mừng bạn đã đăng ký thành công');
        };

    }
};

// Hàm kiểm tra Chuỗi có phải chỉ bao gồm chữ cái hoặc ký tự khoảng trắng hay không:
function isAlpha(inputStr) {
    const len = inputStr.length;
    if (len > 0) {
        // Chuyển sang chữ thường + loại bỏ dấu tiếng Việt trong Chuỗi:
        let str = inputStr.toLowerCase().normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '').replace(/đ/g, 'd').replace(/Đ/g, 'D');
        // alert('"' + str + '"');
        let char;
        for (let i = 0; i < len; i++) {
            char = str[i];
            if (char == ' ') {
                if (i == 0) {
                    alert('Chuỗi không được bắt đầu bằng ký tự khoảng trắng!');
                    return false;
                } else if (i == len - 1) {
                    alert('Chuỗi không được kết thúc bằng ký tự khoảng trắng!');
                    return false;
                } else {
                    if (char == str[i - 1]) {
                        alert('Chuỗi không được có các ký tự khoảng trắng liền nhau!');
                        return false;
                    };
                };
            } else if (char < 'a' || char > 'z') {
                alert('Chuỗi không được có các ký tự đặc biệt!');
                return false;
            };
        };
        return true;
    } else {
        return false;
    }
};

// Hàm kiểm tra Chuỗi có thỏa mãn số lượng ký tự nhập vào:
function checkNumberOfCharacters(inputStr, minNum /* included */ , maxNum /* included */ ) {
    const len = inputStr.length;
    if (len < minNum || len > maxNum) {
        return false;
    } else {
        return true;
    }
};

// Hàm kiểm tra Chuỗi địa chỉ email bằng Hàm tự lập:
// 1. Không được có khoảng trắng
// 2. Phải có ký tự @ vàkKý tự @ không nằm ở vị trí đầu
// 3. Phải có ít nhất một dấu.trong địa chỉ email
// 4. Phải có ít nhất một ký tự nằm sau @ và nằm trước dấu chấm "." cuối cùng
// 5. Phải có ít nhất một ký tự sau dấu "." cuối cùng
function checkEmail(inputStr) {
    const len = inputStr.length;
    if (len > 0) {
        if (inputStr.indexOf(' ') == -1) {
            const atSignPos = inputStr.indexOf('@');
            if (atSignPos == -1) {
                alert('Địa chỉ Email phải chứa ký tự @!');
                return false;
            } else if (atSignPos == 0) {
                alert('Địa chỉ Email không được phép bắt đầu bằng ký tự @!');
                return false;
            } else {
                const lastDotSignPos = inputStr.lastIndexOf('.');
                if (lastDotSignPos == -1) {
                    alert('Địa chỉ Email phải chứa dấu chấm "."');
                    return false;
                } else if (lastDotSignPos - atSignPos > 1) {
                    if (lastDotSignPos == len - 1) {
                        alert('Địa chỉ Email phải chứa ít nhất một ký tự sau dấu chấm "." cuối cùng');
                        return false;
                    } else {
                        return true;
                    };
                } else {
                    alert('Địa chỉ Email phải chứa ít nhất một ký tự nằm sau @ và đồng thời nằm trước dấu chấm "." cuối cùng');
                    return false;
                };
            };
        } else {
            alert('Địa chỉ Email không được có khoảng trắng!');
            return false;
        };
    } else {
        alert('Bạn chưa điền thông tin email!');
        return false;
    };
};

// Hàm kiểm tra Chuỗi địa chỉ email:
function checkEmailValidateByUseRegExp(inputStr) {
    const regExp = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    return regExp.test(inputStr)
};

// /(\S+)@(\S+)\.(\S+)/
// /(\S+)@(\S+)\.(\S+)/.exec('copesc@gmail.com')
// ["copesc@gmail.com", "copesc", "gmail", "com"]

// /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/