$(function () {
    $(".b").click(function () {
        alert("Fuck World")
    });
    $(".jump").click(function () {
        var v = $(this).prev().val();
        location.href = "/cms/user_list/?p="+v;
    });
    $("#s1").change(function () {
        var v = $(this).val();
        $.cookie("npp", v);
        console.log(v);
        location.reload()
    }).val($.cookie("npp"));
});