	$("#place_login").on("focus",function(){
		$(this).css("background-image","url('')")
		this.setAttribute("placeholder","");
	});
	$("#place_login").on("blur",function(){
		if(this.value.length < 1){
		$(this).css("background","")};
		this.setAttribute("placeholder","     Введите логин!");
	});
	$("#place_password").on("focus",function(){
		$(this).css("background-image","url('')")
		this.setAttribute("placeholder","");
	});
	$("#place_password").on("blur",function(){
		if(this.value.length < 1){
		$(this).css("background","")};
		this.setAttribute("placeholder","     Введите пароль!");
	});