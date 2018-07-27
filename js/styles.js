
	var 
		content = document.getElementById("content"),
		canvas = document.getElementById("canvas"),
		innerHeight = window.innerHeight ;
		innerWidth = window.innerWidth ;

var contentHeight = (innerHeight) + "px";
		content.style.height=contentHeight;

var canvasHeight = (innerHeight * (3/4)) + "px";
		canvas.setAttribute("height",canvasHeight);
		canvas.setAttribute("width",(innerWidth*0.9));