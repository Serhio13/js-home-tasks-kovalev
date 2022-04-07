var wrap = document.getElementById('wrapper'); 
var wrapCenterX = wrap.offsetLeft + wrap.offsetWidth / 2;  // центр DIV
var wrapCenterY = wrap.offsetTop + wrap.offsetHeight / 2;  // центр DIV
var wrapChildElemForDigitalWatch = document.createElement("div");  // DIV для электронных часов
var radius = 120;
var radiusForDigitalWatch = 70;
var angleValue = 0; // угол
var distanceOfDigits = 30; // расстояние(в градусах) между цифрами на часах
var time = new Date();
var elemForArrowHours = document.createElement("div"); // DIV для стрелки часов
var elemForArrowMinutes = document.createElement("div"); // DIV для стрелки минут
var elemForArrowSeconds = document.createElement("div"); // DIV для стрелки секунд
var hoursDeg = 30 * (time.getHours() + (1 / 60) * time.getMinutes()); //определяем где должна быть стрелка часов
var minutesDeg = 6 * (time.getMinutes() + (1 / 60) * time.getSeconds()); //определяем где должна быть стрелка минут
var secondsDeg = 6 * time.getSeconds() - 6; //определяем где должна быть стрелка секунд
var hourDigits = 12; //цифры часов

for (var i = 1; i <= hourDigits; i++) {
	var wrapChildElem = document.createElement("div");// создаем DIV(для номеров часов)
	var angle;
	var wrapChildElemCenterX;
	var wrapChildElemCenterY;

	angleValue += distanceOfDigits;
	angle = angleValue / 180 * Math.PI;

	wrapChildElem = wrap.appendChild(wrapChildElem);
	wrapChildElem.classList.add('childElem');
	wrapChildElem.innerHTML = i;

	wrapChildElemCenterX = wrapCenterX + radius * Math.sin(angle);
	wrapChildElemCenterY = wrapCenterY - radius * Math.cos(angle);

	wrapChildElem.style.left = Math.round(wrapChildElemCenterX - wrapChildElem.offsetWidth/2) + "px";
	wrapChildElem.style.top = Math.round(wrapChildElemCenterY - wrapChildElem.offsetHeight/2) + "px";
}

// вставляем созданные элементы в конец дочерных элементов
wrapChildElemForDigitalWatch = wrap.appendChild(wrapChildElemForDigitalWatch);
elemForArrowHours = wrap.appendChild(elemForArrowHours);
elemForArrowMinutes = wrap.appendChild(elemForArrowMinutes);
elemForArrowSeconds = wrap.appendChild(elemForArrowSeconds);

// устанавливаем класс для электронных часов и к каждой стрелке
wrapChildElemForDigitalWatch.classList.add("childElemForDigitalWatch"); 
elemForArrowHours.classList.add("elemForArrowHours");
elemForArrowMinutes.classList.add("elemForArrowMinutes");
elemForArrowSeconds.classList.add("elemForArrowSeconds");

// определяем где будет стоять электронные часы
wrapChildElemForDigitalWatch.style.left = wrapCenterX - wrapChildElemForDigitalWatch.offsetWidth/2 + "px";
wrapChildElemForDigitalWatch.style.top = wrapCenterY - radiusForDigitalWatch + "px";
// определяем где будет стоять стрелка часа
elemForArrowHours.style.top = wrapCenterY - elemForArrowHours.offsetHeight+10 + "px";
elemForArrowHours.style.left = wrapCenterX - elemForArrowHours.offsetWidth/2 + "px";
// определяем где будет стоять стрелка минут
elemForArrowMinutes.style.top = wrapCenterY - elemForArrowMinutes.offsetHeight+10 + "px";
elemForArrowMinutes.style.left = wrapCenterX - elemForArrowMinutes.offsetWidth/2 + "px";
// определяем где будет стоять стрелка секнд
elemForArrowSeconds.style.top = wrapCenterY - elemForArrowSeconds.offsetHeight+10 + "px";
elemForArrowSeconds.style.left = wrapCenterX - elemForArrowSeconds.offsetWidth/2 + "px";

// определяем точку трансформации стрелок часов, минут, секунд по оси X и Y
elemForArrowHours.style.transformOrigin = "center 50px";
elemForArrowMinutes.style.transformOrigin = "center 110px";
elemForArrowSeconds.style.transformOrigin = "center 135px";

// функция для определения положения электронных часов и стрелок для часов, минут, секунд
function arrows() {
	var time = new Date();
	wrapChildElemForDigitalWatch.innerHTML = time.toLocaleTimeString();
	
	secondsDeg += 6;
	elemForArrowSeconds.style.transform = "rotate(" + secondsDeg + "deg)";

	minutesDeg += 6 * (1/60); //каждую секунду стрелка минута будет двигать на 6*(1/60) градусов
	elemForArrowMinutes.style.transform = "rotate(" + minutesDeg + "deg)";
	
	hoursDeg += 6 * (1/360); //каждую секунду стрелка часа будет двигать на 6*(1/360) градусов
	elemForArrowHours.style.transform = "rotate(" + hoursDeg + "deg)";
	}

window.onload = arrows();
window.setInterval (arrows, 1000);
