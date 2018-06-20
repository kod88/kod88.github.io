
var lastlogin = localStorage.getItem('login');
		$('#login').val(lastlogin);
		console.log("До перезагрузки страницы : "+ lastlogin);
	$('#remember').on('click',function(){
	if(this.checked){
	var login = $("#login").val();
	localStorage.setItem('login', login );
	console.log("Вы изменили на : " + login);
	}
	else{
	localStorage.removeItem('login')
	}
	});
		if(!$('#remember').checked){localStorage.removeItem('login')}