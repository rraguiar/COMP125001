/*    JavaScript 6th Edition
 *    Chapter 5
 *    Chapter case

 *    Photo zoom
 *    Variables and functions
 *    Author: 
 *    Date:   

 *    Filename: zoom.js
 */

"use strict"; // interpret document contents in JavaScript strict mode

/* global variables */
var photoOrderArray = window.opener.photoOrder;//access to global variables on the other JavaScript loaded previously (one page called one JavaScript that called other html that called other JS, so they are all open)
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

function favPicture() {
    opener.createFavorite(figFilename);
    closeWin();
}

/* create event listener for close button */
function createEventListener() {
    var closeWindowDiv = document.getElementsByTagName("p")[1];
    var addFavoriteDiv = document.getElementsByTagName("p")[0];
   if (closeWindowDiv.addEventListener) {
       closeWindowDiv.addEventListener("click", closeWin, false);
       addFavoriteDiv.addEventListener("click", favPicture, false);
   } else if (closeWindowDiv.attachEvent)  {
       closeWindowDiv.attachEvent("onclick", closeWin);
       addFavoriteDiv.attachEvent("onclick", favPicture);
   }
}

/* add img src value and create event listener when page finishes loading */
window.onload = pageSetup;