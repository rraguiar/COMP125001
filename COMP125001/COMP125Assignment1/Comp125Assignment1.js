//JavaScript to calculate BMR:
var gender;
var age;
var heightCmFeet;
var heightInches;
var weightKgStones;
var weightPounds;
var actLevel;
var BMR;
var intake;
var height, weight;

//Receives from the web page (document)
gender = document.getElementById("lstGender").value;
console.log("Gender: " + gender);
age = document.getElementById("txtAge").value;
console.log("Age: " + age);
heightCmFeet = document.getElementById("txtHeightCmFeet").value;
console.log("Height in cm/feets: " + heightCmFeet);
heightInches = document.getElementById("txtHeightInches").value;
console.log("Height in inches: " + heightInches);
weightKgStones = document.getElementById("txtWeightKgStones").value;
console.log("Weight in kg/stones: " + weightKgStones);
weightPounds = document.getElementById("txtWeightPounds").value;
console.log("Weight in pounds: " + weightPounds);
actLevel = document.getElementById("lstActivity").value;
console.log("Activity Level: " + actLevel);

function getDataFromPage()
{
//Receives from the web page (document)
gender = document.getElementById("lstGender").value;
console.log("Gender: " + gender);
age = document.getElementById("txtAge").value;
console.log("Age: " + age);
heightCmFeet = document.getElementById("txtHeightCmFeet").value;
console.log("Height in cm/feets: " + heightCmFeet);
heightInches = document.getElementById("txtHeightInches").value;
console.log("Height in inches: " + heightInches);
weightKgStones = document.getElementById("txtWeightKgStones").value;
console.log("Weight in kg/stones: " + weightKgStones);
weightPounds = document.getElementById("txtWeightPounds").value;
console.log("Weight in pounds: " + weightPounds);
actLevel = document.getElementById("lstActivity").value;
console.log("Activity Level: " + actLevel);

convertToMetric();
}

function convertToMetric()
{	
if (gender=="M_metric")
{
	gender="M";
	height=heightCmFeet;
	weight=weightKgStones;
}
else if  (gender=="F_metric")
{	
	gender="F";
	height=heightCmFeet;
	weight=weightKgStones;
}
else if (gender=="M" || gender=="F") 
{
	height=(heightCmFeet*30.48)+(heightInches*2.54);
	weight=(weightKgStones*6.350293)+(weightPounds*0.4535923);
}
else document.getElementById("bmrResult").innerHTML = "ERROR on calculation";

BMR_CalculationMetric();
}

function BMR_CalculationMetric()
{
if(gender=="M")
	{
		BMR = (10 * weight) + (6.25 * height) - (5 * age) + 5;
	}
	if (gender=="F")
	{
		BMR = (10 * weight) + (6.25 * height) - (5 * age) -161;
	}
   
    if (actLevel == 1 || actLevel == 2) intake = BMR*1.53;
    else if (actLevel == 3 || actLevel == 4) intake = BMR*1.76;
    else intake = BMR*2.25;

    console.log(BMR);
    console.log(intake);

    returnValues();
}

function returnValues()
{
	document.getElementById("bmrResult").innerHTML = BMR.toFixed();
	document.getElementById("intakeResult").innerHTML = intake.toFixed();
}