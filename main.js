var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');
addCirc(350,350,10,0,Math.PI*2,"white");

addCirc(350,100,25,0,Math.PI*2,"blue";
addCirc(350,225,25,0,Math.PI*2,"purple");
addCirc(220,225,25,0,Math.PI*2,"red");
addCirc(480,225,25,0,Math.PI*2,"yellow");
addCirc(100,350,25,0,Math.PI*2,"green");
addCirc(220,350,25,0,Math.PI*2,"blue");
addCirc(480,350,25,0,Math.PI*2,"pink");
addCirc(600,350,25,0,Math.PI*2,"orange");
addCirc(220,480,25,0,Math.PI*2,"brown");
addCirc(350,480,25,0,Math.PI*2,"purple");
addCirc(480,480,25,0,Math.PI*2,"green");
addCirc(350,600,25,0,Math.PI*2,"black");

addCirc(50,50,25,0,Math.PI*2,"white");
addCirc(650,50,25,0,Math.PI*2,"white");
addCirc(50,650,25,0,Math.PI*2,"white");
addCirc(650,650,25,0,Math.PI*2,"white");
function addCirc(x,y,r,s,c,fill){
    ctx.beginPath();
    ctx.arc(x,y,r,s,c);
    ctx.stroke();
    ctx.fillStyle = fill;
    ctx.fill();
}

