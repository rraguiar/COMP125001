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
var zipCode = document.getElementById("txtZip");
var province = document.getElementById("txtProvince");
var confirmPWD = document.getElementById("txtConfirmPWD");
var createPWD = document.getElementById("txtCreatePWD");
var age = document.getElementById("txtAge");
var email = document.getElementById("txtEmail");
var addressError = document.getElementById("addressError");
var ageError = document.getElementById("ageError");
var pwdError = document.getElementById("pwdError");
var emailError = document.getElementById("emailError");

/* verify ZipCode function*/
function checkZipCode() {

    console.log("check zipcode function called. " + zipCode);

    addressError.innerHTML = "Wrong Zip Code format.";
}

/* verify Province function*/
function checkProvince() {
    console.log("check province function called" + province);
}

/* verify Age function*/
function checkAge() {
    console.log("check age function called" + age);
}

/* verify e-mail function*/
function checkEmail() {
    console.log("check e-mail function called" + email);
}

/* verify passwords function*/
function checkPassword() {
    console.log("check password function called. createPWD:" + createPWD + " confirmPWD:" + confirmPWD);
}

/* create event listeners for left arrow, right arrow, and center figure element */
function createEventListeners() {

    if (zipCode.addEventListener) {
        zipCode.addEventListener("keypress", checkZipCode, false);
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
        email.addEventListener("change", checkEmail, false);
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
