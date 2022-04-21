function TLocalStorage(name) {
  var self = this;
  var newHash = {};
  self.reset = function () {
    newHash = JSON.parse(localStorage.getItem(name));
    return newHash;
  };
  self.addValue = function (key, value) {
    newHash[key] = value;
    localStorage.setItem(name, JSON.stringify(newHash));
  };
  self.getValue = function (key) {
    return newHash[key];
  };
  self.deleteValue = function (key) {
    delete newHash[key];
  };
  self.getKeys = function () {
    return Object.keys(JSON.parse(localStorage[name]));
  };
}