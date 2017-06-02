// change background color to red
document.body.style.backgroundColor = "red";

//Change the background color of just the "about me" portion to blue
document.getElementById("about me").style.backgroundColor = "blue";

//Change the font-family of the entire document to sans-serif
document.body.style.fontFamily = "sans-serif";

//Add your nickname
document.getElementById("nickname").innerHTML = "Rici"

//Add your favorites
document.getElementById("favorites").innerHTML = "Hiking, biking, exploring, reading"

//Add your hometown
document.getElementById("hometown").innerHTML = "Germany"

//Iterate through each li and change the class to "listitem". Add a style tag that sets a 
//rule for "listitem" to make the color red.
var list = document.body.getElementsByTagName("li");
for (var i = 0; i < list.length; ++i) {
	list[i].className += "listitem";
	document.getElementsByClassName("listitem")[i].style.color = "red";
	document.getElementsByClassName("listitem")[i].style.backgroundColor= "yellow";
}

//Create a new img element and set its src attribute to a picture of you. Append that element to the page.
var image = document.createElement("IMG");
image.src = "https://avatars0.githubusercontent.com/u/4004744?v=3&s=460";
image.height = "175";
document.body.appendChild(image);




