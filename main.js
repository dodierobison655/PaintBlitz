var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');
setInterval(draw, 1000 / 60);
function addCirc(x,y,r,s,c){
    ctx.beginPath();
    ctx.arc(x,y,r,s,c,true);
    ctx.stroke();
    ctx.closePath();
    ctx.fill();
}
function normalize(v)
{
    var length = Math.sqrt(v.x * v.x + v.y * v.y);
    return {x: v.x / length, y: v.y / length};
}
function getMousePosX(canvas, evt) {
    var rect = canvas.getBoundingClientRect();
    return {
        x: evt.clientX - rect.left,
        y: evt.clientY - rect.top
    }
}
canvas.addEventListener('mousemove', function(evt) {
        var mousePos = getMousePos(canvas, evt);
      }, false);
      
function draw(){
    ctx.clearRect(position.x-10,position.y-10,30,30);
    ctx.fillStyle="#FFFFFF";
    addCirc(position.x,position.y,10,0,Math.PI*2);
    position.x += step.x;
    position.y += step.y;
}
ctx.fillStyle="#8D5858";
addCirc(350,100,25,0,Math.PI*2);
ctx.fillStyle="#8E44AD";
addCirc(350,225,25,0,Math.PI*2);
ctx.fillStyle="#E74C3C";
addCirc(220,225,25,0,Math.PI*2);
ctx.fillStyle="#F7DC6F";
addCirc(480,225,25,0,Math.PI*2);
ctx.fillStyle="#1ABC9C";
addCirc(100,350,25,0,Math.PI*2);
ctx.fillStyle="#3498DB";
addCirc(220,350,25,0,Math.PI*2);
ctx.fillStyle="#F93BEA";
addCirc(480,350,25,0,Math.PI*2);
ctx.fillStyle="#F39C12";
addCirc(600,350,25,0,Math.PI*2);
ctx.fillStyle="#77551F";
addCirc(220,480,25,0,Math.PI*2);
ctx.fillStyle="#9F9F9F";
addCirc(350,480,25,0,Math.PI*2);
ctx.fillStyle="#39F5EA";
addCirc(480,480,25,0,Math.PI*2);
ctx.fillStyle="#000000";
addCirc(350,600,25,0,Math.PI*2);
ctx.fillStyle="#FFFFFF";

addCirc(50,50,25,0,Math.PI*2);
addCirc(650,50,25,0,Math.PI*2);
addCirc(50,650,25,0,Math.PI*2);
addCirc(650,650,25,0,Math.PI*2);


