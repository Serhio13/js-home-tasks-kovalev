// Task_1

function takeVowels(str) {
  var vowels = /[аоиеёэыуюя]/g;
  var counter = str.match(vowels).length;

  console.log(counter);
  return counter;
}

takeVowels(prompt('Введите строку', ''));


// Task_2

  for (var i = 0; i < 1; i++) {
    var firstName = prompt('Введите Ваше имя', '');
    if (firstName == '' || firstName == null) {
      alert('Ведите имя!');
      i--;
    } else {
      console.log('ok');
    }
  }

  for (var i = 0; i < 1; i++) {
    var surname = prompt('Введите Вашу фамилию', '');
    if (surname == '' || surname == null) {
      alert('Ведите фамилию!');
      i--;
    } else {
      console.log('ok');
    }
  }

  for (var i = 0; i < 1; i++) {
    var secname = prompt('Введите Ваше отчество', '');
    if (secname == '' || secname == null) {
      alert('Ведите отчество!');
      i--;
    } else {
      console.log('ok');
    }
  }

  for (var i = 0; i < 1; i++) {
    var age = +prompt('Введите Ваш возраст', '');
    if (isNaN(age)) {
      alert('Введите возраст цифрами!');
      i--;
    } else if (age === 0 || age > 120) {
      alert('Введите возраст корректно!');
      i--;
    } else {
      console.log('ok');
    }
  }

  var gender = confirm('Если ваш пол мужской, нажмите "OK"');
  gender ? gender = 'мужской' : gender = 'женский';

  var personalStatus;
  if (gender === 'мужской' && age > 63) {
    personalStatus = 'да';
  } else if (gender === 'женский' && age > 58) {
    personalStatus = 'да';
  } else {
    personalStatus = 'нет';
  }

  alert('Ваше ФИО: ' + surname + ' ' + firstName + ' ' + secname + '\n' +
  'Ваш возраст в годах: ' + age + '\n' +
  'Ваш возраст в днях: ' + (age * 365) + '\n' +
  'Через 5 лет Вам будет: ' + (age + 5) + '\n' +
  'Ваш пол: ' + gender + '\n' +
  'Вы на пенсии: ' + personalStatus);