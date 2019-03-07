$("button").dblclick(function() {
    $("#journey").show();
    $("h3").show();
});
$("#journey").click(function() {
    $("#map").show();
});
$("h2").show();
$("#map").click(function() {
    $("#treasurechest").toggle();
    $("h4").show();
});
$("#treasurechest").click(function() {
    $("secret").show();
});
$("#treasurechest").click(function() {
    $(".end").show();
    $("h5").show();
});
