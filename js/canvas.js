var 
		 canvas = document.getElementById('canvas'),
			  ctx = canvas.getContext('2d'),
isMouseDown = false;

	//Code

	canvas.addEventListener('mousedown',function(){
		isMouseDown = true;
	});
	canvas.addEventListener('mouseup',function(){
		isMouseDown = false;
		ctx.beginPath();
	});

canvas.addEventListener('mousemove',function(e){

var positionX = e.clientX - (window.innerWidth*0.05),
		positionY = e.clientY - 200;

if(isMouseDown){

ctx.lineWidth = 10 ;
	ctx.lineTo(positionX,positionY);
	ctx.stroke();

	ctx.beginPath();
	ctx.arc(positionX,positionY,4,0,Math.PI * 2);
	ctx.fill();

	ctx.beginPath();
	ctx.moveTo(positionX,positionY);
}

});
function save(){
	console.log("Saved");

	var input = document.getElementById("canvasName").value;
	document.getElementById("saveButton").setAttribute("download",input);

	var savedImg = canvas.toDataURL("image/png");
	var img = document.getElementById("img");
	img.setAttribute("src",savedImg);
	var newImg = document.getElementById("img");
	var srcImg = newImg.getAttribute("src");
	document.getElementById("saveButton").setAttribute("href",srcImg)
}