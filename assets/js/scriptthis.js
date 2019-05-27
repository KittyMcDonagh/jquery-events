$(document).ready(function() {
    //    $(".box").on("click", function(){                              // click on any element with a "box" class
    //        var classNames=$(this).attr("class").split(" ");           // this splits out the box's classs names [box,one], [box,two] or [box,three]
    //        $("." + classNames[1]).css("background-color", "red");     // all boxes with that number will change to red
    //    });


    $(".box").on("click", function() {                                  // click on any element with a "box" class

        var classNames = $(this).attr("class").split(" ");              // this splits out the box's classs names [box,one], [box,two] or [box,three]
        var boxClass = classNames[0];                                   // = "box"
        var className = classNames[1];                                  // = "one", "two", or "three", depending on which box clicked
        if ($(this).css("background-color") == "rgb(255, 0, 0)") {      // if this object is already red, turn it black
            $("." + className).css("background-color", "#000");
        }
        else {
            $("." + boxClass).css("background-color", "#000");
            $("." + className).css("background-color", "rgb(255, 0, 0)");
        }
    });
})
