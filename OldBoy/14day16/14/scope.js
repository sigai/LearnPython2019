function func() {
    if(1==1){
        var name="sigai";
    }
    console.log(name);
}

//func()

a = "sigai";
function foo() {
    var a = "apple";
    function bar() {
        var a = "banana";
        console.log(a);
    }
    bar()
}
//foo()

a = "sigai";
function foo() {
    var a = "apple";
    function bar() {
        console.log(a);
    }
    return bar;
}
var res = foo();
//res();

a = "sigai";
function foo() {
    var a = "apple";
    function bar() {
        console.log(a);
    }
    var a = "tony";
    return bar;
}
var res = foo();
res();
