var canava = document.getElementById('wrapper');
var ctx = canava.getContext('2d');
var canavaCenterX = canava.offsetWidth / 2; 
var canavaCenterY = canava.offsetHeight / 2;
var radius = 120;
var angleValue = 0;
var numHours = 12;
var intervalNum = 30; //расстояние между цифрами на циферблате

var elWatch,
  elWatchText,
  elWatchWidth = 90,
  elWatchHeight = 25,
  radiusElWatch = 70;

var arrHours, // часовая стрелка
  arrHoursHeight = 60,
  arrHoursWidth = 9;

var arrMinutes, //минутная стрелка
  arrMinutesHeight = 105,
  arrMinutesWidth = 5;

var arrSeconds, //секундная стрелка
  arrSecondsHeight = 130,
  arrSecondsWidth = 3;

var hoursDeg, //положение часовой стрелки
	minutesDeg, //положение минутной стрелки
	secondsDeg; //положение секундной стрелки

function BigClock() {
  ctx.beginPath();
  ctx.fillStyle = 'black';
  ctx.arc(canavaCenterX, canavaCenterY, 150, 0, Math.PI * 2, false);
  ctx.fill();

  for(var i = 1; i <= numHours; i++){
    var miniCircleCX,
      miniCircleCY,
      miniCircleRadius = 20,
      miniCircleColor = 'white',
      angle;

    angleValue += intervalNum;
    angle = angleValue / 180 * Math.PI;
    miniCircleCX = Math.round(canavaCenterX + radius * Math.sin(angle));
    miniCircleCY = Math.round(canavaCenterY - radius * Math.cos(angle));
    
    ctx.beginPath();
    ctx.fillStyle = miniCircleColor;
    ctx.arc(miniCircleCX, miniCircleCY, miniCircleRadius, 0, Math.PI * 2, false);
    ctx.fill();
    ctx.fillStyle = 'black';
		ctx.font = 'normal normal 18px "Montserrat"';
		ctx.textAlign = 'center';
		ctx.textBaseline = 'middle';
		ctx.fillText(i, miniCircleCX, miniCircleCY);
  }
}

function elWatch() {
	var time = new Date();
	ctx.globalCompositeOperation = 'source-over';
  ctx.beginPath();
	ctx.fillStyle = 'black';
	ctx.fillRect(canavaCenterX - elWatchWidth / 2, canavaCenterY - radiusElWatch - elWatchHeight / 2, 100, 25);
	ctx.fill();
	ctx.fillStyle = 'white';
	elWatchText = time.toLocaleTimeString();
	ctx.font = 'normal normal 20px "Montserrat"';
	ctx.textAlign = 'center';
	ctx.textBaseline = 'middle';
	ctx.fillText(elWatchText, canavaCenterX, canavaCenterY - radiusElWatch);	
	ctx.fill();
}

function arrowHours() {
	var time = new Date();
	hoursDeg = 30 * (time.getHours() + (1 / 60) * time.getMinutes());
  ctx.beginPath();
	ctx.strokeStyle = 'white';
	ctx.lineWidth = arrHoursWidth;
	ctx.lineCap = 'round';
	ctx.moveTo(canavaCenterX, canavaCenterY);
	ctx.lineTo(canavaCenterX + arrHoursHeight * Math.sin(hoursDeg / 180 * Math.PI), canavaCenterY - arrHoursHeight * Math.cos(hoursDeg / 180 * Math.PI));
	ctx.stroke();
}
function arrowMinutes() {
	var time = new Date();
	minutesDeg = 6 * (time.getMinutes() + (1 / 60) * time.getSeconds());
  ctx.beginPath();
	ctx.strokeStyle = 'white';
	ctx.lineWidth = arrMinutesWidth;
	ctx.lineCap = 'round';
	ctx.moveTo(canavaCenterX, canavaCenterY);
	ctx.lineTo(canavaCenterX + arrMinutesHeight * Math.sin(minutesDeg/180*Math.PI), canavaCenterY - arrMinutesHeight * Math.cos(minutesDeg/180*Math.PI));
	ctx.stroke();
  
}
function arrowSeconds() {
	var time = new Date();
	secondsDeg = 6 * time.getSeconds();
  ctx.beginPath(); 
	ctx.strokeStyle = 'red';
	ctx.lineWidth = arrSecondsWidth;
	ctx.lineCap = 'round';
	ctx.moveTo(canavaCenterX, canavaCenterY);
	ctx.lineTo(canavaCenterX + arrSecondsHeight * Math.sin(secondsDeg/180*Math.PI), canavaCenterY - arrSecondsHeight * Math.cos(secondsDeg/180*Math.PI));
	ctx.stroke();
}

function arrows() {
	BigClock(); 
	elWatch(); 
	arrowHours(); 
	arrowMinutes(); 
	arrowSeconds(); 
}

window.onload = arrows(); 
window.setInterval (arrows, 1000);