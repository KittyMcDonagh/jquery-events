$(document).ready(function() {
    $(".box").on("click", function(){                              // click on any box
        var classNames=$(this).attr("class").split(" ");           // this splits out the box's classs names [box,one], [box,two] or [box,three]
        $("." + classNames[1]).css("background-color", "red");     // all boxes with that number will change to red
    });
     
});


