var object = {
    className: 'open menu menu'
};

function removeClassName(obj, cls) {
    var arr = Object.values(obj);
    var str = arr.join();
    var reg = new RegExp(cls, 'g');
    var newstr = str.replace(reg, '');
    var result = newstr.trim();
    
    object.className = result;
}

removeClassName(object, 'menu');

console.log(object);