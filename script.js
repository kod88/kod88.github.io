var widthMax = window.innerWidth;
var heightMax = window.innerHeight;
function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}
var rdmPos = Math.round(getRandomArbitrary(0,widthMax));
console.log(rdmPos);

function dropGen(){
rdmPos = Math.round(getRandomArbitrary(0,widthMax));
var animation = document.getElementById("animation");
var img = document.createElement("img");
img.setAttribute("src","drop2.png");
var imgtr = 'translateX('+rdmPos+'px)';
img.style.transform = imgtr;
console.log(img);
animation.appendChild(img);
}

for(var i = 0 ; i < 100 ;i++){
setTimeout(dropGen,(Math.round(Math.random()*1000)));
}