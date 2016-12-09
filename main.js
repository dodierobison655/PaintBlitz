var c1 = document.getElementById('myCanvas').getContext('2d');
var c2 = document.getElementById('myCanvas2').getContext('2d');
var positionx = 350;
var positiony = 350;
var stepx = 0;
var stepy = 0;
var time = 5;
window.onload = function(){
	setInterval(draw, 1 / 600);
    setInterval(function(){
        time-=1;
        document.getElementById("timer1").value == time;
        document.getElementById("timer2").value == time;
        document.getElementById("timer3").value == time;
        document.getElementById("timer4").value == time;
    }, 1000); 
}
window.onkeydown = function(e) {
	var key = e.keyCode ? e.keyCode : e.which;
	if(key == 37){
		stepx = -10;
	}
	if(key == 38){
		stepy = -10;
	}
	if(key == 39){
		stepx = 10;
	}
	if(key == 40){
		stepy = 10;
	}
}
function addCirc(x,y,r,s,c){
    c1.beginPath();
    c1.arc(x,y,r,s,c,true);
    c1.stroke();
    c1.closePath();
    c1.fill();
}
c1.fillStyle="#8D5858";
addCirc(350,100,25,0,Math.PI*2);
c1.fillStyle="#8E44AD";
addCirc(350,225,25,0,Math.PI*2);
c1.fillStyle="#E74C3C";
addCirc(220,225,25,0,Math.PI*2);
c1.fillStyle="#F7DC6F";
addCirc(480,225,25,0,Math.PI*2);
c1.fillStyle="#1ABC9C";
addCirc(100,350,25,0,Math.PI*2);
c1.fillStyle="#3498DB";
addCirc(220,350,25,0,Math.PI*2);
c1.fillStyle="#F93BEA";
addCirc(480,350,25,0,Math.PI*2);
c1.fillStyle="#F39C12";
addCirc(600,350,25,0,Math.PI*2);
c1.fillStyle="#77551F";
addCirc(220,480,25,0,Math.PI*2);
c1.fillStyle="#9F9F9F";
addCirc(350,480,25,0,Math.PI*2);
c1.fillStyle="#39F5EA";
addCirc(480,480,25,0,Math.PI*2);
c1.fillStyle="#000000";
addCirc(350,600,25,0,Math.PI*2);
c1.fillStyle="#FFFFFF";

addCirc(50,50,25,0,Math.PI*2);
addCirc(650,50,25,0,Math.PI*2);
addCirc(50,650,25,0,Math.PI*2);
addCirc(650,650,25,0,Math.PI*2);

var draw = function(){
	c2.clearRect(0,0,700,700);
	c2.fillStyle="#FFFFFF";
	c2.beginPath();
	c2.arc(positionx,positiony,10,0,Math.PI*2);
	c2.stroke();
	c2.closePath();
	c2.fill();
	positionx += stepx;
	positiony += stepy;
	stepx = 0;
	stepy = 0;
}
