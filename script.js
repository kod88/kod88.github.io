
var b = localStorage.getItem('login');
		$('#login').val(b);
		console.log("До перезагрузки страницы : "+ b);
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