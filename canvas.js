function doFirst() {
	var x = document.getElementById("flower");
	// bud = x.getContext("2d");
	// bud.beginPath();
	// bud.moveTo(400,0);
	// bud.lineTo(500, 0);
	// bud.lineTo(500, 100);
	// bud.arc(500,0,100,0.5*Math.PI,1*Math.PI);
	// bud.fillStyle = "yellow";
	// bud.fill();
	// bud.stroke();

	// bud = x.getContext("2d");
	// bud.beginPath();
	// bud.arc(250,250,50,0,2*Math.PI);
	// bud.fillStyle = "yellow";
	// bud.fill();
	// bud.stroke();


	petal1 = x.getContext("2d");
	petal1.moveTo(250,250);
	petal1.quadraticCurveTo(185,75,250,0); //(qx, qy, ex, ey)
	petal1.quadraticCurveTo(315,75,250,250);
	petal1.stroke();

	petal2 = x.getContext("2d");
	petal2.moveTo(250,250);
	petal2.quadraticCurveTo(185,425,250,500); //(qx, qy, ex, ey)
	petal2.quadraticCurveTo(315,425,250,250);
	petal2.stroke();

	petal3 = x.getContext("2d");
	petal3.moveTo(250,250);
	petal3.quadraticCurveTo(75,185,0,250); //(qx, qy, ex, ey)
	petal3.quadraticCurveTo(75,315,250,250);
	petal3.stroke();

	petal4 = x.getContext("2d");
	petal4.moveTo(250,250);
	petal4.quadraticCurveTo(425,185,500,250); //(qx, qy, ex, ey)
	petal4.quadraticCurveTo(425,315,250,250);
	petal4.stroke();



	petal5 = x.getContext("2d");
	petal5.moveTo(250,250);
	petal5.quadraticCurveTo(50,150,50,50); //(qx, qy, ex, ey)
	petal5.quadraticCurveTo(150,50,250,250);
	petal5.stroke();

	petal6 = x.getContext("2d");
	petal6.moveTo(250,250);
	petal6.quadraticCurveTo(450,350,450,450); //(qx, qy, ex, ey)
	petal6.quadraticCurveTo(350,450,250,250);
	petal6.stroke();

	petal7 = x.getContext("2d");
	petal7.moveTo(250,250);
	petal7.quadraticCurveTo(350,50,450,50); //(qx, qy, ex, ey)
	petal7.quadraticCurveTo(450,150,250,250);
	petal7.stroke();

	petal8 = x.getContext("2d");
	petal8.moveTo(250,250);
	petal8.quadraticCurveTo(50,350,50,450); //(qx, qy, ex, ey)
	petal8.quadraticCurveTo(150,450,250,250);
	petal8.stroke();

	petal6.fillStyle = "pink";
	petal6.fill();

	// petal4.translate(500, 500);
	// petal4.rotate(1);

	// rect1 = x.getContext("2d");
	// rect1.strokeRect(50, 50, 400, 400);
	
	// rect2 = x.getContext("2d");
	// rect2.strokeRect(230, 0, 40, 500);

	// rect3 = x.getContext("2d");
	// rect3.strokeRect(0, 230, 500, 40);

	// flower.strokeRect(10, 10, 100, 100); //(x,y, width, height);
	// flower.fillRect(10, 10, 100, 100);
	// flower.clearRect(20, 20, 50, 50);


	// flower.fillStyle="blue";
	// flower.fillStroke="red";

	// var gradient = flower.createLinearGradient(0,0,100,100); //(x,y,x-fade,y-fade )
	// gradient.addColorStop(.0, "blue"); //(0-1, color)
	// gradient.addColorStop(.5, "red");
	// gradient.addColorStop(1, "pink");
	// flower.fillStyle=gradient;
	// flower.fillRect(0,0,100,100);

	//custom shape
	// flower.beginPath();
	// flower.moveTo(50,50);
	// flower.lineTo(70, 250);
	// flower.lineTo(300,200);
	// flower.closePath();
	// flower.stroke();

	//shadow text first before text
	// flower.shadowOffsetX = 4; //property
	// flower.shadowOffsetY = 4;
	// flower.shadowBlur = 6;
	// flower.shadowColor = "rgba(0, 0, 255, .5)";

	// flower.font="bold 36px Tahoma";
	// flower.textAlign="end";
	// flower.fillText("Cat", 100, 100); //(text, x, y);

	// canvas.font="bold 22px Tahoma";
	// canvas.textAlign="start";
	// canvas.fillText("start", 10, 30);

	// canvas.save();

	// canvas.translate(100, 150); //move(x,y)
	// canvas.fillText("after translate", 0,0);

	// canvas.rotate(1); //move(radians)
	// canvas.fillText("after rotate", 0,0);

	// canvas.scale(1.5, 4); //grow, or stretch
	// canvas.fillText("after scale", 0,0);

	// canvas.restore();
	// canvas.fillRect(0,0, 100, 100);

	// var pic = new Image();
	// pic.src="public/assets/images/red1.jpg";
	// pic.addEventListener("load", function() {
	// 	canvas.drawImage(pic, 0,0, x.width, x.height); //image, x,y, width,height
	// }, false);
}





window.addEventListener("load", doFirst, false);