/*    JavaScript 6th Edition
 *    Chapter 5
 *    Chapter case

 *    Photo gallery
 *    Variables and functions
 *    Author: 
 *    Date:   

 *    Filename: photos.js
 */

"use strict"; // interpret document contents in JavaScript strict mode

/* global variables */
var photoOrder = [1,2,3,4,5];
var autoAdvance = setInterval(rightAdvance,5000);
var figureCount = 3;
var refArticleFavorites = document.getElementsByTagName("article")[0];
var countFav = 0;
var delFavBoxID;
var favIdentity;
var favInventory = [];

function createFavorite(pictureName) {
    if (countFav == 5) {
        var errorOutput = document.createElement("output");
        errorOutput.id = "errorOutput";
        errorOutput.zIndex = 6;
        errorOutput.style.position = "absolute";
        errorOutput.style.top = "340px";
        var errorTag = document.createElement("p");
        errorTag.id = "errorMSG";
        errorTag.style.width = "980px";
        errorTag.style.textAlign = "center";
        errorTag.style.color = "white";
        errorOutput.appendChild(errorTag);
        var favoritesP = document.getElementById("favoritesP");
        refArticleFavorites.insertBefore(errorOutput, favoritesP);
        var refPicErrorMSG = document.getElementById("errorMSG");
        var errMSG = "Maximum 5 favorites! Delete any before adding more.";
        refPicErrorMSG.innerHTML = errMSG;
    }
    else {
        countFav++;
        var favFigure = document.createElement("figure");
        favIdentity = "picFav" + countFav;
        favFigure.id = favIdentity;
        favFigure.zIndex = 6 + countFav;
        favFigure.style.position = "absolute";
        favFigure.style.top = "400px";
        favFigure.style.left = ((countFav - 1) * 115) + "px";
        var favPictureName = document.createElement("img");
        //favPictureName.id = countFav;
        favPictureName.src = pictureName;
        favPictureName.style.width = "90px";
        favPictureName.style.height = "50px";
        favFigure.appendChild(favPictureName);

        var finalContent = document.getElementById("finalContent");
        refArticleFavorites.insertBefore(favFigure, finalContent);

        var delBoxName = "images/deleteBox30pxGrayWhite.png";
        var delFavFigure = document.createElement("figure");
        delFavBoxID = "del" + favIdentity;
        delFavFigure.id = delFavBoxID;
        delFavFigure.style.zIndex = 11 + countFav;
        delFavFigure.style.position = "absolute";
        delFavFigure.style.top = "384px";
        delFavFigure.style.left = (((countFav - 1) * 115) + 75) + "px";
        var delFavPictureName = document.createElement("img");
        //favPictureName.id = countFav*10;
        delFavPictureName.src = delBoxName;
        delFavPictureName.style.width = "15x";
        delFavPictureName.style.height = "15px";
        delFavFigure.appendChild(delFavPictureName);

        var refFavIdentity = document.getElementById(favIdentity);
        refArticleFavorites.insertBefore(delFavFigure, refFavIdentity);

        favInventory[countFav - 1] = countFav;

        console.log("*********  ADDED *********");
        console.log("delFavBoxID: " + delFavBoxID);
        console.log("FavIdentity: " + favIdentity);
        createListenerFavDelete();
        
    }    
}

function replaceFavorites() {
    var refArticleFavorites = document.getElementsByTagName("article")[0];
    countFav--;
    var length = favIdentity.length;
    var stringPosDeleted = favIdentity[length - 1];
    var positionDeleted = parseInt(stringPosDeleted);
    positionDeleted--;
    var index = favInventory.length;
    index--;
    var lastElement = index;
    ///
    //var savePoint;
    console.log("********* REPLACE FAVORITES AFTER DELETE PICTURE PRESSED:  *********");
    console.log("Favorite to be deleted: " + favIdentity);
    console.log("Favorite's X to delete: " + delFavBoxID);
    console.log("Index (array lenght): ", +index);
    console.log("positionDeleted: " + positionDeleted);
    console.log("lastElement: " + lastElement);
    console.log("counfFav: " + countFav);
    console.log("******");

    while (index >= positionDeleted) {  //////MAYBE THE LOGIC IS >= INSTEAD OF ONLY > - TO CHECK DURING FINAL TESTS*********************************************
        //savePoint = "picFav" + index;
        //reference to the savepoint's filename for backup purposes.
        //var refPreviousPicture = document.getElementById(savePoint);//referrence picture to be overlaped
        //savePoint = refPreviousPicture.src;
        removeFavorite();
        console.log("*********dentro do while REPLACE FAVORITES AFTER DELETE PICTURE PRESSED:  *********");
        console.log("Favorite to be deleted: " + favIdentity);
        console.log("Favorite's X to delete: " + delFavBoxID);
        console.log("Index (array lenght): ", +index);
        console.log("positionDeleted: " + positionDeleted);
        console.log("lastElement: " + lastElement);
        console.log("counfFav: " + countFav);
        console.log("******");

        //console.log("********* SAVEPOINT:  *********");
        //console.log(savePoint);
        //console.log("*********");

        var delBoxFavFigure = document.getElementById(delFavBoxID);//reference to the next X delete picture
        var delFavFigure = document.getElementById(favIdentity);//reference to the next X delete picture

        //reposition favorite picture
        //delFavFigure.id = favIdentity;
        //delFavFigure.zIndex = 6 + count;
        //delFavFigure.style.left = ((count - 1) * 115) + "px";

        //reposition X delete picture
        //delBoxFavFigure.id = delFavBoxID;
        //delBoxFavFigure.style.zIndex = 11 + count;
        //delBoxFavFigure.style.left = (((count - 1) * 115) + 75) + "px";

        } 
    console.log("*********  AFTER DELETION: - ap�s o while  *********");
    console.log("countFav: " + countFav);    

}

function removeFavorite() {
    var refArticleFavorites = document.getElementsByTagName("article")[0];

    function newFunction() {
        return document.getElementById(favIdentity);
    }
    function newFunction2() {
        return document.getElementById(delFavBoxID);
    }

    var child = newFunction();
    var child2 = newFunction2();
    refArticleFavorites.removeChild(child);
    refArticleFavorites.removeChild(child2);
    console.log(countFav);

    
}

//function removeFavDeleteListener() {
//    var refDelFavBoxID = document.getElementById(delFavBoxID)
//    if (refDelFavBoxID.removeEventListener) {
//        refDelFavBoxID.removeEventListener("click", removeFavorite(delFavBoxID, favIdentity), false);
//}

function createListenerFavDelete() {
    var refDelFavBoxID = document.getElementById(delFavBoxID);
    refDelFavBoxID.addEventListener("click", replaceFavorites);
}

/* add src values to img elements based on order specified in photoOrder array */
function populateFigures() {
   var filename;
   var currentFig;
   if (figureCount === 3) {
      for (var i = 1; i < 4; i++) {
         filename = "images/IMG_0" + photoOrder[i] + "sm.jpg";
         currentFig = document.getElementsByTagName("img")[i - 1];
         currentFig.src = filename;
      }
   } else {
      for (var i = 0; i < 5; i++) {
         filename = "images/IMG_0" + photoOrder[i] + "sm.jpg";
         currentFig = document.getElementsByTagName("img")[i];
         currentFig.src = filename;
      }
   }
}

/* stop automatic image switching and call rightAdvance() function */
function rightArrow() {
   clearInterval(autoAdvance);
   rightAdvance();
}

/* shift all images one figure to the left, and change values in photoOrder array to match  */
function rightAdvance() {
   for (var i = 0; i < 5; i++) {
      if ((photoOrder[i] + 1) === 6) {
         photoOrder[i] = 1;
      } else {
         photoOrder[i] += 1;
      }
      populateFigures();
   }
}

/* shift all images one figure to the right, and change values in photoOrder array to match  */
function leftArrow() {
   clearInterval(autoAdvance);
   for (var i = 0; i < 5; i++) {
      if ((photoOrder[i] - 1) === 0) {
         photoOrder[i] = 5;
      } else {
         photoOrder[i] -= 1;
      }
      populateFigures();
   }
}

/* switch to 5-image layout */
function previewFive() {
   var articleEl = document.getElementsByTagName("article")[0];
   // create figure and img elements for fifth image
   var lastFigure = document.createElement("figure"); //create the tag element into the HTML
   lastFigure.id = "fig5";                            //create the id to the tag to be unique
   lastFigure.style.zIndex = "5";                     //create the style into the CSS attached to the HTML -> set CSS from JavaScript
   lastFigure.style.position = "absolute";
   lastFigure.style.right = "45px";
   lastFigure.style.top = "67px";
   var lastImage = document.createElement("img");
   lastImage.width = "240";
   lastImage.height = "135";
   lastFigure.appendChild(lastImage);
//   articleEl.appendChild(lastFigure);
   articleEl.insertBefore(lastFigure, document.getElementById("rightarrow"));//shows the extra pic on the right side of the right arrow button
   
   //clone figure element for fifth image and edit to be first image
   var firstFigure = lastFigure.cloneNode(true);//clone the other picture and change key items (id, position, etc)
   firstFigure.id = "fig1";
   firstFigure.style.right = "";
   firstFigure.style.left = "45px";
   articleEl.insertBefore(firstFigure, document.getElementById("fig2"));//shows the extra pic on the left of fig2 - which was the first pic (second child, after left arrow) listed into the article tag

    // add appropriate src values to two new img elements
    document.getElementsByTagName("img")[0].src = "images/IMG_0" + photoOrder[0] + "sm.jpg";
    document.getElementsByTagName("img")[4].src = "images/IMG_0" + photoOrder[4] + "sm.jpg";

    figureCount = 5;
   //change button to hide extra images
   var numberButton = document.querySelector("#fiveButton p"); //selects the paragraph into the fivebutton id and next change the text into the button
   numberButton.innerHTML = "Show fewer images";
   if (numberButton.addEventListener) {
      numberButton.removeEventListener("click", previewFive, false);
      numberButton.addEventListener("click", previewThree, false);
   } else if (numberButton.attachEvent) {
      numberButton.detachEvent("onclick", previewFive);
      numberButton.attachEvent("onclick", previewThree);
   }
   
   
}

/* switch to 3-image layout */
function previewThree() {
   var articleEl = document.getElementsByTagName("article")[0];
   var numberButton = document.querySelector("#fiveButton p");
   figureCount = 3;
   articleEl.removeChild(document.getElementById("fig1"));
   articleEl.removeChild(document.getElementById("fig5"));
   numberButton.innerHTML = "Show more images";
   if (numberButton.addEventListener) {
      numberButton.removeEventListener("click", previewThree, false);
      numberButton.addEventListener("click", previewFive, false);
   } else if (numberButton.attachEvent) {
      numberButton.detachEvent("onclick", previewThree);
      numberButton.attachEvent("onclick", previewFive);
   }
}

/* open center figure in separate window */
function zoomFig() {
   var propertyWidth = 960;
   var propertyHeight  = 600;
   var winLeft = ((screen.width - propertyWidth) / 2);
   var winTop = ((screen.height - propertyHeight) / 2);
   var winOptions = "width=960,height=600";
   winOptions += ",left=" + winLeft;
   winOptions += ",top=" + winTop;
   var zoomWindow = window.open("zoom.htm", "zoomwin", winOptions);
   zoomWindow.focus();
}


/* create event listeners for left arrow, right arrow, and center figure element */
function createEventListeners() {
   var leftarrow = document.getElementById("leftarrow");
   if (leftarrow.addEventListener) {
     leftarrow.addEventListener("click", leftArrow, false); 
   } else if (leftarrow.attachEvent)  {
     leftarrow.attachEvent("onclick", leftArrow);
   }

   var rightarrow = document.getElementById("rightarrow");
   if (rightarrow.addEventListener) {
     rightarrow.addEventListener("click", rightArrow, false); 
   } else if (rightarrow.attachEvent)  {
     rightarrow.attachEvent("onclick", rightArrow);
   }

   var mainFig = document.getElementsByTagName("img")[1];
   if (mainFig.addEventListener) {
     mainFig.addEventListener("click", zoomFig, false); 
   } else if (mainFig.attachEvent)  {
     mainFig.attachEvent("onclick", zoomFig);
   }
   
   var showAllButton = document.querySelector("#fiveButton p");
   if (showAllButton.addEventListener) {
      showAllButton.addEventListener("click", previewFive, false);
   } else if (showAllButton.attachEvent) {
      showAllButton.attachEvent("onclick", previewFive);
   }
}

/* create event listeners and populate image elements */
function setUpPage() {
   createEventListeners();
   populateFigures();
}

/* run setUpPage() function when page finishes loading */
if (window.addEventListener) {
  window.addEventListener("load", setUpPage, false); 
} else if (window.attachEvent)  {
  window.attachEvent("onload", setUpPage);
}
