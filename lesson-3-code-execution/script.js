// Task_1

var tasksCompleted = {
  'Anna': 29,
  'Serg': 35,
  'Elena': 1,
  'Anton': 99
};

function tasksCounter(obj) {
  var largest = Math.max.apply(Math, Object.values(obj));
  for (var worker in obj) {
    if (largest === obj[worker]) {
      console.log(worker);
    } else {
    }
  }
}

tasksCounter(tasksCompleted);


// Task_2

var image = {
  width: 100,
  height: 400,
  title: 'Cool image'
};

function multiplyNumeric(obj) {
  for (var key in obj) {
    if (typeof obj[key] === 'number') {
      obj[key] *= 2;
    } else {
    }
  }
  return console.log(obj);
}

multiplyNumeric(image);


// Task_3

var numbers = [];

do {
  var answer = prompt('Введите число', '');
  var parsed = parseInt(answer);
  if (!isNaN(parsed)) {
    numbers.push(parsed);
  }
} while (parsed || parsed === 0);

var sum = numbers.reduce(function (a, b) {
  return a + b;
});

alert(sum);
