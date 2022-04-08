var wrap = document.getElementById('wrapper');
var widthOfWrap = "700px";
var heightOfWrap = "400px";
var buttonStart = document.createElement("input");
var scoreBoard = document.createElement("div");
var score1 = 0;
var score2 = 0;
var racquet1 = document.createElement("div");
var	racquet2 = document.createElement("div");
var racquetH; //создаём переменную racquetH для дальнейшей работы с ракетками
var racquetAreaH; //создаём переменную racquetAreaH для дальнейшей работы с ракетками
var ball = document.createElement("div"); //создаём div для мячика
var ballH; //создаём переменную ballH для дальнейшей работы с мячиком
var areaH; //создаём переменную areaH для дальнейшей работы с мячиком
var settimeout; //создаём переменную settimeout для дальнейшей работы с таймером

wrap.style.width = widthOfWrap;
wrap.style.height = heightOfWrap;

requestAnimationFrame(tick);

buttonStart.type = "button";
buttonStart.value = "старт!";
buttonStart.classList.add('buttonStart');//устанавливаем готовый CSS класс
buttonStart = document.body.insertBefore(buttonStart, document.body.children[0]); //созданную кнопку делаем дочерным элементом body
buttonStart.onclick = start;

scoreBoard.classList.add('scoreBoard');//устанавливаем готовый CSS класс
scoreBoardInnerHTML(); //вызываем функцию чтоб на табло вывести очки(score1 и score2) игроков
scoreBoard = document.body.insertBefore(scoreBoard, document.body.children[1]); //созданный табло делаем дочерным элементом body

racquet1.classList.add('racquet1');//устанавливаем готовый CSS класс
racquet2.classList.add('racquet2');//устанавливаем готовый CSS класс

racquet1 = wrap.appendChild(racquet1); //созданную первую(левую) ракетку делаем дочерным элементом wrap
racquet2 = wrap.appendChild(racquet2); //созданную вторую(правую) ракетку делаем дочерным элементом wrap

racquetH = {
	racquet1PosX: wrap.getBoundingClientRect().left,
	racquet1PosY: wrap.getBoundingClientRect().top + wrap.getBoundingClientRect().height/2 - racquet1.getBoundingClientRect().height/2,
	racquet1Speed: 0,
	
	racquet2PosX: wrap.getBoundingClientRect().left + wrap.getBoundingClientRect().width - racquet2.getBoundingClientRect().width,
	racquet2PosY: wrap.getBoundingClientRect().top + wrap.getBoundingClientRect().height/2 - racquet1.getBoundingClientRect().height/2,
	racquet2Speed: 0,
	width: 10,
	height: 120,

	update: function() {
		var racquet1Obj = racquet1;
		var racquet2Obj = racquet2;

		racquet1Obj.style.left = this.racquet1PosX + "px";
		racquet1Obj.style.top = this.racquet1PosY + "px";

		racquet2Obj.style.left = this.racquet2PosX + "px";
		racquet2Obj.style.top = this.racquet2PosY + "px";					
	}
};

racquetAreaH = {
	width: 10,
	height: wrap.getBoundingClientRect().height
};

racquetH.update();

ball.classList.add('ball'); //устанавливаем готовый CSS класс
ball = wrap.appendChild(ball); //созданный мячик делаем дочерным элементом wrap

ballH = {
	posX: wrap.getBoundingClientRect().left + wrap.getBoundingClientRect().width/2 - ball.getBoundingClientRect().width/2,
	posY: wrap.getBoundingClientRect().top + wrap.getBoundingClientRect().height/2 - ball.getBoundingClientRect().height/2,
	speedX: 0, //ballH.speedX = 4
	speedY: 0, //ballH.speedY = 2
	width: 30,
	height: 30,

	update: function() {
		var ballObj = ball;
		ballObj.style.left = this.posX + "px";
		ballObj.style.top = this.posY + "px";
	}
};

areaH = {
	width: wrap.getBoundingClientRect().width,
	height: wrap.getBoundingClientRect().height
};

ballH.update();

window.addEventListener("keydown", function(EO) {
	EO = EO || window.event;
    EO.preventDefault();

    if (EO.key === 'Control') {
   		racquetH.racquet1Speed = 5;
   	}

   	if (EO.key === 'Shift') {
   		racquetH.racquet1Speed = -5;
   	}

   	if (EO.key === 'ArrowDown') {
   		racquetH.racquet2Speed = 5;
   	}

   	if (EO.key === 'ArrowUp') {
   		racquetH.racquet2Speed = -5;
   	}
});

window.addEventListener("keyup", function(EO) {
	EO = EO || window.event;
    EO.preventDefault();

    if (EO.key === 'Control') {
   		racquetH.racquet1Speed = 0;
   	}

   	if (EO.key === 'Shift') {
   		racquetH.racquet1Speed = 0;
   	}

   	if (EO.key === 'ArrowDown') {
   		racquetH.racquet2Speed = 0;
   	}

   	if (EO.key === 'ArrowUp') {
   		racquetH.racquet2Speed = 0;
   	}
});

function scoreBoardInnerHTML() {
	scoreBoard.innerHTML = score1 + ":" + score2;
}

function start() {
	ballH.speedX = 8;//4
	ballH.speedY = 3;//2
}

//ф-ция для того чтоб мяч двигался, не выходил из рамки и т.д.
function tick() {
	racquetH.update();
	racquetH.racquet1PosY += racquetH.racquet1Speed;
	if (racquetH.racquet1PosY + racquetH.height > (wrap.getBoundingClientRect().top + racquetAreaH.height)) {
		racquetH.racquet1PosY = wrap.getBoundingClientRect().top + racquetAreaH.height - racquetH.height;
	}

	if (racquetH.racquet1PosY < wrap.getBoundingClientRect().top) {
		racquetH.racquet1PosY = wrap.getBoundingClientRect().top;
	}

  racquetH.racquet2PosY += racquetH.racquet2Speed;

	if (racquetH.racquet2PosY + racquetH.height > (wrap.getBoundingClientRect().top + racquetAreaH.height)) {
		racquetH.racquet2PosY = wrap.getBoundingClientRect().top + racquetAreaH.height - racquetH.height;
	}

	if (racquetH.racquet2PosY < wrap.getBoundingClientRect().top) {
		racquetH.racquet2PosY = wrap.getBoundingClientRect().top;
	}

	ballH.posX -= ballH.speedX;

	if ((ballH.posY + ballH.height < racquetH.racquet2PosY || ballH.posY > (racquetH.racquet2PosY + racquetH.height)) && ballH.posX+ballH.width >= (wrap.getBoundingClientRect().left + wrap.getBoundingClientRect().width)) {

		score1 += 1;
		scoreBoardInnerHTML();
		ballH.speedX = 0;
		ballH.speedY = 0;
		messageGoal.innerHTML = messageGoalText;

		ballH.posX = wrap.getBoundingClientRect().left + wrap.getBoundingClientRect().width - ballH.width - 1;
		
		settimeout = window.setTimeout(function () {
			messageGoal.innerHTML = "";
			ballH.posX = wrap.getBoundingClientRect().left + racquetH.width;
			ballH.posY = racquetH.racquet1PosY + racquetH.height/2;
			start();
		}, 2000);

	} else if (!(ballH.posY + ballH.height < racquetH.racquet2PosY || ballH.posY > (racquetH.racquet2PosY + racquetH.height)) && ballH.posX+ballH.width > (racquetH.racquet2PosX)) {
		ballH.speedX =- ballH.speedX;
    ballH.posX = wrap.getBoundingClientRect().left + wrap.getBoundingClientRect().width - racquetH.width - ballH.width;
	}

	if ((ballH.posY + ballH.height < racquetH.racquet1PosY || ballH.posY > (racquetH.racquet1PosY + racquetH.height)) && ballH.posX <= (wrap.getBoundingClientRect().left)) {
		
		score2 += 1;
		scoreBoardInnerHTML();
		ballH.speedX = 0;
		ballH.speedY = 0;
		messageGoal.innerHTML = messageGoalText;

		ballH.posX = wrap.getBoundingClientRect().left + 1;

		settimeout = window.setTimeout(function () {
			messageGoal.innerHTML = "";
			ballH.posX = wrap.getBoundingClientRect().left + wrap.getBoundingClientRect().width - racquetH.width;
			ballH.posY = racquetH.racquet2PosY + racquetH.height/2;
			start();
		}, 2000);

	} else if (!(ballH.posY + ballH.height < racquetH.racquet1PosY || ballH.posY > (racquetH.racquet1PosY + racquetH.height)) && ballH.posX < (racquetH.width + racquetH.racquet1PosX)) {
		ballH.speedX =- ballH.speedX;
    ballH.posX = wrap.getBoundingClientRect().left + racquetH.width;
	}
	
    ballH.posY -= ballH.speedY;
    if (ballH.posY + ballH.height > (wrap.getBoundingClientRect().top + areaH.height)) {
      ballH.speedY =- ballH.speedY;
      ballH.posY = wrap.getBoundingClientRect().top + areaH.height - ballH.height;
    }

    if (ballH.posY < wrap.getBoundingClientRect().top) {
      ballH.speedY =- ballH.speedY;
      ballH.posY = wrap.getBoundingClientRect().top;
    }

  ballH.update();

  requestAnimationFrame(tick);
}