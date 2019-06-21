/*    Adapted from JavaScript 6th Edition for Assignment 3 - COMP125 Summer 2019
 *    Lilian Nishimaru de Souza
 *    Student Id: 301044056
 *    Filename: a3photos.js
 */

"use strict"; // interpret document contents in JavaScript strict mode

/* global variables */
var photoOrderArray = window.opener.photoOrder;
var figFilename = "images/IMG_0" + photoOrderArray[2] + ".jpg";

/* populate img element and create event listener */
function pageSetup() {
    document.getElementsByTagName("img")[0].src = figFilename; // assign filename to img element
    createEventListener();
}

/* close window */
function closeWin() {
    window.close();
}

function addPicture() {
    opener.addFavorite(figFilename);
    closeWin();
}

/* create event listener for close button */
function createEventListener() {
    var closeWindowDiv = document.getElementsByTagName("p")[0];
    if (closeWindowDiv.addEventListener) {
        closeWindowDiv.addEventListener("click", closeWin, false);
    } else if (closeWindowDiv.attachEvent) {
        closeWindowDiv.attachEvent("onclick", closeWin);
    }
    var addFavorites = document.getElementsByTagName("p")[1];
    if (addFavorites.addEventListener) {
        addFavorites.addEventListener("click", addPicture, false);
    } else if (addFavourites.attachEvent) {
        addFavorites.attachEvent("onclick", addPicture);
    }
}

/* add img src value and create event listener when page finishes loading */
window.onload = pageSetup;