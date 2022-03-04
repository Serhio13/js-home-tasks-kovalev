(function() {
  function THashStorage() {
    this.store = {};
  }

  THashStorage.prototype.AddValue = function(key, value) {
    this.store[key] = value;
  };

  THashStorage.prototype.GetValue = function(key) {
    return this.store[key];
  };

  THashStorage.prototype.DeleteValue = function(key) {
    if (!(key in this.store)) {
      return false;
    } else {
      return delete this.store[key];
    }
  };

  THashStorage.prototype.GetKeys = function() {
    return Object.keys(this.store);
  };


  var DrinkStorage = new THashStorage();

  var add = document.querySelector('#add');
  var get = document.querySelector('#get');
  var remove = document.querySelector('#remove');
  var keys = document.querySelector('#keys');
  var info = document.querySelector('.info');

  add.addEventListener('click', function() {
    var name = prompt('Введите название напитка');
    var alco = confirm('Нажмите OK если напиток алкогольный') ? 'Да' : 'Нет';
    var recipe = prompt('Введите рецепт');

    DrinkStorage.AddValue(name, {name: name, alco: alco, recipe: recipe});
    info.textContent = 'Напиток ' + name + ' Добавлен!';
  });

  get.addEventListener('click', function() {
    var name = prompt('Введите название');
    var value = DrinkStorage.GetValue(name);

    info.innerHTML = 'Напиток ' + '<strong>' + value.name + '</strong>' + '<br>' + 'Алкогольный: ' + '<strong>' + value.alco + '</strong>' + '<br>' + 'Рецепт приготовления: ' + '<strong>' + value.recipe + '</strong>';
  });

  remove.addEventListener('click', function() {
    var key = prompt('Введите название');

    DrinkStorage.DeleteValue(key) ? info.textContent = 'Напиток ' + key + ' Удалён' : info.textContent = 'Напиток ' + key + ' отсутствует в хранилище';
  });

  keys.addEventListener('click', function() {
    info.textContent = DrinkStorage.GetKeys();
  });

})();