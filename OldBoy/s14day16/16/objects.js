function foo(n) {
    this.name = n;
    this.sayName = function () {
        console.log(this.name);

    }
};

foo.prototype = {
    'speak':function () {
        console.log(this.name+" speak");

    }
};
foo.prototype = {
    'talk':function () {
        console.log(this.name+" talk");

    }
};
var obj = new foo("we");

console.log(foo.prototype);
obj.sayName();

obj.talk();

tag = document.getElementById('i1')
tag.innerText
tag.innerHTML
tag.value