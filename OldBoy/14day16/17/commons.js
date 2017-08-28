function foo() {
    var tag = document.getElementById("i1");
    if(tag.value == "请输入关键字"){
        tag.value = "";
    };

}

function bar() {
    var tag = document.getElementById("i1");
    if(tag.value.length == 0){
        tag.value = "请输入关键字";
    };

}