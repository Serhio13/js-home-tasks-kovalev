var baseRadius = 300;
var numbersBaseRadius = baseRadius / 2.5; 
var circleRadius = 20;
var dotSize = 8;
var wrapper = document.getElementById('wrapper');

function createClock() {
  wrapper.appendChild(createSvg(300, 300));
}

function createSvg(width, height) {
  var svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svg.setAttribute('width', width);
  svg.setAttribute('height', height);
  svg.appendChild(createCircle(150, 150, 150));
  svg.appendChild(createClockFace());
  svg.appendChild(createHourArrow(6, 70, 'hour', 'white'));
  svg.appendChild(createHourArrow(4, 110, 'minute', 'white'));
  svg.appendChild(createHourArrow(2, 135, 'second', 'red'));
  svg.appendChild(createDot(dotSize, 150, 150));
  svg.appendChild(createDigitalWatch());
  return svg;
}

function createCircle(radius, cx, cy) {
  var circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
  circle.setAttribute('r', radius);
  circle.setAttribute('cx', cx);
  circle.setAttribute('cy', cy);
  circle.setAttribute('fill', 'black');
  circle.setAttribute('id', 'base');
  return circle;
}

function createDot(size, cx, cy) {
  var dot = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
  dot.setAttribute('r', size);
  dot.setAttribute('cx', cx);
  dot.setAttribute('cy', cy);
  dot.setAttribute('fill', 'white');
  return dot;
}

function createClockFace() {
  var clockFace = document.createDocumentFragment();
    for (var number = 1; number <= 12; number++) {
      var angle = number * 30 / 180 * Math.PI;
      var cx = Math.round(((baseRadius - circleRadius) / 1.83) + Math.sin(angle) * numbersBaseRadius);
      var cy = Math.round(((baseRadius - circleRadius) / 1.83) - Math.cos(angle) * numbersBaseRadius);
      var text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
      text.setAttribute('x', cx);
      text.setAttribute('y', cy);
      text.setAttribute('fill', 'black');
      text.setAttribute('font-size', 25);
      text.setAttribute('text-anchor', 'middle');
      text.textContent = number;
      clockFace.appendChild(createHourCircle(cx, cy, circleRadius));
      clockFace.appendChild(text);
    }
  return clockFace;
}

function createHourCircle(circleX, circleY, radius) {
  var circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
  circle.setAttribute('cx', circleX);
  circle.setAttribute('cy', circleY);
  circle.setAttribute('fill', 'white');
  circle.setAttribute('r', radius);
  return circle;
}

function createHourArrow(arrowWidth, arrowHeight, id, color) {
  var arrow = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
  var x = baseRadius / 2;
  var y = 150 - arrowHeight + arrowHeight * 0.1;
  arrow.setAttribute('x', x);
  arrow.setAttribute('y', y);
  arrow.setAttribute('rx', 20);
  arrow.setAttribute('ry', 20);
  arrow.setAttribute('width', arrowWidth);
  arrow.setAttribute('height', arrowHeight);
  arrow.setAttribute('id', id);
  arrow.setAttribute('fill', color);
  return arrow;
}

function createDigitalWatch() {
  var digitalClock = document.createElementNS('http://www.w3.org/2000/svg', 'text');
  var x = baseRadius / 2 - 40;
  var y = baseRadius / 2 - 60;
  digitalClock.setAttribute('x', x);
  digitalClock.setAttribute('y', y);
  digitalClock.setAttribute('fill', 'white');
  digitalClock.setAttribute('font-size', 20);
  digitalClock.setAttribute('id', 'digital');
  return digitalClock;
}

function tickTimer() {
  var now = new Date();
  var thisSecond = now.getSeconds();
  var thisMinute = now.getMinutes();
  var thisHour = now.getHours();
  var hourArrowPosition = thisHour * 30 + (thisMinute * 60 + thisSecond) * (1 / 120);
  var secondArrow = document.getElementById('second');
  var minuteArrow = document.getElementById('minute');
  var hourArrow = document.getElementById('hour');
  secondArrow.setAttribute('transform', 'rotate(' + thisSecond * 6 + ' ' + 150 + ' ' + 150 + ' )');
  minuteArrow.setAttribute('transform', 'rotate(' + thisMinute * 6 + ' ' + 150 + ' ' + 150 + ' )');
  hourArrow.setAttribute('transform', 'rotate(' + hourArrowPosition + ' ' + 150 + ' ' + 150 + ' )');
  var digitalClockText = document.getElementById('digital');
  digitalClockText.textContent = now.toLocaleTimeString();
}

createClock();
setInterval(tickTimer, 1000);