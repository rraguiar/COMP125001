/*
CENTENNIAL COLLEGE
COMP125 - Client Side Development - JavaScript

Assignment 4 - Summer 2019
Author: Rafael Aguiar
Student id: 301041266
Date: July / 05 / 2019

Assignment: JavaScript form validation

Filenames:
HTML: Membership.html
JavaScript: Membership.js
Styles: MembershipStyles.css
*/

"use strict"; // interpret document contents in JavaScript strict mode

/* global variables */
var fName = document.getElementById("txtFirstName");
var lName = document.getElementById("txtLastName");
var address = document.getElementById("txtAddress");
var city = document.getElementById("txtCity");
var zipCode = document.getElementById("txtZip");
var province = document.getElementById("txtProvince");
var age = document.getElementById("txtAge");
var createPWD = document.getElementById("txtCreatePWD");
var confirmPWD = document.getElementById("txtConfirmPWD");
var email = document.getElementById("txtEmail");
var btnSubmit = document.getElementById("btnSubmit");
var addressError = document.getElementById("addressError");
var ageError = document.getElementById("ageError");
var pwdError = document.getElementById("pwdError");
var emailError = document.getElementById("emailError");
var profileName = document.getElementById("fullName");
var profileEmail = document.getElementById("profileEmail");
var validationForm = 10;


function checkFname(){
    if (/.{3,}/.test(fName) === true) {
        validationForm--;
    }
}

function checkLname(){
    if (/.{3,}/.test(lName) === true) {
        validationForm--;
    }
}

function checkAddress() {
    if (/.{3,}/.test(address) === true) {
        validationForm--;
    }
}

function checkCity(){
    if (/.{3,}/.test(city) === true) {
        validationForm--;
    }
}

function checkZipCode(){
    if (/.{3,}/.test(zipCode) === true) {
        validationForm--;
    }
}

/* verify Province function*/
function checkProvince() {
    var checkProvince = province.value.toUpperCase();
    try {
        // replace with conditional expression
        if (checkProvince != "QC" && checkProvince != "ON" && checkProvince != "MN"
            && checkProvince != "SK" && checkProvince != "AB" && checkProvince != "BC") {
            throw "Province must be QC, ON, MN, SK, AB or BC";
        }
        // remove any province error styling and message for when it is correct
        addressError.innerHTML = "";
        // convert province to upper case and replace
        province.value = province.value.toUpperCase();
        validationForm--;
    }
    catch (msg) {
        // display error message
        addressError.style.display = "block";
        addressError.style.paddingLeft = "253px";
        addressError.style.color = "red";
        addressError.style.fontSize = "small";
        addressError.innerHTML = msg;
    }
}

/* verify Age function*/
function checkAge() {
    try {
        // replace with conditional expression
        if (age.value<18) {
            throw "You must be at least 18 years old.";
        }
        // remove any province error styling and message for when it is correct
        ageError.innerHTML = "";
        validationForm--;
    }
    catch (msg) {
        // display error message
        ageError.style.display = "block";
        ageError.style.paddingLeft = "253px";
        ageError.style.color = "red";
        ageError.style.fontSize = "small";
        ageError.innerHTML = msg;
    }
}

/* verify e-mail function*/
function checkEmail() {
    try {
        // replace with conditional expression
        if (email.value.search("@") === -1 ||
            email.value.lastIndexOf(".") === -1) {
            throw "Please provide a valid email address";
        }
        validationForm--;
        // remove any email error styling and message
        emailError.innerHTML = "";
        emailError.style.display = "none";
        // convert email address to lowercase
        email.value = email.value.toLowerCase();
    }
    catch (msg) {
        // display error message
        emailError.style.display = "block";
        emailError.style.paddingLeft = "253px";
        emailError.style.color = "red";
        emailError.style.fontSize = "small";
        emailError.innerHTML = msg;
    }
}

/* verify passwords function*/
function checkPassword() {
    var pwdTest = createPWD.value;
    var pwd2Test = confirmPWD.value;
    try {
        // replace with conditional expression
        if (/.{6,}/.test(pwdTest) === false) {
            throw "Password must be at least 6 characters";
        } else if (pwdTest.localeCompare(pwd2Test) !== 0) {
            throw "Passwords must match";
        }
        validationForm -= 2;
        // remove any province error styling and message for when it is correct
        pwdError.innerHTML = "";
    }
    catch (msg) {
        // display error message
        pwdError.style.display = "block";
        pwdError.style.paddingLeft = "253px";
        pwdError.style.color = "red";
        pwdError.style.fontSize = "small";
        pwdError.innerHTML = msg;
    }

}

function submitProfile(){
    if (validationForm <= 0) {
        //fortmating style and showing the success message - need to replace by profile function.
        emailError.style.display = "block";
        emailError.style.paddingLeft = "253px";
        emailError.style.color = "blue";
        emailError.style.fontSize = "large";
        emailError.innerHTML = "Profile Created!";
        var prfName = lName.value + ", " + fName.value;
        var prfEmail = email.value;
        profileName.style.color = "black";
        profileEmail.style.color = "black";
        profileName.innerHTML = prfName;
        profileEmail.innerHTML = prfEmail;
        validationForm = 10;
    }
    else {
        emailError.style.display = "block";
        emailError.style.paddingLeft = "253px";
        emailError.style.color = "red";
        emailError.style.fontSize = "small";
        emailError.innerHTML = "All fields are mandatory.";
    }
}

/* create event listeners for left arrow, right arrow, and center figure element */
function createEventListeners() {

    if (fName.addEventListener) {
        fName.addEventListener("change", checkFname, false);
    } else if (fName.attachEvent) {
        fName.attachEvent("onchange", checkFname);
    }

    if (lName.addEventListener) {
        lName.addEventListener("change", checkLname, false);
    } else if (lName.attachEvent) {
        lName.attachEvent("onchange", checkLname);
    }

    if (address.addEventListener) {
        address.addEventListener("change", checkAddress, false);
    } else if (address.attachEvent) {
        address.attachEvent("onchange", checkAddress);
    }

    if (city.addEventListener) {
        city.addEventListener("change", checkCity, false);
    } else if (city.attachEvent) {
        city.attachEvent("onchange", checkCity);
    }

    if (zipCode.addEventListener) {
        zipCode.addEventListener("change", checkZipCode, false);
    } else if (zipCode.attachEvent) {
        zipCode.attachEvent("onchange", checkZipCode);
    }

    if (province.addEventListener) {
        province.addEventListener("change", checkProvince, false);
    } else if (province.attachEvent) {
        province.attachEvent("onchange", checkProvince);
    }

    if (age.addEventListener) {
        age.addEventListener("change", checkAge, false);
    } else if (age.attachEvent) {
        age.attachEvent("onchange", checkAge);
    }

    if (email.addEventListener) {
        email.addEventListener("keypress", checkEmail, false);
    } else if (email.attachEvent) {
        email.attachEvent("onchange", checkEmail);
    }

    if (createPWD.addEventListener && confirmPWD.addEventListener) {
        createPWD.addEventListener("change", checkPassword, false);
        confirmPWD.addEventListener("change", checkPassword, false);
    } else if (createPWD.attachEvent && confirmPWD.attachEvent) {
        createPWD.attachEvent("onchange", checkPassword);
        confirmPWD.attachEvent("onchange", checkPassword);
    }

    if (btnSubmit.addEventListener) {
        btnSubmit.addEventListener("click", submitProfile, false);
    } else if (btnSubmit.attachEvent) {
        btnSubmit.attachEvent("onclick", submitProfile);
    }

}

/* create event listeners and populate image elements */
function setUpPage() {

    createEventListeners();
}

/* run setUpPage() function when page finishes loading */
if (window.addEventListener) {
    window.addEventListener("load", setUpPage, false);
} else if (window.attachEvent) {
    window.attachEvent("onload", setUpPage);
}
