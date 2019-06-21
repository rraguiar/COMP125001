/*    CENTENNIAL COLLEGE
 *    COMP125 - Client Side Development - JavaScript
 *    
 *    Assignment 2 - Summer 2019
 *    Author: Rafael Aguiar
 *    Student id: 301041266
 *    Date: June/03/2019
 *    
 *    Assignment: JavaScript drawing table into HTML
 *    
 *    Filenames:
 *    HTML: assignment2.html
 *    JavaScript: assignment2.js
 *    Styles: assignment2Styles.css
 */

/*global variables tracking status of rows and columns on the table */
var tableValid = true;
var errorMessage = ""; //error message in case wrong values for row or column

/*global variables referencing form elements related to set table size*/
var rowsField = document.getElementsByName("tableInfo")[0];
var columnsField = document.getElementsByName("tableInfo")[1];

/*global variable referencing table contents */
var drawCommand = "";
var drawTable = document.getElementById("plotTable");

//styling table <td> background
var tdColor="";

function verifyRows() {
    tableValid = true; //validation so it doesn´t draw the table if false
    try {
        if (rowsField.value <= 0) {
            throw "<table><tr><td>Must be at least 1 row or more.</td></tr></table>"
        }
    }
    catch (message) { //receive the error message to be plotted into the HTML
        tableValid = false; // error situation - won´t draw the table
        rowsField.value = ""; //clean field to next input
        errorMessage = message;
    }
    finally {
        plotTable();
    }
}

function verifyColumns() {
    tableValid = true; //validation so it doesn´t draw the table if false
    try {
        if (columnsField.value <= 0) {
            throw "<table><tr><td>Must be at least 1 column or more.</td></tr></table>"
        }
    }
    catch (message) { //receive the error message to be plotted into the HTML
        tableValid = false; // error situation - won´t draw the table
        columnsField.value = ""; //clean field to next input
        errorMessage = message;
    }
    finally {
        plotTable();
    }
}

function styleTable() { //generate random background colors
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    tdColor = "rgb(" + x + "," + y + "," + z + ");";
    console.log("x: " + x);
    console.log("y: " + y);
    console.log("z: " + z);
}

function plotTable() {
    /*Showing variables on console */
    console.log("Table Valid? " + tableValid);
    console.log("Error message: " + errorMessage);
    console.log("Rows# " + rowsField.value);
    console.log("Columns# " + columnsField.value);
    console.log("HTML insert tags: " + drawCommand);
    console.log("Draw table content: " + drawTable);
    console.log("tdColor: " + tdColor);
    /*Usually removed for production, I´ll keep to ilustrate the use on the assignment.*/

    if (tableValid) {
        drawCommand = "<table>";
        for (var i = 1; i <= rowsField.value; i++) {
            styleTable(); //randomizing row lines instead of <td>'s to make it faster
            drawCommand += "<tr>";
            for (var j = 1; j <= columnsField.value; j++) {
                drawCommand += '<td style="background-color: ' + tdColor+'">(' + i + ',' + j + ')</td>';
            }
            drawCommand+="</tr>"
        }
        drawCommand+="</table>"
        drawTable.innerHTML = drawCommand;
    } else {
        drawTable.innerHTML = errorMessage;
    }
}

function createInputListeners() {
    rowsField.value = 15; //start with a 15x15 size table
    columnsField.value = 15; //start with a 15x15 size table
    plotTable();
    if (document.addEventListener) {
        rowsField.addEventListener("input", verifyRows, false);
        columnsField.addEventListener("input", verifyColumns, false);
    } else if (document.attachEvent) {
        rowsField.attachEvent("onchange", verifyRows);
        columnsField.attachEvent("onchange", verifyColumns);
    }
}

if (window.addEventListener) {
    window.addEventListener("load", createInputListeners, false);
} else if (window.attachEvent) {
    window.attachEvent("onload", createInputListeners);
}