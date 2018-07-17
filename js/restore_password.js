	$("#place_restore_email").on("focus",function(){
		$(this).css("background-image","url('')")
		this.setAttribute("placeholder","");
	});
	$("#place_restore_email").on("blur",function(){
		if(this.value.length < 1){
		$(this).css("background","")};
		this.setAttribute("placeholder","     Введите логин!");
	});
	$("#place_restore_password").on("focus",function(){
		$(this).css("background-image","url('')")
		this.setAttribute("placeholder","");
	});
	$("#place_restore_password").on("blur",function(){
		if(this.value.length < 1){
		$(this).css("background","")};
		this.setAttribute("placeholder","     Введите пароль!");
	});
	$("#place_restore_password_2").on("focus",function(){
		$(this).css("background-image","url('')")
		this.setAttribute("placeholder","");
	});
	$("#place_restore_password_2").on("blur",function(){
		if(this.value.length < 1){
		$(this).css("background","")};
		this.setAttribute("placeholder","     Введите пароль!");
	});