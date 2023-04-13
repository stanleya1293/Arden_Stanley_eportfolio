$(".navButton").mouseenter(function() {
    $(this).animate({
        "width": "22%",
        "height": "65%",
        "margin-right": "1.5%",
        "margin-left": "1%",
        "margin-top": "0.5%",
    }, 200);
});
$(".navButton").mouseleave(function() {
    $(this).animate({
        "width": "20%",
        "height": "60%",
        "margin-right": "2.25%",
        "margin-left": "2.25%",
        "margin-top": "1%",
    }, 200);
});
$(".navButton").mousedown(function() {
    $(this).css("background-color", "white");
    $(this).css("color", "black");
});    
$(".navButton").mouseup(function() {
    $(this).css("background-color", "black");
    $(this).css("color", "white");
})