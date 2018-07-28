
	var 
		content = document.getElementById("content"),
		innerHeight = window.innerHeight ,
		innerWidth = window.innerWidth ,
		works = $(".works"),
		blackScreen =$("#blackScreen"),
		activeImage = document.getElementById("activeImage"),
		activeImageImg = document.getElementById("activeImageImg")
		worksPictures = $(".worksPictures");
		
var contentHeight = (innerHeight) + "px";
		content.style.height=contentHeight;
		activeImagePaddingTopValue = (innerHeight-activeImage.clientHeight)*0.25;
		activeImage.style.marginTop = activeImagePaddingTopValue + "px";


		//Обработчики событий

works.on("click",function(){
	var currentImg = $(this).find("img").attr("src");
		$("#activeImageImg").attr("src", currentImg);
		$("#enlargedImg").fadeIn(500).show();


		var a = activeImagePaddingTopValue + activeImageImg.clientHeight + 400 ;
		$("#closeLargedImg").height( a );

			document.getElementById("activeImageP").style.marginRight = activeImageImg.width + "px";
});

$("#closeLargedImg").on("click",function(){
$("#enlargedImg").fadeOut(500);
});

