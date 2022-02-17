var object = {
    className: 'open menu menu aaa menu menu aaa aaa'
};

function removeClassName(obj, cls) {
    var reg = new RegExp(cls, 'g');
    var newstr = obj.className.replace(reg, '');
    var result = newstr.replace(/ +/g, ' ').trim();
    
    object.className = result;
}

removeClassName(object, 'menu');

console.log(object);