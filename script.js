
var start = new Date().getTime();

/* function randomImg() {
var randomNumber = Math.floor(Math.random() * 13) + 1;
var imgName = "img_" + randomNumber;
document.getElementById("imageid").src= YOUR_IMG_PATH + "/" + imgName ;
} */ 



/* function randomImg () {
var path ="images/";

imgs = ['img_1.jpg','img_2.jpg','img_3.jpg','img_4.jpg','img_5.jpg','img_6.jpg','img_7.jpg','img_8.jpg','img_9.jpg','img_10.jpg','img_11.jpg','img_12.jpg','img_13.jpg'] ;

var i = Math.floor(Math.random()* 13);

document.getElementById("animals").src=(path+imgs[i]); 

//document.getElementById("animals").innerHtml = ("<img src="+path+imgs[i]+">");

}


randomImg (); */






function getRandomColor() {


	var letters = '0123456789ABCDEF'.split('');

	var color = '#';

	for (var i = 0; i < 6; i++) {
		color += letters[Math.floor(Math.random() * 16)];

	}

	return color;

}

function makeShapeAppear () {

	var top = Math.random() * 600;

	var left = Math.random() * 1000;

	var width = (Math.random() * 400) + 100; 

	var height = (Math.random() * 400) + 100; 


    document.getElementById("time").style.color = getRandomColor()

	document.getElementById("animals").style.top = top + "px";

	document.getElementById("animals").style.left = left + "px";

	document.getElementById("animals").style.width = width + "px";

	document.getElementById("animals").style.height = height + "px";


	document.getElementById("animals").style.display = "block";

var path ="images/";

imgs = ['img_1.jpg','img_2.jpg','img_3.jpg','img_4.jpg','img_5.jpg','img_6.jpg','img_7.jpg','img_8.jpg','img_9.jpg','img_10.jpg','img_11.jpg','img_12.jpg','img_13.jpg'] ;

var i = Math.floor(Math.random()* 13);

document.getElementById("animals").src=(path+imgs[i]); 


	start = new Date().getTime();


}

function appearAfterDelay () {

	setTimeout(makeShapeAppear, Math.random() * 2000);

}

appearAfterDelay();

document.getElementById("animals").onclick = function() {

	document.getElementById("animals").style.display = "none";


var end = new Date().getTime();

var timeTaken = (end - start) / 1000;

document.getElementById("timeTaken").innerHTML = timeTaken +"s";

appearAfterDelay();


}

