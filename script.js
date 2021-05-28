// save all inputs & counter display
let studentScreen = document.getElementById("displayStudents");
let counterScreen = document.getElementById("counterDisplay");
let name = document.getElementById("name");
let tel = document.getElementById("tel");
let email = document.getElementById("email");
let fileImg = document.getElementById("fileImg");
let position = 0;

// the array of objects - student
const Students = [
    { img:"images/prof1.jpg" ,name: "Havi", tel: "0549251177", email: "havilev93@gmail.com" }, { img:"images/prof2.jpg" ,name: "Shira", tel: "0549251177", email: "havilev93@gmail.com" },
    { img:"images/prof3.jpg" ,name: "Tal", tel: "0502321058", email: "tal_v4@gmail.com" },
]

_displayCurrent();


// the first display+reuse to show the current student
function _displayCurrent() {
    studentScreen.innerHTML = `<img class="studentImg" src=${Students[position].img}>
    <div class="studentId">
    <p class="student_details"><span class="input_title">Name:</span> ${Students[position].name}</p>
    <p class="student_details"><span class="input_title">Tel:</span> ${Students[position].tel}</p>
    <p class="student_details"><span class="input_title">E-mail:</span> ${Students[position].email}</p>
    </div>`;

    counterScreen.innerHTML = `<span class="currentPosition">${position + 1}</span> of <span class="arraryLength">${Students.length}</span>`;
    console.log(position, Students);
}

// First item
function _showFirst() {
    position = 0;
    _displayCurrent();
}

// Last item
function _showLast() {
    position = Students.length - 1;
    _displayCurrent();
}

// Next item
function _showNext() {
    (position + 1 < Students.length) && position++;
    _displayCurrent();
}

// Previous item
function _showPrevious() {
    (position > 0) && position--;
    _displayCurrent();
}

// add stuent
function _addStudent() {
    let nameV = name.value;
    let telV = tel.value;
    let emailV = email.value;
    // let fileImgV = fileImg.value;

    Students.length = Students.push({ name: nameV, tel: telV, email: emailV });
    _showLast();
}

// delete student
function _deleteMe() {
    if (Students.length == 1) {
        _showLast();
    }
    else {
        Students.splice(position, 1);
        if (position == Students.length) {
            position = Students.length - 1;
        }
        _displayCurrent();
    }

}
