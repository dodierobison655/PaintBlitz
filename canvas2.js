var canvas = document.getElementById('myCanvas2');
var ctx2 = canvas.getContext('2d');
setInterval(draw, 1000 / 60);
var positionx = 350;
var positiony = 350;
var stepx = 0;
var stepy = 0;
function draw(){
    ctx2.clearRect(position.x-10,position.y-10,30,30);
    ctx2.fillStyle="#FFFFFF";
    addCirc(position.x,position.y,10,0,Math.PI*2);
    positionx += stepx;
    positiony += stepy;
	stepx = 0;
	stepy = 0;
}
function addCirc(x,y,r,s,c){
    ctx2.beginPath();
    ctx2.arc(x,y,r,s,c,true);
    ctx2.stroke();
    ctx2.closePath();
    ctx2.fill();
}
window.onkeyup = function(e) {
	var key = e.keyCode ? e.keyCode : e.which;
	if(key == 37){
		stepx = -5;
	}
	if(key == 38){
		stepy = -5;
	}
	if(key == 39){
		stepx = 5;
	}
	if(key == 40){
		step y = 5;
	}
}