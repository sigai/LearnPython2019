$(function () {
    $(".b").click(function () {
        alert("Fuck World")
    });
    $(".jump").click(function () {
        var v = $(this).prev().val();
        location.href = "/cms/user_list/?p="+v;
    })
});