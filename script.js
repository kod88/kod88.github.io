function example(){
	document.getElementById("v0").value = 5;
	document.getElementById("angle").value = 60;
	document.getElementById("k").value = 0.7;
}


function Go(){
v0 = document.getElementById("v0").value;
angle = document.getElementById("angle").value;
k = document.getElementById("k").value;

if(v0 == "" || angle == "" || k == "" ){
	alert("Введите исходные данные!");
}
else{

//Создание массива
var coords =[];
for (let i = 0;i<2;i++){
coords[i]=[];
for (let j = 0;j<10000;j++){
	coords[i][j]=0;
}}
var t = 0.01;
var step = 0;
var i = 1;
var l = 0;
const g = 9.8;
coords[1][0] = 0;

//Функции
var y = (t) =>v0 * t*Math.sin(angle * (3.14159265359 / 180)) - (g*(t*t)) / 2;
var x = (t) =>v0 * t*Math.cos(angle * (3.14159265359 / 180));


	while (v0 > 0.01) {
	if (step == 1) {
		v0 = v0 * k;
		step = 0;
	}
	else {
		t = 0.01;
		while (coords[1][i - 1] >= 0)
			{
			coords[0][i] = l + x(t);
			coords[1][i] = y(t);
			t = t + 0.01;
			i++;
			}
		l = coords[0][i - 1];
		coords[1][i - 1] = 0;
		step = 1;
		}
	}

	var test=[];
	test[0]=['x','y(t)'];
for(let i = 1;i<10000;i++){
	test[i]=[coords[0][i],coords[1][i]];}


//
      google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {
        var data = google.visualization.arrayToDataTable(test);

        var options = {
          title: 'Полёт мяча',
          curveType: 'function',
          legend: { position: 'bottom' }
        };

        var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));

        chart.draw(data, options);
      }


}
}
