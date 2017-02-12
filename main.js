var c1 = document.getElementById('myCanvas').getContext('2d');
var c2 = document.getElementById('myCanvas2').getContext('2d');
var positionx = 350;
var positiony = 350;
var stepx = 0;
var stepy = 0;
var time = 5.00;
var colorlist = ["#8D5858","#8E44AD","#E74C3C","#F7DC6F","#1ABC9C","#3498DB","#F93BEA","#F39C12","#77551F","#9F9F9F","#39F5EA","#000000"];
var randomcolor=colorlist[Math.floor(Math.random()*12)];
var roundscompleted = 0;
var roundover = false;
var leaderboard = {
	name:"",
	score:0
};
var leaderboard1 = {
	name:"",
	score:0
};
var leaderboard2 = {
	name:"",
	score:0
};
var leaderboard3 = {
	name:"",
	score:0
};
var leaderboard4 = {
	name:"",
	score:0
};
var leaderboard5 = {
	name:"",
	score:0
};
var leaderarray = [];
localStorage.setItem("Dodie",0);
var startGame = function(){
	c2.font = "20px Arial";
    setInterval(function(){
        if(time>0){
            time-=.01;
			time = Math.round(time*100)/100;
        }   
    }, 10); 
    setInterval(draw, 1 / 600);
}
window.onkeydown = function(e) {
	var key = e.keyCode ? e.keyCode : e.which;
	if(c2.text != "40px Arial"){
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
	if(key == 82){
		location.reload();
		c2.font = "20px Arial";
	}
	if(key == 83){
		startGame();
	}
		if(key == 76){
			c2.font = "40px Arial";
			c1.clearRect(0,0,700,700);
			c2.clearRect(0,0,700,700);
			c2.fillText("Leaderboard",250,150);
			for(var key in localStorage){
				console.log(a);
				if(a==0){
					leaderboard.name = String(key);
					leaderboard.score = localStorage.getItem(key);
					leaderarray[a] =(leaderboard);
				}
				if(a==1){
					leaderboard1.name = String(key);
					leaderboard1.score = localStorage.getItem(key);
					leaderarray[a] =(leaderboard1);
				}
				if(a==2){
					leaderboard2.name = String(key);
					leaderboard2.score = localStorage.getItem(key);
					leaderarray[a] =(leaderboard2);
				}
				if(a==3){
					leaderboard3.name = String(key);
					leaderboard3.score = localStorage.getItem(key);
					leaderarray[a] =(leaderboard3);
				}
				if(a==4){
					leaderboard4.name = String(key);
					leaderboard4.score = localStorage.getItem(key);
					leaderarray[a] =(leaderboard4);
				}
				if(a==5){
					leaderboard5.name = String(key);
					leaderboard5.score = localStorage.getItem(key);
					leaderarray[a] =(leaderboard5);
				}
				if(a==6){
					leaderboard5.name = String(key);
					leaderboard5.score = localStorage.getItem(key);
					a--;
				}
				a++;
				if(leaderarray.length>1){
					console.log("if passed");
					b = a;
					leaderarray.sort(function(a, b) {
						return parseFloat(b.score) - parseFloat(a.score);
					});
				}
			}
			for(var e = 0;e<leaderarray.length;e++){
				c2.fillText(leaderarray[e].name,50,250+50*e);
				c2.fillText(leaderarray[e].score,600,250+50*e);
			}
			a = 0;
		}
}
var holder = {};
var a = 0;
var b = 0;

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
c2.font = "20px Arial";
c2.fillText("'S' To Start",305,400);
c2.font = "40px Arial";
c2.fillText("Paint Blitz",270,325);
var checkform = function(){
	console.log(roundscompleted);
	localStorage.setItem(document.getElementById("name").value, roundscompleted);
	roundscompleted = 0;
}
var draw = function(){
	if(roundover == false){
		if(((positionx+10+stepx)<=700)&&((positiony-10+stepy)>=0)&&((positionx-10+stepx)>=0)&&((positiony+10+stepy)<=700)){
			c2.clearRect(0,0,700,700);
			c2.fillStyle=randomcolor;
			c2.beginPath();
			c2.arc(positionx,positiony,10,0,Math.PI*2);
			c2.stroke();
			c2.closePath();
			c2.fill();
			positionx += stepx;
			positiony += stepy;
			stepx = 0;
			stepy = 0;
			c2.fillStyle="#000000";
			c2.fillText(time,635,60);
			c2.fillText(time,35,60);
			c2.fillText(time,35,660);
			c2.fillText(time,635,660);
			c2.fillStyle="#FFFFFF";
		}
	}
    if(time<=0&&roundover == false){
        if(randomcolor===colorlist[0]&&positionx-10>=(350-25)&&positionx+10<=(350+25)&&positiony+10<=(100+25)&&positiony-10>=(100-25)){
			roundscompleted++;
			time = 5-(roundscompleted*(.25))
			positionx=350;
			positiony=350;
			randomcolor=colorlist[Math.floor(Math.random()*12)];
		}
		else if(randomcolor===colorlist[1]&&positionx-10>=(350-25)&&positionx+10<=(350+25)&&positiony+10<=(225+25)&&positiony-10>=(225-25)){
			roundscompleted++;
			time = 5-(roundscompleted*(.25))
			positionx=350;
			positiony=350;
			randomcolor=colorlist[Math.floor(Math.random()*12)];
			
		}
		else if(randomcolor===colorlist[2]&&positionx-10>=(220-25)&&positionx+10<=(220+25)&&positiony+10<=(225+25)&&positiony-10>=(225-25)){
			roundscompleted++;
			time = 5-(roundscompleted*(.25))
			positionx=350;
			positiony=350;
			randomcolor=colorlist[Math.floor(Math.random()*12)];
			
		}
		else if(randomcolor===colorlist[3]&&positionx-10>=(480-25)&&positionx+10<=(480+25)&&positiony+10<=(225+25)&&positiony-10>=(225-25)){
			roundscompleted++;
			time = 5-(roundscompleted*(.25))
			positionx=350;
			positiony=350;
			randomcolor=colorlist[Math.floor(Math.random()*12)];
			
		}
		else if(randomcolor===colorlist[4]&&positionx-10>=(100-25)&&positionx+10<=(100+25)&&positiony+10<=(350+25)&&positiony-10>=(350-25)){
			roundscompleted++;
			time = 5-(roundscompleted*(.25))
			positionx=350;
			positiony=350;
			randomcolor=colorlist[Math.floor(Math.random()*12)];
			
		}
		else if(randomcolor===colorlist[5]&&positionx-10>=(220-25)&&positionx+10<=(220+25)&&positiony+10<=(350+25)&&positiony-10>=(350-25)){
			roundscompleted++;
			time = 5-(roundscompleted*(.25))
			positionx=350;
			positiony=350;
			randomcolor=colorlist[Math.floor(Math.random()*12)];
			
		}
		else if(randomcolor===colorlist[6]&&positionx-10>=(480-25)&&positionx+10<=(480+25)&&positiony+10<=(350+25)&&positiony-10>=(350-25)){
			roundscompleted++;
			time = 5-(roundscompleted*(.25))
			positionx=350;
			positiony=350;
			randomcolor=colorlist[Math.floor(Math.random()*12)];
			
		}
		else if(randomcolor===colorlist[7]&&positionx-10>=(600-25)&&positionx+10<=(600+25)&&positiony+10<=(350+25)&&positiony-10>=(350-25)){
			roundscompleted++;
			time = 5-(roundscompleted*(.25))
			positionx=350;
			positiony=350;
			randomcolor=colorlist[Math.floor(Math.random()*12)];
			
		}
		else if(randomcolor===colorlist[8]&&positionx-10>=(220-25)&&positionx+10<=(220+25)&&positiony+10<=(480+25)&&positiony-10>=(480-25)){
			roundscompleted++;
			time = 5-(roundscompleted*(.25))
			positionx=350;
			positiony=350;
			randomcolor=colorlist[Math.floor(Math.random()*12)];
			
		}
		else if(randomcolor===colorlist[9]&&positionx-10>=(350-25)&&positionx+10<=(350+25)&&positiony+10<=(480+25)&&positiony-10>=(480-25)){
			roundscompleted++;
			time = 5-(roundscompleted*(.25))
			positionx=350;
			positiony=350;
			randomcolor=colorlist[Math.floor(Math.random()*12)];
			
		}
		else if(randomcolor===colorlist[10]&&positionx-10>=(480-25)&&positionx+10<=(480+25)&&positiony+10<=(480+25)&&positiony-10>=(480-25)){
			roundscompleted++;
			time = 5-(roundscompleted*(.25))
			positionx=350;
			positiony=350;
			randomcolor=colorlist[Math.floor(Math.random()*12)];
			
		}
		else if(randomcolor===colorlist[11]&&positionx-10>=(350-25)&&positionx+10<=(350+25)&&positiony+10<=(600+25)&&positiony-10>=(600-25)){
			roundscompleted++;
			time = 5-(roundscompleted*(.25))
			positionx=350;
			positiony=350;
			randomcolor=colorlist[Math.floor(Math.random()*12)];
			
		}
		else{
			c1.clearRect(0,0,700,700);
			c2.clearRect(0,0,700,700);
			c2.font = "60px Arial";
			c2.fillStyle = "Red";
			c2.fillText("Game Over",200,250); 
			c2.font = "40px Arial";
			c2.fillText("Press 'R' To Play Again",150,350);
			c2.fillText("Press 'L' For Leaderboard",125,450);
			roundover=true;
			for(var key in localStorage){
				if(roundscompleted>localStorage.getItem(key)){
					document.getElementById("form").style.visibility ="visible";
				}
			}
		}
    }
}
