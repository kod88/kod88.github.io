
	var 
		content = document.getElementById("content"),
		innerHeight = window.innerHeight ,
		innerWidth = window.innerWidth ,
		works = $(".works"),
		worksPictures = $(".worksPictures");
		
var contentHeight = (innerHeight) + "px";
		content.style.height=contentHeight;

		//Обработчик клика по картинке

$(works).on("click",function(e){
	var a = this.nextSibling;
	console.log(a);
})