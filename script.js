function b(){
	$('li').each(function(index){
		$(this).delay(500*index).slideToggle(300);
	});
}

$(function(){

var $newItemButton = $('#newItemButton');
var $newItemForm = $('#newItemForm');
var $textInput = $('input:text');

$newItemButton.show();
$newItemForm.hide();

$('#showForm').on('click',function(){
$newItemButton.hide();
$newItemForm.show();
});

$('#addButton').on('click',function(e){
e.preventDefault();
var $newElement = $('input:text').val();
$('ul').append("<li>" + $newElement + "</li>");
$newItemForm.hide();
$newItemButton.show();
});

});
console.log(); 
document.write();
