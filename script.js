
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
		if(!$('#remember').checked){localStorage.removeItem('login')};

//Маштабирование поля контента
var contentHeight = $('#sidebar').height();
$('.dinamicContent').height(contentHeight);
//Ajax подгрузка страницы
/*
$('nav ul li a').on('click',function(e){
e.preventDefault();
var url = this.href;
$('nav a.current').removeClass('current');
$(this).addClass('current');
$('#container').remove();
$('#content').load(url + ' #container').hide().fadeIn(500);
});
*/
