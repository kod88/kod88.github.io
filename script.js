var cvs = document.getElementById("canvas");
var ctx = cvs.getContext("2d");

var bg = new Image();
var fg = new Image();
var pipeTop = new Image();
var pipeBottom = new Image();
var fail = new Image();
var nuke = new Image();

var characters = new Array();
characters[0] = new Image();
characters[0].src = "img/characters/1.png";
characters[1] = new Image();
characters[1].src = "img/characters/2.png";
characters[2] = new Image();
characters[2].src = "img/characters/3.png";
characters[3] = new Image();
characters[3].src = "img/characters/4.png";
characters[4] = new Image();
characters[4].src = "img/characters/5.png";

var bosses = new Array();
bosses[0] = new Image();
bosses[0].src = "img/bosses/b1.png";
bosses[1] = new Image();
bosses[1].src = "img/bosses/b2.png";
bosses[2] = new Image();
bosses[2].src = "img/bosses/b3.png";
bosses[3] = new Image();
bosses[3].src = "img/bosses/b4.png";
bosses[4] = new Image();
bosses[4].src = "img/bosses/b5.png";

var boss = bosses[Math.floor(Math.random()*(bosses.length))];

var hero = characters[Math.floor(Math.random()*(characters.length))]; 
console.log(hero);

bg.src = "img/flappy_bird_bg.png";
fg.src = "img/flappy_bird_fg.png";
pipeTop.src = "img/flappy_bird_pipeUp.png";
pipeBottom.src = "img/flappy_bird_pipeBottom.png";
fail.src = "img/fail.png";
nuke.src = "img/nuke.png";


//звуковые файлы
var fly = new Audio();
var score_audio = new Audio();

fly.src = "audio/fly.mp3";
score_audio.src = "audio/score.mp3";

// Вспомогательные переменные
var gap = 85;
var score = 0;

// При нажатии на какую-либо кнопку

document.addEventListener("keydown", moveUp);
document.onclick = moveUp;
function moveUp(){
	yPos -= 30 ;
	fly.play();
}

// Создание блоков

var pipe = [];

pipe[0] = {
	x : cvs.width,
	y : 0
}



//Позиция птички

var xPos = 10;
var yPos = 150;

var grav = 1.5;
function draw() {
	ctx.drawImage(bg , 0 , 0);

	for (var i = 0; i < pipe.length ; i++ )
	{
	
	ctx.drawImage(pipeTop , pipe[i].x , pipe[i].y)

	ctx.drawImage(boss , pipe[i].x + 13 , pipe[i].y + pipeTop.height - 63)

	ctx.drawImage(pipeBottom , pipe[i].x , pipe[i].y + pipeTop.height + gap)
	
	ctx.drawImage(boss , pipe[i].x + 13 , pipe[i].y + pipeTop.height + 107)
	pipe[i].x--;
		if(pipe[i].x == 90)
		{
			pipe.push({
				x : cvs.width,
				y : Math.floor(Math.random()* pipeTop.height) - pipeTop.height
			});

		} 
		// Отслеживание прикосновений
		if(xPos = hero.width >= pipe[i].x
			&& xPos <= pipe[i].x + pipeTop.width
			&& (yPos <= pipe[i].y + pipeTop.height
				|| yPos + hero.height >= pipe[i].y + pipeTop.height + gap 
				) || yPos + hero.height >= cvs.height - fg.height)
			{
				grav = 0;
				score_audio.src = "";
				ctx.drawImage(fail , 10 , 150 , 261 , 161);
				hero = nuke ;
				function restart()
				{
				location.reload(); // Перезагрузка страницы
				}
			setTimeout(restart, 500);
			}
			if(pipe[i].x == -15) {
				score++;
				score_audio.play();
			}
	}
	ctx.drawImage(fg , 0 , cvs.height - fg.height);
	ctx.drawImage(hero , xPos , yPos);

	yPos += grav;

	ctx.fillStyle = "#000";
	ctx.font = "24px Verdana";
	ctx.fillText("Сдано билетов: " + score , 10 , cvs.height - 20);

	requestAnimationFrame(draw)
}

pipeBottom.onload = draw;
