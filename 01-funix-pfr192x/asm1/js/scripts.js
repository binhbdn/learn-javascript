// Biến lưu trữ tên của người thứ nhất:
var _1st_person_name;
// Biến lưu trữ cân nặng tính bằng kilogram của người thứ nhất:
var _1st_person_weight_in_kg;
// Biến lưu trữ chiều cao tính bằng cemtimet của người thứ nhất:
var _1st_person_height_in_cm;
// Biến lưu trữ chỉ số BMI của người thứ nhất:
var _1st_person_BMI_index_in_kg_m2;

// Biến lưu trữ tên của người thứ hai:
var _2nd_person_name;
// Biến lưu trữ cân nặng tính bằng kilogram của người thứ hai:
var _2nd_person_weight_in_kg;
// Biến lưu trữ chiều cao tính bằng cemtimet của người thứ hai:
var _2nd_person_height_in_cm;
// Biến lưu trữ chỉ số BMI của người thứ hai:
var _2nd_person_BMI_index_in_kg_m2;

// Hàm lấy các giá trị ban đầu hoặc các giá trị nhập vào để gián cho các biến tương ứng:
function get_input_data(attribute_name) {
    _1st_person_name = document.form_BMI._1st_person_name.getAttribute(attribute_name);
    _1st_person_weight_in_kg = document.form_BMI._1st_person_weight.getAttribute(attribute_name);
    _1st_person_height_in_cm = document.form_BMI._1st_person_height.getAttribute(attribute_name);

    _2nd_person_name = document.form_BMI._2nd_person_name.getAttribute(attribute_name);
    _2nd_person_weight_in_kg = document.form_BMI._2nd_person_weight.getAttribute(attribute_name);
    _2nd_person_height_in_cm = document.form_BMI._2nd_person_height.getAttribute(attribute_name);
};

// Hàm tính chỉ số BMI theo đơn vị kilogram và metter
function calculate_BMI(weight_in_kg, height_in_cm) {
    /* /100: convert from cm to m; result in kg/m2 */
    return weight_in_kg / (height_in_cm / 100) ** 2;
};


// Hàm cập nhật tên của mỗi người lên các dòng tương ứng của trang web:
function update_name(person_name_class, person_name) {
    let i;
    for (i = 0; i < 4; i++) {
        document.getElementsByClassName(person_name_class)[i].innerHTML = person_name;
    };
};

function comparison_result() {
    // Cập nhật tên của từng người lên các dòng tương ứng của trang web:
    update_name("_1st_person_name_class", _1st_person_name);
    update_name("_2nd_person_name_class", _2nd_person_name);

    // Tính chỉ số BMI cho từng người:
    _1st_person_BMI_index_in_kg_m2 = calculate_BMI(_1st_person_weight_in_kg, _1st_person_height_in_cm);
    _2nd_person_BMI_index_in_kg_m2 = calculate_BMI(_2nd_person_weight_in_kg, _2nd_person_height_in_cm);

    // Hiển thị lên trang web chỉ số BMI cho từng người:
    document.getElementById("_1st_person_BMI_index_in_kg_m2_id").innerHTML = _1st_person_BMI_index_in_kg_m2;
    document.getElementById("_2nd_person_BMI_index_in_kg_m2_id").innerHTML = _2nd_person_BMI_index_in_kg_m2;

    // Xuất ra Console chỉ số BMI cho từng người:
    console.log("Chỉ số BMI của bạn " + _1st_person_name + " là " + _1st_person_BMI_index_in_kg_m2 + " kg/m2");
    console.log("Chỉ số BMI của bạn " + _2nd_person_name + " là " + _2nd_person_BMI_index_in_kg_m2 + " kg/m2");

    // So sánh và sau đó Hiển thị lên trang web + Xuất ra Console kết quả so sánh chỉ số BMI của hai người:
    if (_1st_person_BMI_index_in_kg_m2 > _2nd_person_BMI_index_in_kg_m2) {
        document.getElementById("comparison_result_id").innerHTML = "lớn hơn";
        console.log("Chỉ số BMI của bạn " + _1st_person_name + " lớn hơn chỉ số BMI của bạn " + _2nd_person_name);
    } else if (_1st_person_BMI_index_in_kg_m2 = _2nd_person_BMI_index_in_kg_m2) {
        document.getElementById("comparison_result_id").innerHTML = "bằng với";
        console.log("Chỉ số BMI của bạn " + _1st_person_name + " bằng với chỉ số BMI của bạn " + _2nd_person_name);
    } else {
        document.getElementById("comparison_result_id").innerHTML = "bé hơn";
        console.log("Chỉ số BMI của bạn " + _1st_person_name + " bé hơn chỉ số BMI của bạn " + _2nd_person_name);
    };
    console.log("-----oOo-----");
};

function first_comparison_result() {
    // Gán giá trị ban đầu cho các biến:
    get_input_data("placeholder");

    // Gọi hàm tính toán, so sánh, xuất kết quả vào cả HTML form và Console:
    comparison_result();
};

// Cập nhật kết quả do thay đổi tên của người thứ nhất:
function update_1_name() {
    // Gán lại giá trị cho biến tên của người thứ nhất:
    _1st_person_name = document.form_BMI._1st_person_name.value;

    // Gọi hàm tính toán, so sánh, xuất kết quả vào cả HTML form và Console:
    comparison_result();
};

// Cập nhật kết quả do thay đổi cân nặng của người thứ nhất:
function update_1_weight() {
    // Gán lại giá trị cho biến cân nặng của người thứ nhất:
    _1st_person_weight_in_kg = document.form_BMI._1st_person_weight.value;

    // Gọi hàm tính toán, so sánh, xuất kết quả vào cả HTML form và Console:
    comparison_result();
};

// Cập nhật kết quả do thay đổi chiều cao của người thứ nhất:
function update_1_height() {
    // Gán lại giá trị cho biến chiều cao của người thứ nhất:
    _1st_person_height_in_cm = document.form_BMI._1st_person_height.value;

    // Gọi hàm tính toán, so sánh, xuất kết quả vào cả HTML form và Console:
    comparison_result();
};

// Cập nhật kết quả do thay đổi tên của người thứ hai:
function update_2_name() {
    // Gán lại giá trị cho biến tên của người thứ hai:
    _2nd_person_name = document.form_BMI._2nd_person_name.value;

    // Gọi hàm tính toán, so sánh, xuất kết quả vào cả HTML form và Console:
    comparison_result();
};

// Cập nhật kết quả do thay đổi cân nặng của người thứ hai:
function update_2_weight() {
    // Gán lại giá trị cho biến cân nặng của người thứ hai:
    _2nd_person_weight_in_kg = document.form_BMI._2nd_person_weight.value;

    // Gọi hàm tính toán, so sánh, xuất kết quả vào cả HTML form và Console:
    comparison_result();
};

// Cập nhật kết quả do thay đổi chiều cao của người thứ hai:
function update_2_height() {
    // Gán lại giá trị cho biến chiều cao của người thứ hai:
    _2nd_person_height_in_cm = document.form_BMI._2nd_person_height.value;

    // Gọi hàm tính toán, so sánh, xuất kết quả vào cả HTML form và Console:
    comparison_result();
};